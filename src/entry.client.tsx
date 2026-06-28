import {RemixBrowser} from "@remix-run/react"
import {startTransition, StrictMode} from "react"
import {hydrateRoot} from "react-dom/client"

console.log(`
@@@@@@@i
@@@@@@@i
@@@@@@@i
@@@@@@@i
@@@@@@@i  .;rsXsr;,            ,;rsXsr;.
@@@@@@@X3#&@@@@@@@@9H2;    ;2H9@@@@@@@@@9MX,  .AS#
@@@@@@@@@@@@@@@@@@@@@@@#AXS@@@@@@@@@@@@@@@@@G29@@@
@@@@@@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@@@@@
@@@@@@@@@B3r,  .:XM&@@@@@@@@@@B3s:.  ,s3B@@@@@@@@@
@@@@@@@@3.         :G@@@@@@@@H,         .3@@@@@@@@
@@@@@@@h            ,9@@@@@@9.            h@@@@@@@
@@@@@@@r             M@@@@@@H             r@@@@@@@
9@@@@@@3            ,B@@@@@@B,            h@@@@@@@
2@@@@@@@5.         :S@@@@@@@@G:         .h@@@@@@@@
 h@@@@@@@93r:..,;AH&@@@@@@@@@@&MX;,..:shB@@@@@@@@@
  AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   ,3B@@@@@@@@@@@@@@@@@#A29@@@@@@@@@@@@@@@@@@@@@@@
     .r5GB@@@@@@@@&9MA;    i2H9@@@@@@@@@BHB@@@@@@#
          ,;irrri:.            .:irrri;,,M@@@@@@@s
                                rssssX5G&@@@@@@&X
                                #@@@@@@@@@@@@@H;
                                #@@@@@@@@@@Bhi
                                #@@@@&9SM2i
`)

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <RemixBrowser />
        </StrictMode>,
    )
})
