import{_ as e,c as a,o as i,aS as o}from"./chunks/framework.Dbjoj8K5.js";const y=JSON.parse('{"title":"movie | Pygame中文文档","description":"","frontmatter":{},"headers":[],"relativePath":"pygame/movie.md","filePath":"pygame/movie.md","lastUpdated":1708595373000}'),p={name:"pygame/movie.md"},m=o('<h1 id="movie-pygame中文文档" tabindex="-1">movie | Pygame中文文档 <a class="header-anchor" href="#movie-pygame中文文档" aria-label="Permalink to &quot;movie | Pygame中文文档&quot;">​</a></h1><h2 id="pygame-movie" tabindex="-1">pygame.movie <a class="header-anchor" href="#pygame-movie" aria-label="Permalink to &quot;pygame.movie&quot;">​</a></h2><blockquote><p>Pygame 中播放 MPEG 视频的模块。</p></blockquote><h2 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h2><ul><li>pygame.movie.Movie —— 载入一个 MPEG 视频文件。</li></ul><p>注意：在由 NT 衍生出的 Windows 版本（例如 XT）中，默认的 SDL directx 视频驱动存在一定问题。对用于播放 MPEG 视频的 pygame.movie pygame 模块，请使用 windib 驱动来替代。在导入 pygame 之前，需要将 SDL_VIDEODRIVER 环境变量设置成 &#39;windib&#39;，使得 windib 处于可用状态。（例子请参考 pygame.examples.movieplayer.main()）</p><p>Pygame 可以播放视频和基于MPEG-1编码的视频文件中的音频。视频播放在后台线程中进行，这样使得播放更易于控制。</p><p>视频中的音频必须完全控制声音系统。这意味着在视频中的声音播放之前用于载入和运行声音模块的 pygame.mixer 模块必须被还原。一般的处理方式是在视频开始之前调用 pygame.mixer.quit() 方法。在视频结束后，调音器可以被重新初始化。</p><p>视频叠加面被绘制在显示器窗口最顶部。在显示器窗口中绘制正常的视频图像，创建一个屏幕外的 Surface 对象并将其指向对应视频。则每一帧图像通过 Surface 绘制到屏幕上。</p><p>通过使用 <a href="http://ffmpeg.org/" target="_blank" rel="noreferrer">ffmpeg</a> 视频转换程序可以将视频转换成 .mpg 格式（MPEG-1 video, MPEG-1 Audio Layer III (MP3) sound)：</p><div class="language-PowerShell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">PowerShell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ffmpeg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">infile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vcodec mpeg1video </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">acodec libmp3lame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">intra </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">outfile.mpg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="类-class-pygame-movie-movie" tabindex="-1">类 class pygame.movie.Movie <a class="header-anchor" href="#类-class-pygame-movie-movie" aria-label="Permalink to &quot;类 class pygame.movie.Movie&quot;">​</a></h3><p>载入一个 MPEG 视频文件。</p><p>Movie(filename) -&gt; Movie Movie(object) -&gt; Movie</p><h4 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h4><ul><li>pygame.movie.Movie.play() —— 开始播放视频</li><li>pygame.movie.Movie.stop() —— 停止播放视频</li><li>pygame.movie.Movie.pause() —— 暂停/继续播放视频</li><li>pygame.movie.Movie.skip() —— 快进视频播放的位置</li><li>pygame.movie.Movie.rewind() —— 重新播放视频</li><li>pygame.movie.Movie.render_frame() —— 设置当前视频帧数</li><li>pygame.movie.Movie.get_frame() —— 获取当前视频帧数</li><li>pygame.movie.Movie.get_time() —— 获取当前视频的播放时间</li><li>pygame.movie.Movie.get_busy() —— 检查当前是否正在播放视频</li><li>pygame.movie.Movie.get_length() —— 获取视频的总时长（以秒为单位）</li><li>pygame.movie.Movie.get_size() —— 获取视频的分辨率</li><li>pygame.movie.Movie.has_video() —— 检查视频文件里是否包含影像</li><li>pygame.movie.Movie.has_audio() —— 检查视频文件里是否包含音频</li><li>pygame.movie.Movie.set_volume() —— 设置音量</li><li>pygame.movie.Movie.set_display() —— 设置视频的目标 Surface 对象</li></ul><p>从一个文件或者一个 python 文件对象内载入一个新的 MPEG 视频流。视频对象的控制类似于 pygame.mixer 控制音频对象。</p><p>视频对象有一个对应的目标 Surface 对象，视频流通过后台线程被传输到该 Surface 对象中。如果对应的 Surface 对象是窗口 Surface 对象，将会尝试使用硬件加速功能。默认情况下，目标对象即窗口 Surface 对象。</p><h4 id="方法详解" tabindex="-1">方法详解 <a class="header-anchor" href="#方法详解" aria-label="Permalink to &quot;方法详解&quot;">​</a></h4><h3 id="pygame-movie-movie-play" tabindex="-1">pygame.movie.Movie.play() <a class="header-anchor" href="#pygame-movie-movie-play" aria-label="Permalink to &quot;pygame.movie.Movie.play()&quot;">​</a></h3><p>开始播放视频。</p><p>play(loops=0) -&gt; None</p><p>如果音频和影像均可用，则开始播放音频和影像。</p><p>loops 参数控制视频将会重播多少次，如果 loops=-1，则视频将会无限重播。</p><h3 id="pygame-movie-movie-stop" tabindex="-1">pygame.movie.Movie.stop() <a class="header-anchor" href="#pygame-movie-movie-stop" aria-label="Permalink to &quot;pygame.movie.Movie.stop()&quot;">​</a></h3><p>停止播放视频。</p><p>stop() -&gt; None</p><p>影像和音频的播放将会在他们当前的位置上结束。</p><h3 id="pygame-movie-movie-pause" tabindex="-1">pygame.movie.Movie.pause() <a class="header-anchor" href="#pygame-movie-movie-pause" aria-label="Permalink to &quot;pygame.movie.Movie.pause()&quot;">​</a></h3><p>暂停/继续播放视频。</p><p>pause() -&gt; None</p><p>暂停/继续视频播放。</p><h3 id="pygame-movie-movie-skip" tabindex="-1">pygame.movie.Movie.skip() <a class="header-anchor" href="#pygame-movie-movie-skip" aria-label="Permalink to &quot;pygame.movie.Movie.skip()&quot;">​</a></h3><p>快进视频播放的位置。</p><p>skip(seconds) -&gt; None</p><p>以秒为单位快进视频播放的时间点。在视频（设置了播放起始时间）播放之前，该方法可以被调用。该方法仅仅可以向前快进而不能向后倒退。</p><p>seconds 参数是一个单精度浮点数。</p><h3 id="pygame-movie-movie-rewind" tabindex="-1">pygame.movie.Movie.rewind() <a class="header-anchor" href="#pygame-movie-movie-rewind" aria-label="Permalink to &quot;pygame.movie.Movie.rewind()&quot;">​</a></h3><p>重新播放视频。</p><p>rewind() -&gt; None</p><p>设置视频的起始播放位置。如果视频播放结束了，将会自动重新开始播放。</p><p>如果视频不能被重播，此方法会产生一个 ValueError 错误。如果重播失败，视频对象会被认为是无效的。</p><h3 id="pygame-movie-movie-render-frame" tabindex="-1">pygame.movie.Movie.render_frame() <a class="header-anchor" href="#pygame-movie-movie-render-frame" aria-label="Permalink to &quot;pygame.movie.Movie.render_frame()&quot;">​</a></h3><p>设置当前视频帧数。</p><p>render_frame(frame_number) -&gt; frame_number</p><p>此方法需要传递一个整型帧数作为参数。</p><p>此方法会尝试把提供的帧数从视频对象传递给对应的 Surface 对象。</p><p>此方法会返回设置完成后的实际帧数。</p><h3 id="pygame-movie-movie-get-frame" tabindex="-1">pygame.movie.Movie.get_frame() <a class="header-anchor" href="#pygame-movie-movie-get-frame" aria-label="Permalink to &quot;pygame.movie.Movie.get_frame()&quot;">​</a></h3><p>获取当前视频帧数。</p><p>get_frame() -&gt; frame_number</p><p>返回当前视频的整形帧数。</p><h3 id="pygame-movie-movie-get-time" tabindex="-1">pygame.movie.Movie.get_time() <a class="header-anchor" href="#pygame-movie-movie-get-time" aria-label="Permalink to &quot;pygame.movie.Movie.get_time()&quot;">​</a></h3><p>获取当前视频的播放时间。</p><p>get_time() -&gt; seconds</p><p>返回当前的播放时间（以秒为单位的单精度浮点数）。</p><p>注意：这个方法目前是坏的，会一直返回 0.0 （这是作者说的）。</p><h3 id="pygame-movie-movie-get-busy" tabindex="-1">pygame.movie.Movie.get_busy() <a class="header-anchor" href="#pygame-movie-movie-get-busy" aria-label="Permalink to &quot;pygame.movie.Movie.get_busy()&quot;">​</a></h3><p>检查当前是否正在播放视频。</p><p>get_busy() -&gt; bool</p><p>返回一个布尔值表示视频是否正在被播放。</p><h3 id="pygame-movie-movie-get-length" tabindex="-1">pygame.movie.Movie.get_length() <a class="header-anchor" href="#pygame-movie-movie-get-length" aria-label="Permalink to &quot;pygame.movie.Movie.get_length()&quot;">​</a></h3><p>获取视频的总时长（以秒为单位）。</p><p>get_length() -&gt; seconds</p><p>返回视频的总时长（以秒为单位的单精度浮点数）。</p><h3 id="pygame-movie-movie-get-size" tabindex="-1">pygame.movie.Movie.get_size() <a class="header-anchor" href="#pygame-movie-movie-get-size" aria-label="Permalink to &quot;pygame.movie.Movie.get_size()&quot;">​</a></h3><p>获取视频的分辨率。</p><p>get_size() -&gt; (width, height)</p><p>视频可以适应任何 Surface 对象的规格，但是此方法返回的是视频的自然规格（即原规格，在视频制作时规定的规格）。</p><h3 id="pygame-movie-movie-has-video" tabindex="-1">pygame.movie.Movie.has_video() <a class="header-anchor" href="#pygame-movie-movie-has-video" aria-label="Permalink to &quot;pygame.movie.Movie.has_video()&quot;">​</a></h3><p>检查视频文件里是否包含影像。</p><p>has_video() -&gt; bool</p><p>当视频文件里包含影像流时返回 True。</p><h3 id="pygame-movie-movie-has-audio" tabindex="-1">pygame.movie.Movie.has_audio() <a class="header-anchor" href="#pygame-movie-movie-has-audio" aria-label="Permalink to &quot;pygame.movie.Movie.has_audio()&quot;">​</a></h3><p>检查视频文件里是否包含音频。</p><p>has_audio() -&gt; bool</p><p>当视频文件里包含音频流时返回 True。</p><h3 id="pygame-movie-movie-set-volume" tabindex="-1">pygame.movie.Movie.set_volume() <a class="header-anchor" href="#pygame-movie-movie-set-volume" aria-label="Permalink to &quot;pygame.movie.Movie.set_volume()&quot;">​</a></h3><p>设置音量。</p><p>set_volume(value) -&gt; None</p><p>value 参数范围为 0.0~1.0。</p><p>如果音量设置为 0，则视频的音频将不会被解码。</p><h3 id="pygame-movie-movie-set-display" tabindex="-1">pygame.movie.Movie.set_display() <a class="header-anchor" href="#pygame-movie-movie-set-display" aria-label="Permalink to &quot;pygame.movie.Movie.set_display()&quot;">​</a></h3><p>设置视频的目标 Surface 对象。</p><p>set_display(Surface, rect=None) -&gt; None</p><p>设置视频的 Surface 对象。</p><p>你也可以传递一个用于确定位置的矩形参数，则视频窗口将会移动并调整，直至可以覆盖整个矩形范围。</p><p>如果目标 Surface 对象传入 None，则禁止视频解码。</p>',88),t=[m];function s(l,r,v,h,g,n){return i(),a("div",null,t)}const u=e(p,[["render",s]]);export{y as __pageData,u as default};
