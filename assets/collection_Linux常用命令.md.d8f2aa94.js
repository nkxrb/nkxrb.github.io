import{_ as s,c as a,o as n,V as l}from"./chunks/framework.9b555ede.js";const D=JSON.parse('{"title":"Linux常用命令","description":"Linux常用命令","frontmatter":{"title":"Linux常用命令","author":"nkxrb","avatar":"http://cdnblog.nkxrb.xyz/images/home/avatar.png","authorLink":"blog.nkxrb.xyz","authorAbout":"nkxrb","authorDesc":"nkxrb","photos":"http://cdnblog.nkxrb.xyz/images/archives/linux3.jpg","categories":"linux","tags":["linux"],"date":"2015-08-06T10:18:00.000Z","comments":true,"keywords":"linux","description":"Linux常用命令"},"headers":[],"relativePath":"collection/Linux常用命令.md","filePath":"collection/Linux常用命令.md","lastUpdated":1640536454000}'),p={name:"collection/Linux常用命令.md"},e=l(`<h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看xxx的进程</span></span>
<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 杀死指定进程</span></span>
<span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-9</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看动态进程</span></span>
<span class="line"><span style="color:#FFCB6B;">top</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 复制一个文件</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file2</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将example.txt文件中的 &quot;string1&quot; 替换成 &quot;string2&quot; </span></span>
<span class="line"><span style="color:#FFCB6B;">sed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s/stringa1/stringa2/g</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">example.txt</span></span></code></pre></div><h2 id="系统信息" tabindex="-1">系统信息 <a class="header-anchor" href="#系统信息" aria-label="Permalink to &quot;系统信息&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">arch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示机器的处理器架构</span></span>
<span class="line"><span style="color:#FFCB6B;">uname</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示机器的处理器架构</span></span>
<span class="line"><span style="color:#FFCB6B;">uname</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示正在使用的内核版本</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">dmidecode</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-q</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示硬件系统部件</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> (SMBIOS </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DMI</span><span style="color:#A6ACCD;">) </span></span>
<span class="line"><span style="color:#FFCB6B;">hdparm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/hda</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">罗列一个磁盘的架构特性</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">hdparm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sda</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">在磁盘上执行测试性读取操作</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/cpuinfo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示CPU</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">info的信息</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/interrupts</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示中断</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/meminfo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">校验内存使用</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/swaps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示哪些swap被使用</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/version</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示内核的版本</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/net/dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示网络适配器及统计</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/mounts</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示已加载的文件系统</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">lspci</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">罗列</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PCI</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">设备</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">lsusb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USB</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">设备</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">date</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示系统日期</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">cal</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2007</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示2007年的日历表</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">date</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">041217002007</span><span style="color:#C3E88D;">.00</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">设置日期和时间</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">月日时分年.秒</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">clock</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-w</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">将时间修改保存到</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BIOS</span></span></code></pre></div><h2 id="查看进程" tabindex="-1">查看进程 <a class="header-anchor" href="#查看进程" aria-label="Permalink to &quot;查看进程&quot;">​</a></h2><p>查看静态进程：ps -a，查看所有 -u，以用户（user）的格式显示 -x, 显示后台进程运行参数 -e：显示系统内的所有进程信息。 -l：使用长（long）格式显示进程信息。 -f：使用完整的（full）格式显示进程信息</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ps aux 查看所有进程</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef |grep helloworld 查看helloworld的进程</span></span>
<span class="line"><span style="color:#A6ACCD;">kill -9 进程号  杀死该进程 </span></span>
<span class="line"><span style="color:#A6ACCD;">top  查看动态进程</span></span>
<span class="line"><span style="color:#A6ACCD;">pstree -aup  以树状形式展示进程</span></span></code></pre></div><h2 id="关机、重启以及登出" tabindex="-1">关机、重启以及登出 <a class="header-anchor" href="#关机、重启以及登出" aria-label="Permalink to &quot;关机、重启以及登出&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">shutdown -h now 关闭系统</span></span>
<span class="line"><span style="color:#A6ACCD;">init 0 关闭系统</span></span>
<span class="line"><span style="color:#A6ACCD;">telinit 0 关闭系统</span></span>
<span class="line"><span style="color:#A6ACCD;">shutdown -h hours:minutes &amp; 按预定时间关闭系统 </span></span>
<span class="line"><span style="color:#A6ACCD;">shutdown -c 取消按预定时间关闭系统 </span></span>
<span class="line"><span style="color:#A6ACCD;">shutdown -r now 重启</span></span>
<span class="line"><span style="color:#A6ACCD;">reboot 重启</span></span>
<span class="line"><span style="color:#A6ACCD;">logout 注销</span></span></code></pre></div><h2 id="文件和目录" tabindex="-1">文件和目录 <a class="header-anchor" href="#文件和目录" aria-label="Permalink to &quot;文件和目录&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd /home 进入 &#39;/ home&#39; 目录&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">cd .. 返回上一级目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">cd ../.. 返回上两级目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">cd 进入个人的主目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">cd ~user1 进入个人的主目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">cd - 返回上次所在的目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">pwd 显示工作路径 </span></span>
<span class="line"><span style="color:#A6ACCD;">ls 查看目录中的文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">ls -F 查看目录中的文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">ls -l 显示文件和目录的详细资料 </span></span>
<span class="line"><span style="color:#A6ACCD;">ls -a 显示隐藏文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">ls *[0-9]* 显示包含数字的文件名和目录名 </span></span>
<span class="line"><span style="color:#A6ACCD;">tree 显示文件和目录由根目录开始的树形结构</span></span>
<span class="line"><span style="color:#A6ACCD;">lstree 显示文件和目录由根目录开始的树形结构</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir dir1 创建一个叫做 &#39;dir1&#39; 的目录&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir dir1 dir2 同时创建两个目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p /tmp/dir1/dir2 创建一个目录树 </span></span>
<span class="line"><span style="color:#A6ACCD;">rm -f file1 删除一个叫做 &#39;file1&#39; 的文件&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">rmdir dir1 删除一个叫做 &#39;dir1&#39; 的目录&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf dir1 删除一个叫做 &#39;dir1&#39; 的目录并同时删除其内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf dir1 dir2 同时删除两个目录及它们的内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">mv dir1 new_dir 重命名/移动 一个目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">cp file1 file2 复制一个文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">cp dir/* . 复制一个目录下的所有文件到当前工作目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">cp -a /tmp/dir1 . 复制一个目录到当前工作目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">cp -a dir1 dir2 复制一个目录 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cp -r dir1 dir2 复制一个目录及子目录</span></span>
<span class="line"><span style="color:#A6ACCD;">ln -s file1 lnk1 创建一个指向文件或目录的软链接 </span></span>
<span class="line"><span style="color:#A6ACCD;">ln file1 lnk1 创建一个指向文件或目录的物理链接 </span></span>
<span class="line"><span style="color:#A6ACCD;">touch -t 0712250000 file1 修改一个文件或目录的时间戳 - (YYMMDDhhmm) </span></span>
<span class="line"><span style="color:#A6ACCD;">file file1 outputs the mime type of the file as text </span></span>
<span class="line"><span style="color:#A6ACCD;">iconv -l 列出已知的编码 </span></span>
<span class="line"><span style="color:#A6ACCD;">iconv -f fromEncoding -t toEncoding inputFile &gt; outputFile creates a new from the given input file by assuming it is encoded in fromEncoding and converting it to toEncoding. </span></span>
<span class="line"><span style="color:#A6ACCD;">find . -maxdepth 1 -name *.jpg -print -exec convert &quot;{}&quot; -resize 80x60 &quot;thumbs/{}&quot; \\; batch resize files in the current directory and send them to a thumbnails directory (requires convert from Imagemagick)</span></span></code></pre></div><h2 id="文件搜索" tabindex="-1">文件搜索 <a class="header-anchor" href="#文件搜索" aria-label="Permalink to &quot;文件搜索&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">find / -name file1 从 &#39;/&#39; 开始进入根文件系统搜索文件和目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">find / -user user1 搜索属于用户 &#39;user1&#39; 的文件和目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">find /home/user1 -name \\*.bin 在目录 &#39;/ home/user1&#39; 中搜索带有&#39;.bin&#39; 结尾的文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">find /usr/bin -type f -atime +100 搜索在过去100天内未被使用过的执行文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">find /usr/bin -type f -mtime -10 搜索在10天内被创建或者修改过的文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">find / -name \\*.rpm -exec chmod 755 &#39;{}&#39; \\; 搜索以 &#39;.rpm&#39; 结尾的文件并定义其权限 </span></span>
<span class="line"><span style="color:#A6ACCD;">find / -xdev -name \\*.rpm 搜索以 &#39;.rpm&#39; 结尾的文件，忽略光驱、捷盘等可移动设备 </span></span>
<span class="line"><span style="color:#A6ACCD;">locate \\*.ps 寻找以 &#39;.ps&#39; 结尾的文件 - 先运行 &#39;updatedb&#39; 命令 </span></span>
<span class="line"><span style="color:#A6ACCD;">whereis halt 显示一个二进制文件、源码或man的位置 </span></span>
<span class="line"><span style="color:#A6ACCD;">which halt 显示一个二进制文件或可执行文件的完整路径</span></span></code></pre></div><h2 id="挂载一个文件系统" tabindex="-1">挂载一个文件系统 <a class="header-anchor" href="#挂载一个文件系统" aria-label="Permalink to &quot;挂载一个文件系统&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mount /dev/hda2 /mnt/hda2 挂载一个叫做hda2的盘 - 确定目录 &#39;/ mnt/hda2&#39; 已经存在 </span></span>
<span class="line"><span style="color:#A6ACCD;">umount /dev/hda2 卸载一个叫做hda2的盘 - 先从挂载点 &#39;/ mnt/hda2&#39; 退出 </span></span>
<span class="line"><span style="color:#A6ACCD;">fuser -km /mnt/hda2 当设备繁忙时强制卸载 </span></span>
<span class="line"><span style="color:#A6ACCD;">umount -n /mnt/hda2 运行卸载操作而不写入 /etc/mtab 文件- 当文件为只读或当磁盘写满时非常有用 </span></span>
<span class="line"><span style="color:#A6ACCD;">mount /dev/fd0 /mnt/floppy 挂载一个软盘 </span></span>
<span class="line"><span style="color:#A6ACCD;">mount /dev/cdrom /mnt/cdrom 挂载一个cdrom或dvdrom </span></span>
<span class="line"><span style="color:#A6ACCD;">mount /dev/hdc /mnt/cdrecorder 挂载一个cdrw或dvdrom </span></span>
<span class="line"><span style="color:#A6ACCD;">mount /dev/hdb /mnt/cdrecorder 挂载一个cdrw或dvdrom </span></span>
<span class="line"><span style="color:#A6ACCD;">mount -o loop file.iso /mnt/cdrom 挂载一个文件或ISO镜像文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">mount -t vfat /dev/hda5 /mnt/hda5 挂载一个Windows FAT32文件系统 </span></span>
<span class="line"><span style="color:#A6ACCD;">mount /dev/sda1 /mnt/usbdisk 挂载一个usb 捷盘或闪存设备 </span></span>
<span class="line"><span style="color:#A6ACCD;">mount -t smbfs -o username=user,password=pass //WinClient/share /mnt/share 挂载一个windows网络共享</span></span></code></pre></div><h2 id="磁盘空间" tabindex="-1">磁盘空间 <a class="header-anchor" href="#磁盘空间" aria-label="Permalink to &quot;磁盘空间&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">df -h 显示已经挂载的分区列表 </span></span>
<span class="line"><span style="color:#A6ACCD;">ls -lSr |more 以尺寸大小排列文件和目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">du -sh dir1 估算目录 &#39;dir1&#39; 已经使用的磁盘空间&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">du -sk * | sort -rn 以容量大小为依据依次显示文件和目录的大小 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -q -a --qf &#39;%10{SIZE}t%{NAME}n&#39; | sort -k1,1n 以大小为依据依次显示已安装的rpm包所使用的空间 (fedora, redhat类系统) </span></span>
<span class="line"><span style="color:#A6ACCD;">dpkg-query -W -f=&#39;\${Installed-Size;10}t\${Package}n&#39; | sort -k1,1n 以大小为依据显示已安装的deb包所使用的空间 (ubuntu, debian类系统)</span></span></code></pre></div><h2 id="用户和群组" tabindex="-1">用户和群组 <a class="header-anchor" href="#用户和群组" aria-label="Permalink to &quot;用户和群组&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">groupadd group_name 创建一个新用户组 </span></span>
<span class="line"><span style="color:#A6ACCD;">groupdel group_name 删除一个用户组 </span></span>
<span class="line"><span style="color:#A6ACCD;">groupmod -n new_group_name old_group_name 重命名一个用户组 </span></span>
<span class="line"><span style="color:#A6ACCD;">useradd -c &quot;Name Surname &quot; -g admin -d /home/user1 -s /bin/bash user1 创建一个属于 &quot;admin&quot; 用户组的用户 </span></span>
<span class="line"><span style="color:#A6ACCD;">useradd user1 创建一个新用户 </span></span>
<span class="line"><span style="color:#A6ACCD;">userdel -r user1 删除一个用户 ( &#39;-r&#39; 排除主目录) </span></span>
<span class="line"><span style="color:#A6ACCD;">usermod -c &quot;User FTP&quot; -g system -d /ftp/user1 -s /bin/nologin user1 修改用户属性 </span></span>
<span class="line"><span style="color:#A6ACCD;">passwd 修改口令 </span></span>
<span class="line"><span style="color:#A6ACCD;">passwd user1 修改一个用户的口令 (只允许root执行) </span></span>
<span class="line"><span style="color:#A6ACCD;">chage -E 2005-12-31 user1 设置用户口令的失效期限 </span></span>
<span class="line"><span style="color:#A6ACCD;">pwck 检查 &#39;/etc/passwd&#39; 的文件格式和语法修正以及存在的用户 </span></span>
<span class="line"><span style="color:#A6ACCD;">grpck 检查 &#39;/etc/passwd&#39; 的文件格式和语法修正以及存在的群组 </span></span>
<span class="line"><span style="color:#A6ACCD;">newgrp group_name 登陆进一个新的群组以改变新创建文件的预设群组</span></span></code></pre></div><h2 id="文件的权限" tabindex="-1">文件的权限 <a class="header-anchor" href="#文件的权限" aria-label="Permalink to &quot;文件的权限&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ls -lh 显示权限 </span></span>
<span class="line"><span style="color:#A6ACCD;">ls /tmp | pr -T5 -W$COLUMNS 将终端划分成5栏显示 </span></span>
<span class="line"><span style="color:#A6ACCD;">chmod ugo+rwx directory1 设置目录的所有人(u)、群组(g)以及其他人(o)以读（r ）、写(w)和执行(x)的权限 </span></span>
<span class="line"><span style="color:#A6ACCD;">chmod go-rwx directory1 删除群组(g)与其他人(o)对目录的读写执行权限 </span></span>
<span class="line"><span style="color:#A6ACCD;">chown user1 file1 改变一个文件的所有人属性 </span></span>
<span class="line"><span style="color:#A6ACCD;">chown -R user1 directory1 改变一个目录的所有人属性并同时改变改目录下所有文件的属性 </span></span>
<span class="line"><span style="color:#A6ACCD;">chgrp group1 file1 改变文件的群组 </span></span>
<span class="line"><span style="color:#A6ACCD;">chown user1:group1 file1 改变一个文件的所有人和群组属性 </span></span>
<span class="line"><span style="color:#A6ACCD;">find / -perm -u+s 罗列一个系统中所有使用了SUID控制的文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">chmod u+s /bin/file1 设置一个二进制文件的 SUID 位 - 运行该文件的用户也被赋予和所有者同样的权限 </span></span>
<span class="line"><span style="color:#A6ACCD;">chmod u-s /bin/file1 禁用一个二进制文件的 SUID位 </span></span>
<span class="line"><span style="color:#A6ACCD;">chmod g+s /home/public 设置一个目录的SGID 位 - 类似SUID ，不过这是针对目录的 </span></span>
<span class="line"><span style="color:#A6ACCD;">chmod g-s /home/public 禁用一个目录的 SGID 位 </span></span>
<span class="line"><span style="color:#A6ACCD;">chmod o+t /home/public 设置一个文件的 STIKY 位 - 只允许合法所有人删除文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">chmod o-t /home/public 禁用一个目录的 STIKY 位</span></span></code></pre></div><h2 id="文件的特殊属性" tabindex="-1">文件的特殊属性 <a class="header-anchor" href="#文件的特殊属性" aria-label="Permalink to &quot;文件的特殊属性&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">chattr +a file1 只允许以追加方式读写文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">chattr +c file1 允许这个文件能被内核自动压缩/解压 </span></span>
<span class="line"><span style="color:#A6ACCD;">chattr +d file1 在进行文件系统备份时，dump程序将忽略这个文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">chattr +i file1 设置成不可变的文件，不能被删除、修改、重命名或者链接 </span></span>
<span class="line"><span style="color:#A6ACCD;">chattr +s file1 允许一个文件被安全地删除 </span></span>
<span class="line"><span style="color:#A6ACCD;">chattr +S file1 一旦应用程序对这个文件执行了写操作，使系统立刻把修改的结果写到磁盘 </span></span>
<span class="line"><span style="color:#A6ACCD;">chattr +u file1 若文件被删除，系统会允许你在以后恢复这个被删除的文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">lsattr 显示特殊的属性</span></span></code></pre></div><h2 id="打包和压缩文件" tabindex="-1">打包和压缩文件 <a class="header-anchor" href="#打包和压缩文件" aria-label="Permalink to &quot;打包和压缩文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bunzip2 file1.bz2 解压一个叫做 &#39;file1.bz2&#39;的文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">bzip2 file1 压缩一个叫做 &#39;file1&#39; 的文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">gunzip file1.gz 解压一个叫做 &#39;file1.gz&#39;的文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">gzip file1 压缩一个叫做 &#39;file1&#39;的文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">gzip -9 file1 最大程度压缩 </span></span>
<span class="line"><span style="color:#A6ACCD;">rar a file1.rar test_file 创建一个叫做 &#39;file1.rar&#39; 的包 </span></span>
<span class="line"><span style="color:#A6ACCD;">rar a file1.rar file1 file2 dir1 同时压缩 &#39;file1&#39;, &#39;file2&#39; 以及目录 &#39;dir1&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">rar x file1.rar 解压rar包 </span></span>
<span class="line"><span style="color:#A6ACCD;">unrar x file1.rar 解压rar包 </span></span>
<span class="line"><span style="color:#A6ACCD;">tar -cvf archive.tar file1 创建一个非压缩的 tarball </span></span>
<span class="line"><span style="color:#A6ACCD;">tar -cvf archive.tar file1 file2 dir1 创建一个包含了 &#39;file1&#39;, &#39;file2&#39; 以及 &#39;dir1&#39;的档案文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">tar -tf archive.tar 显示一个包中的内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">tar -xvf archive.tar 释放一个包 </span></span>
<span class="line"><span style="color:#A6ACCD;">tar -xvf archive.tar -C /tmp 将压缩包释放到 /tmp目录下 </span></span>
<span class="line"><span style="color:#A6ACCD;">tar -cvfj archive.tar.bz2 dir1 创建一个bzip2格式的压缩包 </span></span>
<span class="line"><span style="color:#A6ACCD;">tar -jxvf archive.tar.bz2 解压一个bzip2格式的压缩包 </span></span>
<span class="line"><span style="color:#A6ACCD;">tar -cvfz archive.tar.gz dir1 创建一个gzip格式的压缩包 </span></span>
<span class="line"><span style="color:#A6ACCD;">tar -zxvf archive.tar.gz 解压一个gzip格式的压缩包 </span></span>
<span class="line"><span style="color:#A6ACCD;">zip file1.zip file1 创建一个zip格式的压缩包 </span></span>
<span class="line"><span style="color:#A6ACCD;">zip -r file1.zip file1 file2 dir1 将几个文件和目录同时压缩成一个zip格式的压缩包 </span></span>
<span class="line"><span style="color:#A6ACCD;">unzip file1.zip 解压一个zip格式压缩包</span></span></code></pre></div><h2 id="rpm-包" tabindex="-1">RPM 包 <a class="header-anchor" href="#rpm-包" aria-label="Permalink to &quot;RPM 包&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rpm -ivh package.rpm 安装一个rpm包 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -ivh --nodeeps package.rpm 安装一个rpm包而忽略依赖关系警告 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -U package.rpm 更新一个rpm包但不改变其配置文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -F package.rpm 更新一个确定已经安装的rpm包 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e package_name.rpm 删除一个rpm包 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qa 显示系统中所有已经安装的rpm包 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qa | grep httpd 显示所有名称中包含 &quot;httpd&quot; 字样的rpm包 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qi package_name 获取一个已安装包的特殊信息 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qg &quot;System Environment/Daemons&quot; 显示一个组件的rpm包 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -ql package_name 显示一个已经安装的rpm包提供的文件列表 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qc package_name 显示一个已经安装的rpm包提供的配置文件列表 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -q package_name --whatrequires 显示与一个rpm包存在依赖关系的列表 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -q package_name --whatprovides 显示一个rpm包所占的体积 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -q package_name --scripts 显示在安装/删除期间所执行的脚本l </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -q package_name --changelog 显示一个rpm包的修改历史 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qf /etc/httpd/conf/httpd.conf 确认所给的文件由哪个rpm包所提供 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qp package.rpm -l 显示由一个尚未安装的rpm包提供的文件列表 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm --import /media/cdrom/RPM-GPG-KEY 导入公钥数字证书 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm --checksig package.rpm 确认一个rpm包的完整性 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qa gpg-pubkey 确认已安装的所有rpm包的完整性 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -V package_name 检查文件尺寸、 许可、类型、所有者、群组、MD5检查以及最后修改时间 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -Va 检查系统中所有已安装的rpm包- 小心使用 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -Vp package.rpm 确认一个rpm包还未安装 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm2cpio package.rpm | cpio --extract --make-directories *bin* 从一个rpm包运行可执行文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -ivh /usr/src/redhat/RPMS/\`arch\`/package.rpm 从一个rpm源码安装一个构建好的包 </span></span>
<span class="line"><span style="color:#A6ACCD;">rpmbuild --rebuild package_name.src.rpm 从一个rpm源码构建一个 rpm 包</span></span></code></pre></div><h2 id="yum-软件包升级器" tabindex="-1">YUM 软件包升级器 <a class="header-anchor" href="#yum-软件包升级器" aria-label="Permalink to &quot;YUM 软件包升级器&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">yum install package_name 下载并安装一个rpm包 </span></span>
<span class="line"><span style="color:#A6ACCD;">yum localinstall package_name.rpm 将安装一个rpm包，使用你自己的软件仓库为你解决所有依赖关系 </span></span>
<span class="line"><span style="color:#A6ACCD;">yum update package_name.rpm 更新当前系统中所有安装的rpm包 </span></span>
<span class="line"><span style="color:#A6ACCD;">yum update package_name 更新一个rpm包 </span></span>
<span class="line"><span style="color:#A6ACCD;">yum remove package_name 删除一个rpm包 </span></span>
<span class="line"><span style="color:#A6ACCD;">yum list 列出当前系统中安装的所有包 </span></span>
<span class="line"><span style="color:#A6ACCD;">yum search package_name 在rpm仓库中搜寻软件包 </span></span>
<span class="line"><span style="color:#A6ACCD;">yum clean packages 清理rpm缓存删除下载的包 </span></span>
<span class="line"><span style="color:#A6ACCD;">yum clean headers 删除所有头文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">yum clean all 删除所有缓存的包和头文件</span></span></code></pre></div><h2 id="deb包-debian-ubuntu等" tabindex="-1">DEB包(Debian,Ubuntu等) <a class="header-anchor" href="#deb包-debian-ubuntu等" aria-label="Permalink to &quot;DEB包(Debian,Ubuntu等)&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dpkg -i package.deb 安装/更新一个 deb 包 </span></span>
<span class="line"><span style="color:#A6ACCD;">dpkg -r package_name 从系统删除一个 deb 包 </span></span>
<span class="line"><span style="color:#A6ACCD;">dpkg -l 显示系统中所有已经安装的 deb 包 </span></span>
<span class="line"><span style="color:#A6ACCD;">dpkg -l | grep httpd 显示所有名称中包含 &quot;httpd&quot; 字样的deb包 </span></span>
<span class="line"><span style="color:#A6ACCD;">dpkg -s package_name 获得已经安装在系统中一个特殊包的信息 </span></span>
<span class="line"><span style="color:#A6ACCD;">dpkg -L package_name 显示系统中已经安装的一个deb包所提供的文件列表 </span></span>
<span class="line"><span style="color:#A6ACCD;">dpkg --contents package.deb 显示尚未安装的一个包所提供的文件列表 </span></span>
<span class="line"><span style="color:#A6ACCD;">dpkg -S /bin/ping 确认所给的文件由哪个deb包提供</span></span></code></pre></div><h2 id="apt软件工具-debian-ubuntu等" tabindex="-1">APT软件工具(Debian,Ubuntu等) <a class="header-anchor" href="#apt软件工具-debian-ubuntu等" aria-label="Permalink to &quot;APT软件工具(Debian,Ubuntu等)&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt-get install package_name 安装/更新一个 deb 包 </span></span>
<span class="line"><span style="color:#A6ACCD;">apt-cdrom install package_name 从光盘安装/更新一个 deb 包 </span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get update 升级列表中的软件包 </span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get upgrade 升级所有已安装的软件 </span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get remove package_name 从系统删除一个deb包 </span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get check 确认依赖的软件仓库正确 </span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get clean 从下载的软件包中清理缓存 </span></span>
<span class="line"><span style="color:#A6ACCD;">apt-cache search searched-package 返回包含所要搜索字符串的软件包名称</span></span></code></pre></div><h2 id="查看文件内容" tabindex="-1">查看文件内容 <a class="header-anchor" href="#查看文件内容" aria-label="Permalink to &quot;查看文件内容&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cat file1 从第一个字节开始正向查看文件的内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">tac file1 从最后一行开始反向查看一个文件的内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">more file1 查看一个长文件的内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">less file1 类似于 &#39;more&#39; 命令，但是它允许在文件中和正向操作一样的反向操作 </span></span>
<span class="line"><span style="color:#A6ACCD;">head -2 file1 查看一个文件的前两行 </span></span>
<span class="line"><span style="color:#A6ACCD;">tail -2 file1 查看一个文件的最后两行 </span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/messages 实时查看被添加到一个文件中的内容</span></span></code></pre></div><h2 id="文本处理" tabindex="-1">文本处理 <a class="header-anchor" href="#文本处理" aria-label="Permalink to &quot;文本处理&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cat file1 file2 ... | command &lt;&gt; file1_in.txt_or_file1_out.txt general syntax for text manipulation using PIPE, STDIN and STDOUT </span></span>
<span class="line"><span style="color:#A6ACCD;">cat file1 | command( sed, grep, awk, grep, etc...) &gt; result.txt 合并一个文件的详细说明文本，并将简介写入一个新文件中 </span></span>
<span class="line"><span style="color:#A6ACCD;">cat file1 | command( sed, grep, awk, grep, etc...) &gt;&gt; result.txt 合并一个文件的详细说明文本，并将简介写入一个已有的文件中 </span></span>
<span class="line"><span style="color:#A6ACCD;">grep Aug /var/log/messages 在文件 &#39;/var/log/messages&#39;中查找关键词&quot;Aug&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">grep ^Aug /var/log/messages 在文件 &#39;/var/log/messages&#39;中查找以&quot;Aug&quot;开始的词汇 </span></span>
<span class="line"><span style="color:#A6ACCD;">grep [0-9] /var/log/messages 选择 &#39;/var/log/messages&#39; 文件中所有包含数字的行 </span></span>
<span class="line"><span style="color:#A6ACCD;">grep Aug -R /var/log/* 在目录 &#39;/var/log&#39; 及随后的目录中搜索字符串&quot;Aug&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;s/stringa1/stringa2/g&#39; example.txt 将example.txt文件中的 &quot;string1&quot; 替换成 &quot;string2&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;/^$/d&#39; example.txt 从example.txt文件中删除所有空白行 </span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;/ *#/d; /^$/d&#39; example.txt 从example.txt文件中删除所有注释和空白行 </span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;esempio&#39; | tr &#39;[:lower:]&#39; &#39;[:upper:]&#39; 合并上下单元格内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">sed -e &#39;1d&#39; result.txt 从文件example.txt 中排除第一行 </span></span>
<span class="line"><span style="color:#A6ACCD;">sed -n &#39;/stringa1/p&#39; 查看只包含词汇 &quot;string1&quot;的行 </span></span>
<span class="line"><span style="color:#A6ACCD;">sed -e &#39;s/ *$//&#39; example.txt 删除每一行最后的空白字符 </span></span>
<span class="line"><span style="color:#A6ACCD;">sed -e &#39;s/stringa1//g&#39; example.txt 从文档中只删除词汇 &quot;string1&quot; 并保留剩余全部 </span></span>
<span class="line"><span style="color:#A6ACCD;">sed -n &#39;1,5p;5q&#39; example.txt 查看从第一行到第5行内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">sed -n &#39;5p;5q&#39; example.txt 查看第5行 </span></span>
<span class="line"><span style="color:#A6ACCD;">sed -e &#39;s/00*/0/g&#39; example.txt 用单个零替换多个零 </span></span>
<span class="line"><span style="color:#A6ACCD;">cat -n file1 标示文件的行数 </span></span>
<span class="line"><span style="color:#A6ACCD;">cat example.txt | awk &#39;NR%2==1&#39; 删除example.txt文件中的所有偶数行 </span></span>
<span class="line"><span style="color:#A6ACCD;">echo a b c | awk &#39;{print $1}&#39; 查看一行第一栏 </span></span>
<span class="line"><span style="color:#A6ACCD;">echo a b c | awk &#39;{print $1,$3}&#39; 查看一行的第一和第三栏 </span></span>
<span class="line"><span style="color:#A6ACCD;">paste file1 file2 合并两个文件或两栏的内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">paste -d &#39;+&#39; file1 file2 合并两个文件或两栏的内容，中间用&quot;+&quot;区分 </span></span>
<span class="line"><span style="color:#A6ACCD;">sort file1 file2 排序两个文件的内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">sort file1 file2 | uniq 取出两个文件的并集(重复的行只保留一份) </span></span>
<span class="line"><span style="color:#A6ACCD;">sort file1 file2 | uniq -u 删除交集，留下其他的行 </span></span>
<span class="line"><span style="color:#A6ACCD;">sort file1 file2 | uniq -d 取出两个文件的交集(只留下同时存在于两个文件中的文件) </span></span>
<span class="line"><span style="color:#A6ACCD;">comm -1 file1 file2 比较两个文件的内容只删除 &#39;file1&#39; 所包含的内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">comm -2 file1 file2 比较两个文件的内容只删除 &#39;file2&#39; 所包含的内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">comm -3 file1 file2 比较两个文件的内容只删除两个文件共有的部分</span></span></code></pre></div><h2 id="字符设置和文件格式转换" tabindex="-1">字符设置和文件格式转换 <a class="header-anchor" href="#字符设置和文件格式转换" aria-label="Permalink to &quot;字符设置和文件格式转换&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dos2unix filedos.txt fileunix.txt 将一个文本文件的格式从MSDOS转换成UNIX </span></span>
<span class="line"><span style="color:#A6ACCD;">unix2dos fileunix.txt filedos.txt 将一个文本文件的格式从UNIX转换成MSDOS </span></span>
<span class="line"><span style="color:#A6ACCD;">recode ..HTML &lt; page.txt &gt; page.html 将一个文本文件转换成html </span></span>
<span class="line"><span style="color:#A6ACCD;">recode -l | more 显示所有允许的转换格式</span></span></code></pre></div><h2 id="文件系统分析" tabindex="-1">文件系统分析 <a class="header-anchor" href="#文件系统分析" aria-label="Permalink to &quot;文件系统分析&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">badblocks -v /dev/hda1 检查磁盘hda1上的坏磁块 </span></span>
<span class="line"><span style="color:#A6ACCD;">fsck /dev/hda1 修复/检查hda1磁盘上linux文件系统的完整性 </span></span>
<span class="line"><span style="color:#A6ACCD;">fsck.ext2 /dev/hda1 修复/检查hda1磁盘上ext2文件系统的完整性 </span></span>
<span class="line"><span style="color:#A6ACCD;">e2fsck /dev/hda1 修复/检查hda1磁盘上ext2文件系统的完整性 </span></span>
<span class="line"><span style="color:#A6ACCD;">e2fsck -j /dev/hda1 修复/检查hda1磁盘上ext3文件系统的完整性 </span></span>
<span class="line"><span style="color:#A6ACCD;">fsck.ext3 /dev/hda1 修复/检查hda1磁盘上ext3文件系统的完整性 </span></span>
<span class="line"><span style="color:#A6ACCD;">fsck.vfat /dev/hda1 修复/检查hda1磁盘上fat文件系统的完整性 </span></span>
<span class="line"><span style="color:#A6ACCD;">fsck.msdos /dev/hda1 修复/检查hda1磁盘上dos文件系统的完整性 </span></span>
<span class="line"><span style="color:#A6ACCD;">dosfsck /dev/hda1 修复/检查hda1磁盘上dos文件系统的完整性</span></span></code></pre></div><h2 id="初始化一个文件系统" tabindex="-1">初始化一个文件系统 <a class="header-anchor" href="#初始化一个文件系统" aria-label="Permalink to &quot;初始化一个文件系统&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mkfs /dev/hda1 在hda1分区创建一个文件系统 </span></span>
<span class="line"><span style="color:#A6ACCD;">mke2fs /dev/hda1 在hda1分区创建一个linux ext2的文件系统 </span></span>
<span class="line"><span style="color:#A6ACCD;">mke2fs -j /dev/hda1 在hda1分区创建一个linux ext3(日志型)的文件系统 </span></span>
<span class="line"><span style="color:#A6ACCD;">mkfs -t vfat 32 -F /dev/hda1 创建一个 FAT32 文件系统 </span></span>
<span class="line"><span style="color:#A6ACCD;">fdformat -n /dev/fd0 格式化一个软盘 </span></span>
<span class="line"><span style="color:#A6ACCD;">mkswap /dev/hda3 创建一个swap文件系统</span></span></code></pre></div><h2 id="swap文件系统" tabindex="-1">SWAP文件系统 <a class="header-anchor" href="#swap文件系统" aria-label="Permalink to &quot;SWAP文件系统&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mkswap /dev/hda3 创建一个swap文件系统 </span></span>
<span class="line"><span style="color:#A6ACCD;">swapon /dev/hda3 启用一个新的swap文件系统 </span></span>
<span class="line"><span style="color:#A6ACCD;">swapon /dev/hda2 /dev/hdb3 启用两个swap分区</span></span></code></pre></div><h2 id="备份" tabindex="-1">备份 <a class="header-anchor" href="#备份" aria-label="Permalink to &quot;备份&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dump -0aj -f /tmp/home0.bak /home 制作一个 &#39;/home&#39; 目录的完整备份 </span></span>
<span class="line"><span style="color:#A6ACCD;">dump -1aj -f /tmp/home0.bak /home 制作一个 &#39;/home&#39; 目录的交互式备份 </span></span>
<span class="line"><span style="color:#A6ACCD;">restore -if /tmp/home0.bak 还原一个交互式备份 </span></span>
<span class="line"><span style="color:#A6ACCD;">rsync -rogpav --delete /home /tmp 同步两边的目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">rsync -rogpav -e ssh --delete /home ip_address:/tmp 通过SSH通道rsync </span></span>
<span class="line"><span style="color:#A6ACCD;">rsync -az -e ssh --delete ip_addr:/home/public /home/local 通过ssh和压缩将一个远程目录同步到本地目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">rsync -az -e ssh --delete /home/local ip_addr:/home/public 通过ssh和压缩将本地目录同步到远程目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">dd bs=1M if=/dev/hda | gzip | ssh user@ip_addr &#39;dd of=hda.gz&#39; 通过ssh在远程主机上执行一次备份本地磁盘的操作 </span></span>
<span class="line"><span style="color:#A6ACCD;">dd if=/dev/sda of=/tmp/file1 备份磁盘内容到一个文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">tar -Puf backup.tar /home/user 执行一次对 &#39;/home/user&#39; 目录的交互式备份操作 </span></span>
<span class="line"><span style="color:#A6ACCD;">( cd /tmp/local/ &amp;&amp; tar c . ) | ssh -C user@ip_addr &#39;cd /home/share/ &amp;&amp; tar x -p&#39; 通过ssh在远程目录中复制一个目录内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">( tar c /home ) | ssh -C user@ip_addr &#39;cd /home/backup-home &amp;&amp; tar x -p&#39; 通过ssh在远程目录中复制一个本地目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">tar cf - . | (cd /tmp/backup ; tar xf - ) 本地将一个目录复制到另一个地方，保留原有权限及链接 </span></span>
<span class="line"><span style="color:#A6ACCD;">find /home/user1 -name &#39;*.txt&#39; | xargs cp -av --target-directory=/home/backup/ --parents 从一个目录查找并复制所有以 &#39;.txt&#39; 结尾的文件到另一个目录 </span></span>
<span class="line"><span style="color:#A6ACCD;">find /var/log -name &#39;*.log&#39; | tar cv --files-from=- | bzip2 &gt; log.tar.bz2 查找所有以 &#39;.log&#39; 结尾的文件并做成一个bzip包 </span></span>
<span class="line"><span style="color:#A6ACCD;">dd if=/dev/hda of=/dev/fd0 bs=512 count=1 做一个将 MBR (Master Boot Record)内容复制到软盘的动作 </span></span>
<span class="line"><span style="color:#A6ACCD;">dd if=/dev/fd0 of=/dev/hda bs=512 count=1 从已经保存到软盘的备份中恢复MBR内容</span></span></code></pre></div><p>#光盘</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cdrecord -v gracetime=2 dev=/dev/cdrom -eject blank=fast -force 清空一个可复写的光盘内容 </span></span>
<span class="line"><span style="color:#A6ACCD;">mkisofs /dev/cdrom &gt; cd.iso 在磁盘上创建一个光盘的iso镜像文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">mkisofs /dev/cdrom | gzip &gt; cd_iso.gz 在磁盘上创建一个压缩了的光盘iso镜像文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">mkisofs -J -allow-leading-dots -R -V &quot;Label CD&quot; -iso-level 4 -o ./cd.iso data_cd 创建一个目录的iso镜像文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">cdrecord -v dev=/dev/cdrom cd.iso 刻录一个ISO镜像文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">gzip -dc cd_iso.gz | cdrecord dev=/dev/cdrom - 刻录一个压缩了的ISO镜像文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">mount -o loop cd.iso /mnt/iso 挂载一个ISO镜像文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">cd-paranoia -B 从一个CD光盘转录音轨到 wav 文件中 </span></span>
<span class="line"><span style="color:#A6ACCD;">cd-paranoia -- &quot;-3&quot; 从一个CD光盘转录音轨到 wav 文件中（参数-3） </span></span>
<span class="line"><span style="color:#A6ACCD;">cdrecord --scanbus 扫描总线以识别scsi通道 </span></span>
<span class="line"><span style="color:#A6ACCD;">dd if=/dev/hdc | md5sum 校验一个设备的md5sum编码，例如一张 CD</span></span></code></pre></div><h2 id="网络" tabindex="-1">网络 <a class="header-anchor" href="#网络" aria-label="Permalink to &quot;网络&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ifconfig eth0 显示一个以太网卡的配置 </span></span>
<span class="line"><span style="color:#A6ACCD;">ifup eth0 启用一个 &#39;eth0&#39; 网络设备 </span></span>
<span class="line"><span style="color:#A6ACCD;">ifdown eth0 禁用一个 &#39;eth0&#39; 网络设备 </span></span>
<span class="line"><span style="color:#A6ACCD;">ifconfig eth0 192.168.1.1 netmask 255.255.255.0 控制IP地址 </span></span>
<span class="line"><span style="color:#A6ACCD;">ifconfig eth0 promisc 设置 &#39;eth0&#39; 成混杂模式以嗅探数据包 (sniffing) </span></span>
<span class="line"><span style="color:#A6ACCD;">dhclient eth0 以dhcp模式启用 &#39;eth0&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">route -n show routing table </span></span>
<span class="line"><span style="color:#A6ACCD;">route add -net 0/0 gw IP_Gateway configura default gateway </span></span>
<span class="line"><span style="color:#A6ACCD;">route add -net 192.168.0.0 netmask 255.255.0.0 gw 192.168.1.1 configure static route to reach network &#39;192.168.0.0/16&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">route del 0/0 gw IP_gateway remove static route </span></span>
<span class="line"><span style="color:#A6ACCD;">echo &quot;1&quot; &gt; /proc/sys/net/ipv4/ip_forward activate ip routing </span></span>
<span class="line"><span style="color:#A6ACCD;">hostname show hostname of system </span></span>
<span class="line"><span style="color:#A6ACCD;">host www.example.com lookup hostname to resolve name to ip address and viceversa</span></span>
<span class="line"><span style="color:#A6ACCD;">nslookup www.example.com lookup hostname to resolve name to ip address and viceversa</span></span>
<span class="line"><span style="color:#A6ACCD;">ip link show show link status of all interfaces </span></span>
<span class="line"><span style="color:#A6ACCD;">mii-tool eth0 show link status of &#39;eth0&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">ethtool eth0 show statistics of network card &#39;eth0&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -tup show all active network connections and their PID </span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -tupl show all network services listening on the system and their PID </span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump tcp port 80 show all HTTP traffic </span></span>
<span class="line"><span style="color:#A6ACCD;">iwlist scan show wireless networks </span></span>
<span class="line"><span style="color:#A6ACCD;">iwconfig eth1 show configuration of a wireless network card </span></span>
<span class="line"><span style="color:#A6ACCD;">hostname show hostname </span></span>
<span class="line"><span style="color:#A6ACCD;">host www.example.com lookup hostname to resolve name to ip address and viceversa </span></span>
<span class="line"><span style="color:#A6ACCD;">nslookup www.example.com lookup hostname to resolve name to ip address and viceversa </span></span>
<span class="line"><span style="color:#A6ACCD;">whois www.example.com lookup on Whois database</span></span></code></pre></div><h2 id="jps工具" tabindex="-1">JPS工具 <a class="header-anchor" href="#jps工具" aria-label="Permalink to &quot;JPS工具&quot;">​</a></h2><ul><li>jps(Java Virtual Machine Process Status Tool)是JDK 1.5提供的一个显示当前所有java进程pid的命令，简单实用，非常适合在linux/unix平台上简单察看当前java进程的一些简单情况。</li><li>我想很多人都是用过unix系统里的ps命令，这个命令主要是用来显示当前系统的进程情况，有哪些进程，及其 id。 jps 也是一样，它的作用是显示当前系统的java进程情况，及其id号。我们可以通过它来查看我们到底启动了几个java进程（因为每一个java程序都会独占一个java虚拟机实例），和他们的进程号（为下面几个程序做准备），并可通过opt来查看这些进程的详细启动参数。</li><li>使用方法：在当前命令行下打 jps(需要JAVA_HOME，没有的话，到改程序的目录下打) 。</li><li>jps存放在JAVA_HOME/bin/jps，使用时为了方便请将JAVA_HOME/bin/加入到Path.</li><li>比较常用的参数： -q 只显示pid，不显示class名称,jar文件名和传递给main 方法的参数 -m 输出传递给main 方法的参数，在嵌入式jvm上可能是null -l 输出应用程序main class的完整package名 或者 应用程序的jar文件完整路径名 -v 输出传递给JVM的参数</li></ul><p>详细情况请参考sun<a href="http://java.sun.com/j2se/1.7.0/docs/tooldocs/share/jps.html" target="_blank" rel="noreferrer">官方文档</a>。</p>`,54),o=[e];function t(c,r,i,C,A,d){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{D as __pageData,m as default};
