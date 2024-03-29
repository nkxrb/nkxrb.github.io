---
title: Eureka-VS-Zookeeper
author: nkxrb
avatar: http://cdnblog.nkxrb.xyz/images/home/avatar.png
authorLink: blog.nkxrb.xyz
authorAbout: nkxrb
authorDesc: nkxrb
photos: http://cdnblog.nkxrb.xyz/images/archives/eureka.jpg
categories: linux
tags:
 - Eureka
 - zookeeper
date: 2018-08-05 14:00:01
comments: true
keywords: Eureka,Zookeeper
description: 'Eureka与Zookeeper的比较'
---

## Eureka的优势

 - 在Eureka平台中，如果某台服务器宕机，Eureka不会有类似于ZooKeeper的选举leader的过程；客户端请求会自动切换到新的Eureka节点；当宕机的服务器重新恢复后，Eureka会再次将其纳入到服务器集群管理之中；而对于它来说，所有要做的无非是同步一些新的服务注册信息而已。所以，再也不用担心有“掉队”的服务器恢复以后，会从Eureka服务器集群中剔除出去的风险了。Eureka甚至被设计用来应付范围更广的网络分割故障，并实现“0”宕机维护需求。（多个zookeeper之间网络出现问题,造成出现多个leader，发生脑裂）当网络分割故障发生时，每个Eureka节点，会持续的对外提供服务（注：ZooKeeper不会）：接收新的服务注册同时将它们提供给下游的服务发现请求。这样一来，就可以实现在同一个子网中（same side of partition），新发布的服务仍然可以被发现与访问。
 - 正常配置下，Eureka内置了心跳服务，用于淘汰一些“濒死”的服务器；如果在Eureka中注册的服务，它的“心跳”变得迟缓时，Eureka会将其整个剔除出管理范围（这点有点像ZooKeeper的做法）。这是个很好的功能，但是当网络分割故障发生时，这也是非常危险的；因为，那些因为网络问题（注：心跳慢被剔除了）而被剔除出去的服务器本身是很”健康“的，只是因为网络分割故障把Eureka集群分割成了独立的子网而不能互访而已。
幸运的是，Netflix考虑到了这个缺陷。如果Eureka服务节点在短时间里丢失了大量的心跳连接（注：可能发生了网络故障），那么这个Eureka节点会进入”自我保护模式“，同时保留那些“心跳死亡“的服务注册信息不过期。此时，这个Eureka节点对于新的服务还能提供注册服务，对于”死亡“的仍然保留，以防还有客户端向其发起请求。当网络故障恢复后，这个Eureka节点会退出”自我保护模式“。所以Eureka的哲学是，同时保留”好数据“与”坏数据“总比丢掉任何”好数据“要更好，所以这种模式在实践中非常有效。
 - Eureka还有客户端缓存功能（注：Eureka分为客户端程序与服务器端程序两个部分，客户端程序负责向外提供注册与发现服务接口）。所以即便Eureka集群中所有节点都失效，或者发生网络分割故障导致客户端不能访问任何一台Eureka服务器；Eureka服务的消费者仍然可以通过Eureka客户端缓存来获取现有的服务注册信息。甚至最极端的环境下，所有正常的Eureka节点都不对请求产生相应，也没有更好的服务器解决方案来解决这种问题
时；得益于Eureka的客户端缓存技术，消费者服务仍然可以通过Eureka客户端查询与获取注册服务信息，这点很重要。
 - Eureka的构架保证了它能够成为Service发现服务。它相对与ZooKeeper来说剔除了Leader节点的选取或者事务日志机制，这样做有利于减少使用者维护的难度也保证了Eureka的在运行时的健壮性。而且Eureka就是为发现服务所设计的，它有独立的客户端程序库，同时提供心跳服务、服务健康监测、自动发布服务与自动刷新缓存的功能。但是，如果使用ZooKeeper你必须自己来实现这些功能。Eureka的所有库都是开源的，所有人都能看到与使用这些源代码，这比那些只有一两个人能看或者维护的客户端库要好。
 - 维护Eureka服务器也非常的简单，比如，切换一个节点只需要在现有EIP下移除一个现有的节点然后添加一个新的就行。Eureka提供了一个web-based的图形化的运维界面，在这个界面中可以查看Eureka所管理的注册服务的运行状态信息：是否健康，运行日志等。Eureka甚至提供了Restful-API接口，方便第三方程序集成Eureka的功能。

## ZooKeeper的劣势

   在分布式系统领域有个著名的CAP定理（C-数据一致性；A-服务可用性；P-服务对网络分区故障的容错性，这三个特性在任何分布式系统中不能同时满足，最多同时满足两个）；ZooKeeper是个CP的，即任何时刻对ZooKeeper的访问请求能得到一致的数据结果，同时系统对网络分割具备容错性；但是它不能保证每次服务请求的可用性（注：也就是在极端环境下，ZooKeeper可能会丢弃一些请求，消费者程序需要重新请求才能获得结果）。但是别忘了，ZooKeeper是分布式协调服务，它的职责是保证数据（注：配置数据，状态数据）在其管辖下的所有服务之间保持同步、一致；所以就不难理解为什么ZooKeeper被设计成CP而不是AP特性的了，如果是AP的，那么将会带来恐怖的后果（注：ZooKeeper就像交叉路口的信号灯一样，你能想象在交通要道突然信号灯失灵的情况吗？）。而且，作为ZooKeeper的核心实现算法Zab，就是解决了分布式系统下数据如何在多个服务之间保持同步问题的。

 - 对于Service发现服务来说就算是返回了包含不实的信息的结果也比什么都不返回要好；再者，对于Service发现服务而言，宁可返回某服务5分钟之前在哪几个服务器上可用的信息，也不能因为暂时的网络故障而找不到可用的服务器，而不返回任何结果。所以说，用ZooKeeper来做Service发现服务是肯定错误的，如果你这么用就惨了！
   如果被用作Service发现服务，ZooKeeper本身并没有正确的处理网络分割的问题；而在云端，网络分割问题跟其他类型的故障一样的确会发生；所以最好提前对这个问题做好100%的准备。就像Jepsen在ZooKeeper网站上发布的博客中所说：在ZooKeeper中，如果在同一个网络分区（partition）的节点数（nodes）数达不到ZooKeeper选取Leader节点的“法定人数”时，它们就会从ZooKeeper中断开，当然同时也就不能提供Service发现服务了。

 - ZooKeeper下所有节点不可能保证任何时候都能缓存所有的服务注册信息。如果ZooKeeper下所有节点都断开了，或者集群中出现了网络分割的故障（注：由于交换机故障导致交换机底下的子网间不能互访）；那么ZooKeeper会将它们都从自己管理范围中剔除出去，外界就不能访问到这些节点了，即便这些节点本身是“健康”的，可以正常提供服务的；所以导致到达这些节点的服务请求被丢失了。（注：这也是为什么ZooKeeper不满足CAP中A的原因）

 - 更深层次的原因是，ZooKeeper是按照CP原则构建的，也就是说它能保证每个节点的数据保持一致，而为ZooKeeper加上缓存的做法的目的是为了让ZooKeeper变得更加可靠（available）；但是，ZooKeeper设计的本意是保持节点的数据一致，也就是CP。所以，这样一来，你可能既得不到一个数据一致的（CP）也得不到一个高可用的（AP）的Service发现服务了；因为，这相当于你在一个已有的CP系统上强制栓了一个AP的系统，这在本质上就行不通的！一个Service发现服务应该从一开始就被设计成高可用的才行！

 - 如果抛开CAP原理不管，正确的设置与维护ZooKeeper服务就非常的困难；错误会经常发生，导致很多工程被建立只是为了减轻维护ZooKeeper的难度。这些错误不仅存在与客户端而且还存在于ZooKeeper服务器本身。Knewton平台很多故障就是由于ZooKeeper使用不当而导致的。那些看似简单的操作，如：正确的重建观察者（reestablishing watcher）、客户端Session与异常的处理与在ZK窗口中管理内存都是非常容易导致ZooKeeper出错的。同时，我们确实也遇到过ZooKeeper的一些经典bug：ZooKeeper-1159 与ZooKeeper-1576；我们甚至在生产环境中遇到过ZooKeeper选举Leader节点失败的情况。这些问题之所以会出现，在于ZooKeeper需要管理与保障所管辖服务群的Session与网络连接资源（注：这些资源的管理在分布式系统环境下是极其困难的）；但是它不负责管理服务的发现，所以使用ZooKeeper当Service发现服务得不偿失。

## 一个集群有3台机器，挂了一台后的影响是什么？挂了两台呢？ 
  挂了一台：挂了一台后就是收不到其中一台的投票，但是有两台可以参与投票，按照上面的逻辑，它们开始都投给自己，后来按照选举的原则，两个人都投票给其中一个，那么就有一个节点获得的票等于2，2 > (3/2)=1 的，超过了半数，这个时候是能选出leader的。
  挂了两台： 挂了两台后，怎么弄也只能获得一张票， 1 不大于 (3/2)=1的，这样就无法选出一个leader了。
  ZAB（ZooKeeper Atomic Broadcast ） 全称为：原子消息广播协议；ZAB可以说是在Paxos算法基础上进行了扩展改造而来的，ZAB协议设计了支持崩溃恢复，ZooKeeper使用单一主进程Leader用于处理客户端所有事务请求，采用ZAB协议将服务器数状态以事务形式广播到所有Follower上；由于事务间可能存在着依赖关系，ZAB协议保证Leader广播的变更序列被顺序的处理，：一个状态被处理那么它所依赖的状态也已经提前被处理；ZAB协议支持的崩溃恢复可以保证在Leader进程崩溃的时候可以重新选出Leader并且保证数据的完整性；

  过半数（>=N/2+1） 的Follower反馈信息后，Leader将再次向集群内Follower广播Commit信息，Commit为将之前的Proposal提交；
  
## Eureka在SpringBoot中的配置(同时集成有springcloud)
项目启动会在classpath根目录下寻找bootstrap.yml文件
```yml
spring:
  application:
    name: seacamels-ommp   # 对应config server所获取的配置文件的{application}
  cloud:
    config:
      profile: dev
      label: master     #对应git服务器的，分支版本， 默认master
      discovery:
        enabled: false              # 表示使用服务发现组件中的Config Server，而不自己指定Config Server的uri，默认false
        service-id: config-server  # 指定Config Server在服务发现中的serviceId，默认是configserver
#  profiles:
#    active:
#    - secure

# tag::configuration-eureka[]
eureka:   #<1>
  instance:
    leaseRenewalIntervalInSeconds: 10
    health-check-url-path: /actuator/health
    metadata-map:
      startup: ${random.int}    #needed to trigger info and endpoint update after restart
  client:
    registryFetchIntervalSeconds: 5
    serviceUrl:
#      defaultZone: http://192.168.1.128:8012/eureka/,http://192.168.1.128:8012/eureka/
      defaultZone: http://192.168.1.111:19012/eureka/,http://192.168.1.111:19011/eureka/

management:
  endpoints:
    web:
      exposure:
        include: "*"  #<2>
  endpoint:
    health:
      show-details: ALWAYS

```