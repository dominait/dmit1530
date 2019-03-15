# File Optimizaton Techniques

#### Before You Start
* Upload completed assignment 1, to the development server.  
* Run Chrome Audits from a server not from the desktop.
* Run Audits in Incognitio window (Chrome Extension can influence the audit results)

#### Increaseing Site Performance.
Using Chrome as your browser open the dev tools and run a page audit. The
audit will provide you with some very helpful tips on site optimization if 
you care to click on the read more link that each error provides.
   #### Audit For
    * Performance
    * Best Practice
    * Accessibility
    * SEO
    
   #### Useful Tools For Checking Site Performance
   * [google page speed test](https://developers.google.com/speed/pagespeed/insights/)
   * [pingdom](https://tools.pingdom.com)
   * [dare boost](https://www.dareboost.com)
   * [gmetrix](https://gtmetrix.com/)
   * [web page test](https://www.webpagetest.org)
 


#### Topics
      Using Chrome Dev Tools  
      Running Audits
      Fixing Audits Messages
      Optimizing Images
      Optimizing CSS
      HTTP2 Services


### Image Optimiztion
Using Photoshop
Photoshop save for web features
Online Image Compression Tools
Desktop software
Online Services
Inline SVG
SVGO
Webp
JPEG2000
Optimize Images
- use proper image format
- use online compression tools.
- use image compression services.

   ### Picture Element Fallback for Webp
```html
    <picture>
        <source srcset="img/awesomeWebPImage.webp" type="image/webp">
        <source srcset="img/creakyOldJPEG.jpg" type="image/jpeg"> 
        <img src="img/creakyOldJPEG.jpg" alt="Alt Text!">
     </picture>
``` 
Discusstion How A Browser Renders A Web Page.


### CSS Optimization.
Dealing with Critical CSS.
Inline CSS Content.
CSS-preloading
Minification.
Autoprefix.
Writing efficiant styles
Refactoring CSS
CSS Design Patterns BEM OOMCSS
[bem-oocss-smacss](https://www.keycdn.com/blog/oocss#oocss-vs-smacss-vs-bem)
CSS Modules
PostCSS
cssNext
CSS Houdini



### Hosting Services
  * netlify
  * cdn cloudflare.
  * digital ocean.





 

 


