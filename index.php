<?php
/**
 * NBUCI ver. 1.02
 * by Rares Hideg http://www.ricu.ro
 * http://nbuci.ga
 * Free to use, no support included.
 * Donate if you like my work.
 */

if(isset($_POST) && !empty($_POST)){
    // include here path to post interpretation algorithms
    // the standard response code you see in nbuci.ga will be available sometime later

    // Default for this demo using this
    ?>
    <tr class="e"><td colspan="2">Unknown command. Type <u>help</u> for a list of public commands</td></tr>
    <?php
    die();
}else {
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>:~> NBUCI - Nightly Built Useless Console Interface</title>
        <link rel="stylesheet" type="text/css" href="css/s.css"/>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
    </head>
    <body>
    <table>
        <tr>
            <td colspan="2">
                NBUCI, Nightly Built Useless Console Interface, ver. 1.02<br/>
                Released 13 Octomber 2016<br/>
                This is not an Open-Source Project, but free of use; *cough* <u>donate</u> *cough*.<br/>
                Built by <span class="n">Rares Hideg</span> in the middle of the night.<br/>
                <br/>
                type: <u>changelog</u> or <u>help</u><br/><br/>

                There is a <u>sneaky</u> command that will prompt download of the project .zip'ed.<br/>
                Good Luck!<br/>

                <br/>
                -------------------------------------
                <br/>
                Today is <?php echo date('l d F Y'); ?>

            </td>
        </tr>
        <tr class="row">
            <td>
                [<span>guest</span>@<span><?php echo $_SERVER['REMOTE_ADDR']; ?></span>]:~>
            </td>
            <td>
                <div class="input">
                    <span class="carret"></span>
                </div>
            </td>
        </tr>
    </table>

    <input type="text" autocapitalize="off" id="keypad"/>
    <script type="text/javascript" src="js/q.js"></script>
    <script type="text/javascript" src="js/s.js"></script>
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-65188737-3', 'auto');
        ga('send', 'pageview');
    </script>
    </body>
    </html>
<?php
}
?>