import{_ as a,c as e,o as r,aS as p}from"./chunks/framework.Dbjoj8K5.js";const u=JSON.parse('{"title":"camera | Pygame中文文档","description":"","frontmatter":{},"headers":[],"relativePath":"pygame/camera.md","filePath":"pygame/camera.md","lastUpdated":1708595373000}'),t={name:"pygame/camera.md"},m=p('<h1 id="camera-pygame中文文档" tabindex="-1">camera | Pygame中文文档 <a class="header-anchor" href="#camera-pygame中文文档" aria-label="Permalink to &quot;camera | Pygame中文文档&quot;">​</a></h1><h2 id="pygame-camera" tabindex="-1">pygame.camera <a class="header-anchor" href="#pygame-camera" aria-label="Permalink to &quot;pygame.camera&quot;">​</a></h2><blockquote><p>Pygame 中使用摄像头的模块。</p></blockquote><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><ul><li>pygame.camera.colorspace() —— 转换 Surface 对象的色彩空间</li><li>pygame.camera.list_cameras() —— 返回一个可用摄像头列表</li></ul><h2 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h2><ul><li>pygame.camera.Camera —— 用于加载摄像头的类</li></ul><p>Pygame 目前仅支持 linux 系统和 cameras_Video4Linux2 驱动。</p><p>注意！：这些应用程序编程接口可能在之后发行的 Pygame 版本内被改变或者删除。如果你使用了这些应用程序编程接口，你的程序很有可能与之后发行的 Pygame 版本不兼容。</p><h2 id="函数详解" tabindex="-1">函数详解 <a class="header-anchor" href="#函数详解" aria-label="Permalink to &quot;函数详解&quot;">​</a></h2><p><code>pygame.camera.colorspace()</code></p><p>转换 Surface 对象的色彩空间。</p><p>colorspace(Surface, format, DestSurface = None) -&gt; Surface</p><p>允许从 RGB 转换到 HSV 或者 YUV。源和目标表面必须是相同大小和像素深度。对于在处理能力有限的设备上的计算机视觉是十分有用。在做任何处理前，尽可能小的捕获图像，使用 transform.scale() 让其变得更小，然后将色彩空间转换为 YUV 或者 HSV。</p><p><code>pygame.camera.list_cameras()</code></p><p>返回一个可用摄像头列表。</p><p>list_cameras() -&gt; [cameras]</p><p>确认电脑是否有可用摄像头并且返回一个可用摄像头名称列表，然后用 pygame.camera.Camera 对象来加载一个摄像头。</p><h2 id="类-class-pygame-camera-camera" tabindex="-1">类 class pygame.camera.Camera <a class="header-anchor" href="#类-class-pygame-camera-camera" aria-label="Permalink to &quot;类 class pygame.camera.Camera&quot;">​</a></h2><blockquote><p>加载一个摄像头。</p></blockquote><p>Camera(device, (width, height), format) -&gt; Camera</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ul><li>pygame.camera.Camera.start() —— 打开摄像头、初始化然后开始捕捉画面</li><li>pygame.camera.Camera.stop() —— 结束摄像头工作，还原并关闭摄像头</li><li>pygame.camera.Camera.get_controls() —— 获得当前用户设定的值</li><li>pygame.camera.Camera.set_controls() —— 修改当前摄像头设置（如果摄像头支持的话）</li><li>pygame.camera.Camera.get_size() —— 返回被记录的图像的尺寸</li><li>pygame.camera.Camera.query_image() —— 确认一帧图像是否准备好</li><li>pygame.camera.Camera.get_image() —— 捕获一张图像并转换为一个 Surface 对象</li><li>pygame.camera.Camera.get_raw() —— 以字符串的形式返回一张未修改的图像</li></ul><p>加载一个 V4L2 摄像头。此设备通常类似于 &quot;/dev/video0&quot;。默认宽度和高度是 640 × 480。格式是输出所需的色彩空间。对于计算机视觉效果来说这样做是有用的。默认格式为 RGB。</p><p>以下为支持的格式：</p><ul><li>RGB - Red, Green, Blue</li><li>YUV - Luma, Blue Chrominance, Red Chrominance</li><li>HSV - Hue, Saturation, Value</li></ul><h2 id="方法详解" tabindex="-1">方法详解 <a class="header-anchor" href="#方法详解" aria-label="Permalink to &quot;方法详解&quot;">​</a></h2><p><code>pygame.camera.Camera.start()</code></p><p>打开摄像头、初始化然后开始捕捉画面。</p><p>start() -&gt; None</p><p>打开摄像设备，尝试将其初始化，并且开始将图像记录到缓冲区。在以下任何功能可以被使用之前，摄像头必须开启。</p><p><code>pygame.camera.Camera.stop()</code></p><p>结束摄像头工作，还原并关闭摄像头。</p><p>stop() -&gt; None</p><p>停止摄像头记录录像的工作，还原摄像头并且将其关闭。一旦摄像头被关闭，以下功能都不能被使用，直到摄像头再次开启。</p><p><code>pygame.camera.Camera.get_controls()</code></p><p>获得当前用户设定的值。</p><p>get_controls() -&gt; (hflip = bool, vflip = bool, brightness)</p><p>如果摄像头支持此功能，get_controls 函数将会返回当前设定值（用布尔值表示的图像是否水平、垂直翻转，用整数值表示的图像亮度）。如果摄像头不支持此功能，将会返回默认值 (0, 0, 0)。</p><p>注意：此函数的返回值可能和由 set_controls() 得到的不同，但并不意味着这些返回值有问题。</p><p><code>pygame.camera.Camera.set_controls()</code></p><p>修改当前摄像头设置（如果摄像头支持的话）。</p><p>set_controls(hflip = bool, vflip = bool, brightness) -&gt; (hflip = bool, vflip = bool, brightness)</p><p>如果摄像头支持，则允许你改变当前的摄像头设定。如果摄像头表示改变成功或者不成功但输入值之前就已经在使用了，则返回值等于输入值。每一个参数都是可选的，并且我们需求的某个参数可以通过提供关键字（例如 &quot;hflip&quot;）进行选择。</p><p>注意：相机实际所用的设定值可能和 set_controls() 的返回值不同。</p><p><code>pygame.camera.Camera.get_size()</code></p><p>返回被记录的图像的尺寸。</p><p>get_size() -&gt; (width, height)</p><p>返回当前被记录图像的尺寸。如果摄像头不支持在初始化过程中指定的图像尺寸，该函数将会返回图像的真实尺寸。</p><p><code>pygame.camera.Camera.query_image()</code></p><p>query_image() -&gt; bool</p><p>确认一帧图像是否准备好。</p><p>如果一个图像已经成功捕获到，该函数返回 true，否则返回 false。</p><p>注意：当调用一个阻塞函数（例如 get_image()）时，一些摄像头将一直返回 false 并且仅将一帧画面放入队列中。这种机制对于从一些没有使用多线程的摄像头中区分游戏帧数是很有用的。</p><p><code>pygame.camera.Camera.get_image()</code></p><p>get_image(Surface = None) -&gt; Surface</p><p>从缓冲区中取出一张图像转换为一个 RGB 的 Surface 对象。该函数可 以选择性的重用现有的 Surface 对象以节省时间。Surface 对象的位深可以是 24bit 或者与其他可供选择的选项。</p><p><code>pygame.camera.Camera.get_raw()</code></p><p>get_raw() -&gt; string</p><p>从摄像头获取一张图像，该图像被表示为此摄像头本地像素格式下的一串字符串。此机制有利于和其他库的结合。</p>',60),c=[m];function o(l,i,s,g,n,d){return r(),e("div",null,c)}const _=a(t,[["render",o]]);export{u as __pageData,_ as default};
