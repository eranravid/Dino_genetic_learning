var elem = document.getElementsByClassName('runner-container')[0];
elem.parentNode.removeChild(elem);

var styling = "a { color: #585858; } .bad-clock .icon { background-image: -webkit-image-set( url(data:image/png;base64,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) 1x, url(data:image/png;base64,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) 2x); } body { background-color: #f7f7f7; color: #646464; } body.safe-browsing { background-color: rgb(206, 52, 38); color: white; } button { -webkit-user-select: none; background: rgb(66, 133, 244); border: 0; border-radius: 2px; box-sizing: border-box; color: #fff; cursor: pointer; float: right; font-size: .875em; margin: 0; padding: 10px 24px; transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1); } [dir='rtl'] button { float: left; } button:active { background: rgb(50, 102, 213); outline: 0; } button:hover { box-shadow: 0 1px 3px rgba(0, 0, 0, .50); } #debugging { display: inline; overflow: auto; } .debugging-content { line-height: 1em; margin-bottom: 0; margin-top: 1em; } .debugging-content-fixed-width { display: block; font-family: monospace; font-size: 1.2em; margin-top: 0.5em; } .debugging-title { font-weight: bold; } #details { color: #696969; margin: 45px 0 50px; } #details p:not(:first-of-type) { margin-top: 20px; } #details-button { background: inherit; border: 0; float: none; margin: 0; padding: 10px 0; text-transform: uppercase; } #details-button:hover { box-shadow: inherit; text-decoration: underline; } .error-code { color: #646464; display: inline; font-size: .86667em; margin-top: 15px; opacity: 1; text-transform: uppercase; } #error-debugging-info { font-size: 0.8em; } h1 { color: #333; font-size: 1.6em; font-weight: normal; line-height: 1.25em; margin-bottom: 16px; } h2 { font-size: 1.2em; font-weight: normal; } .hidden { display: none; } html { -webkit-text-size-adjust: 100%; font-size: 125%; } .icon { background-repeat: no-repeat; background-size: 100%; height: 72px; margin: 0 0 40px; width: 72px; } input[type=checkbox] { opacity: 0; } input[type=checkbox]:focus ~ .checkbox { outline: -webkit-focus-ring-color auto 5px; } .interstitial-wrapper { box-sizing: border-box; font-size: 1em; line-height: 1.6em; margin: 100px auto 0; max-width: 600px; width: 100%; } #main-message > p { display: inline; } #extended-reporting-opt-in { font-size: .875em; margin-top: 39px; } #extended-reporting-opt-in label { position: relative; display: flex; align-items: flex-start; } .nav-wrapper { margin-top: 51px; } .nav-wrapper::after { clear: both; content: ''; display: table; width: 100%; } .safe-browsing :-webkit-any( a, #details, #details-button, h1, h2, p, .small-link) { color: white; } .safe-browsing button { background-color: rgba(255, 255, 255, .15); } .safe-browsing button:active { background-color: rgba(255, 255, 255, .25); } .safe-browsing button:hover { box-shadow: 0 2px 3px rgba(0, 0, 0, .5); } .safe-browsing .error-code { display: none; } .safe-browsing .icon { background-image: -webkit-image-set( url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA+VBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3////9/f36+vr8/Pz7+/v7+/v7+/v7+/v////r6+vn5+fk5OT5+fn19fX4+Pju7u7v7+/o6Ojx8fH09PTy8vLz8/Pj4+P39/fm5ubp6eni4uL8/Pzw8PDt7e329vbs7Ozg4ODh4eHe3t7l5eX6+vrd3d3q6urf39/c3NzbRDf7+/vb29vW1tbZ2dk+D9arAAAALXRSTlMA/eIxBfACHj3YwhYJDyfOtfr2WHObgEqpjellgY6c6mZLV3L2qKjOZemN+rUv7NpAAAACcUlEQVR4Xu2U53baQBQGAxiMaQZT3Wt6rnql9uKW9v4Pk5XEspG4WFmJ/GMeYM635cy7/8yePXv23N7uxnNwdHSwE1ENoLYLTz4NkM7vQHQFhKv4nlQCCIlUbFEOXHJxPVVYUY3nKSSpKFmIJbqANRdxPIcnTHRyGEPUAga0onuy4CMb1ZM5Bh/HmYiiGwhwE81TvIYA18VIokvY4DKKp1SBDSqlCKIyIJT5PU1AafL3FVC4q1uDLdS4+4rCXd06bKXO21fKdxcNKFzVzUFQ9KoDJRehr0z0tBgBpcrfVyZavAxM7uo2ABHNO8s2NTW4+8pEs4HUMxS+6rYAEZFBYl+Y8FQ3C5hoIImGMNVVvLp4X1FRZ2n0BU035X+u7jmgomWv/zzWR23lB7ich/b1DBeRQVNNty1FHYLDWVh1TwEXic4gs6105UfPdMrd1/HCffrnqTayrYkqP3qmSom7r9q84xyMDLIUx7Mylfn7OvIGmbYyUYmGbmry99UWnYOZ7sFc5OHb1b2HLbS9QV1vED3dPX9fQXFuWiEeF9kzpfMcfaUZkbyn9+bQTfXwvm4W0iA3RNdQUyIV1lekkDOhSx3sdGh17+At0ctA0plDpr/gLqSvSI+kXt8mAj9DVl20r3hGBM0iOwKmBtZXHOPX79fFXCJ/Ure79Gxr40Owuu9hK8LPp1mnR7JmWuv7ZsM+oH3FGZObFoWx3iY/Ul1J2LVn0b7i6B2RZM1WumwL833MoH3FMQ1hPHIGsadnvk94X3EsctPE4xK8p89FvK84ExIRuoUa6Pt98fU1DJUMosj+3/S15OtrGOsB9LnYqm+e5w+es4JAhYQDdgAAAABJRU5ErkJggg==) 1x, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAABPlBMVEUAAAD////////////////////////////////6+vr7+/v7+/v7+/v9/f36+vr7+/v7+/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3////////////8/Pz////5+fn////////6+vr////////8/Pz7+/v7+/v////k5OTh4eHf39/e3t7g4OD6+vrbRDf5+fnv7+/x8fH09PTY2Njc3Nz39/fq6ur4+Pjz8/Pn5+f7+/vZ2dnW1tbt7e3U1NTV1dXl5eXr6+v19fXy8vLs7Oz29vba2trb29vo6Ojm5ubu7u7d3d38/Pzp6enj4+Pi4uLw8PD///+BQ30nAAAAQHRSTlMAHhYFDzEJAifiwvb98M76PdjqtoGpZll0c46qj1icTJ1KS42A6WWb2WdadYK1cvCb/cJXV+KA9qioPc5l6Y36uRjySgAABXVJREFUeF7s1kuKwlAUBNDS+JtqggkkmODIH4gPRIgD11P730BDI6HV260Z1Wu4ZxUH/4tzzjnnnHPOOeecq2tEJdlsEsRkT+4RkeGRPA4Rj4YkG0RjfCLJ0xixCPwWEIkd73aIwuTMu/MEMTiwc4AeBhd2LgPolfyhhFzLBy3Eplc+uE6hteWTLaRGCz5ZjKBU8UUFodmNL24z6KQ0pJCpaaohksxpmifQKGhjIXurSbbZhr9qRG81yTYbaJJtNuefcsFbTbLNZnwjE7zVINtsybdK4VttreytHdlml/zIUvTWjmyzFT9USd7akW02pUm22TV7WOveKttswV4K1Vtlm12xp5XmrbLNBvYWhG+15YK3qjab0STb7Fcv5tmcOBKE4Q2Xc7KrTJW3yhs/2RsuZwvBjsQShPd0JxCyJVmA5v//getpgYextLSYKdHf+PbUO93No36Ht77eqHCvNnvASaBLp4rooClvpYGurpx92Sx6Kw3Uv873ZbOHvA7Qtd12m7ZZ6a00UN+225a7F5tt8XpA7Y61rJi1ViPeSgPZ7XZnuVh4zdsseisNhAEtzgOvaZt9yGsCdSwLeJKk16DNSm+lgSCghQAax9NGbfaI1wQSD7YIgnE8H0a3iY4a8FYSyMKAxgJoMqBs1txbaSDs6AR5Zv6Asllzb6WBIKAkiefzCQA5A8Jmjb2VBtoMKHXcUSM2e8x3ADoPAAh4Jr7v5G7IVKLjhr21DHS+DshP0xyAel3CZk29lQa6ebAUeLxe74KwWTNvpYGSFVDqOK4LPFF0QdisibfSQBsdjQFNo9EoI2zWxFtpINiJw+Fs5hcBTaeDwaibETar76000GZAnggIeLqSyNxmD/luQOM4LngceDBP8ACQSnTY+L111geRtqxlMfLDAsiFkV8H1GWSyNBmW7xO+eiJyo7O87B4MCaA1Ixazd9bUwgIgFYd7a8Dwo4GIqYQgc02f291kEcd+YJHVmZusye8djkAlKxHHnjEiEUIVOTDFKKTPdxbXdnRjghI7GjgUSqTNmvurTRRkMQAtBp53IkjJuNRiY72cW8NiwdLHdyJgmcdkGTKTGz2Gd+xPOhoGVAUjZgCo8zas33cW3lviFqWhyF2ND7YbaZM2qy5t9JEs8ITPexoJlFksUzTZo+5Tk3FiIWh7KAKpEzarLm30v/2ckczlYXdsGU6NvuY6wFdJjn+y4OXKR3EytP/WMNbNYD6Y9Ag8WCs/F4yo51t9oBrAoGJzJV/+WokJDow9NbaF7QJAKkNpMyb9KPfjL2VBrLtznLpQ0DlYNTKdrHZp1wfqA0iEjhMYsislN9I9LSmtz7RBxLmGCSxW9k9pYye1LPZR9wACNQagIbutgaSfvTI3Fvp+xDwgDd6ZERAVM9mT7kB0HIZJIn4Ekp7W+KRRKfG3kqfYyAg4HHy6ZZwpB+daHgrVfG///3z5u1l38aODsbFrcH1opJ7VPgRabNnfPeaI8+13REdPV4FBA4CRkQyZWekt2rU8M3lVREQns9AG4XmgxLRjc0+v0d4q1ZNVjznNw8WgsTiviaRXmh5K/19jzsaL+biwVwhsbeXdLUfffa+nrfSX9P4rYjnRcdFBWGSQ+KUf3/ybp7vuX6lFp7woaN9eDBxiUEIwCDH/wfCWzUrXwTrgLCj14rGuhTSxx8Q3qpZLnSQ4MlXHS2He8u+xvqJ8FbdCmEFTXxcQdFAJkPP2qfVNvsLNy1vjg9WBKQsQMKPfiW8Vbt6SkdLFkb50VeEt2rX1MGA4MHUlhkRfvTFh4S3alcEHaSczmr20R+Et+rXCDu63DJsux/9+R7hrQZE0NFEHlVh/UV4q0F1B6zSEdlWF/lSsdn/AccLgKctjBheAAAAAElFTkSuQmCC) 2x); } .small-link { color: #696969; font-size: .875em; } .ssl .icon { background-image: -webkit-image-set( url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABAlBMVEUAAADcRTfcRDfdRET/gIDcRjr/ZmbjVTncRDfcRTfcRDfdRDzgSTncRDjeSDvcRTjbRDfbRDjeRzvcRjfbRjjcRTjcRTjcRTfdRTfcRDjdRTjcRTjbRDjbRTjbRTjbRTfcRjjdRDrcRjfbRTjZQzfcRDjZRDfZRzbWQzXXRDXXQzbXQzbWQjXYSDvWQjbbRDfOQDPSQTTUQjXCPDDNPzPJPjLGPTHVQjXMPzPRQTTWQjXLPzPDPDHYQzbAOzDTQTXHPTLIPjK8Oi++Oy/FPTHEPTHPQDTQQDTUQTXBPDDKPjK/OzC9Oi/////PQDPRQDS3OS66OS7TQTTEPDHXQjbMPjMBhLaWAAAAL3RSTlMA4tgPAhYFCcL98B4x9ie1+s49WICbqXNKZY3pjuqcgVdLZnL2qKg9zmXpjfontV8LANsAAAJrSURBVHhe7ZTnduIwFAY3ARIgBAg9vW1v173ROylby/u/yso2Fx3MNaxs9h/zAHM+Sfa8+M/s2LFjx+3tdjwH+/sHWxHVAerb8KSyANnUFkRXwLiK78llgJHJxRalwSMd11OGOeV4nsM9FO0dxhJdw4LrOJ6jYy46PoohqgEHatE9JViiFNWTPIElTpIRRXcQ4C6aJ3EJAS4TkUQXsMJFFE++CCsU8xFEBSAoiHsaQNIQ7yuQCFe3DiHUhftKIlzdKoRSFe0r8sXDAkSoumkIigYaIOkIfeWi56EESFm8r1w0fFIl4epWgBA9qOMpmirCfeWijtoa9WSx6taAELFBRl/vilS3BJRIbRk9/VFTsLrifUXRuNfXLU0y/7m6p0CKxqN+v6lJU/k3eJxu7Os5LWKDHi1tYstKG1zON1X3DGiRMR80Mx3fdCbc1+bQe3o2SJrYXcV0fFMxL9xXiz0987BBtux65qaCeF8lHCR3FabBTQ3xvk4M1yN5B/Mw2+urew8hTP1BM38Qnu5evK8gMw+7IcfH9E3ZlEBfMSO//Kf35+Cm6ua+rhbSYDeEa9CUyW3qK1HIjj5DBz8dWd0bWCd6Ult/uMPEr+BmbV/JHrVG/a9MsEybV5fsK50R3frmBFXtCtVXmt73H4PhQ4t9k9rkJ55tYXwZrO4rCEUfPHfUEcuaZC/umw97TfaVpslu2tCb2lRWnBlKFtf+huwrjaa6Pxv7RfgW7nubJPtKI/X0puQO4k/Pfe/ovtLY7KbxVwve0/sE3VeaLosIbkEDvt8Hoq/hKGwQYvoq5OMnoq/hLAbgc/FVn33PX7pAfE5QHR6fAAAAAElFTkSuQmCC) 1x, url(data:image/png;base64,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) 2x); } .captive-portal .icon { background-image: -webkit-image-set( url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEyElEQVR4Xu3afWhVZRwH8LvdmjVSjKyQbKazia1k1sL6YzXoZdy28/J8f5XRC7hwEVk0hZQCXY2SipCgYgappXMQ5Ya9ELZqoEM3VHqxBkapm21jOBWmbLfudk+0Peeu2+mc3zk9514WbN9/zz18ds75Pc/vPM+JTP9NZzrT+b9Fn2nGxHrainb8ggEaRgLn0IOjaMFroloU/Ssg1yxBLZpxBD00QufpODrRiFX6IiUKXY8XcRAJsryC3nRL7EpsQJ/r0V3iSS0/MKU4D6uoQwLY/P1q4i0aYX9xVqyPRH1jbr8UtfSbE8CDqIK60wBjOEb7aDf24CBO/gN12LjJF4dM+dPAoNgMdNkUxLENQltAFViJdbTWfFTcaRbiMXyCpE1CM4vR5uAzdwB/hcxCDI5jXqGFeAadNJoGH0ErVhg3YPs46Ad9JldNS3GCAbDPkFGG/eJGWktn3PA4IUB3oxPzGY4AXSBLCSTLgfZxx2MLV1Q5tFHeWxWQDNalHulWeo4q9GW4VVShng5J0KgZ8+bkYpcEqIJk6H2y0CiW4H58gGMYQhyn8DlqUUltZIk1XF01kKUW5yhm3gVB3Q76MDaRyXBQR1aIIJnyi6jNZUgs8uTQfUiGDJIxZ9OPfxEwhAO0F70To5NR5skxrsUgWaGDZLQCHBHVxnKxWjwuivRS7McK7na1kpUZkEwUzXbFiZfZcVk8pE6xZ3u34AV5TFJUsV2ObBHU0+Q5wu0eJ21krw+eD4lzBvOYf7wLeyI5DEfLx2l1DPqoSXK8SItis/gm41mlago/9P2UApklZE0pkHhdAv6YIiB8NwEQL9HvUwCkzZHz15g5Gw8jmR0QtsizvOoACUjAIdlOZQUkHpCgDqd1gwRslhX3djZAmDsBwpATJPtDUZPqGFuyUWU453IWu7fFHZOvhjiQ+aqiDheQ/bJjXpf2oP+caRA+cgPJpkxckeZfiIHMgmirC8gee4rz0qF6KV3IJEi86R8kg0oazQ6Iv2Uyoiajt4x/qJ1BfcCe6JQZC/BQ82XvDLYHJPUEK3tmYHTmlotpbzCSwsDomDpc+mD6VgHETB3M5Or2c5xUBvGTq7P98DjBEjqrBOLbD2eDZj7o+aJdhnhooJxUbd/r1cJ+yl1mJMMBGWUSP6zlezT5SIirGNKacEB4bwKEXcxrEN7gThUGSCtILaZXMC+KiGN+5kHYITndkSj7Ko3GTIPMEvtJFKt9LDYgiZtVQTLnqUPUOJcV8KWE95df4m85ps0+CQ/ig68xN72lscF4yveCFTa5g9AXnDR5lczC1Jr+4UhuCsAv6YlH3EDURFbgPCG3Y2altmPG9FIJ8LnoOYLbXNDzgi+Myvkqii9sIuocAHZZuN9tAKi6hnaiBwka9f942y2rzFcut4tZOO+3r5J6xcVmYEeKc9xlPuC3FhDHynBA6LQ5GGA2ftnNl82RqDrIDgb1ZU4AnxzUTc7raDeWhwPCUW0BA/C7gYeP9cWqILSUX8YAgmxxIoF3tYL/DkK9Y/znwm8CI4lvRLV+dVAQThOpOPht8p+ogZ4W9/jijFFD5eXhWPgPCXjMh/pSVYD6pxaywPGOKOIBWfkYhXYKozgvy5/rYBva8avzcx19sSrgT2jJnjJMVMiUAAAAAElFTkSuQmCC) 1x, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAQAAABNTyozAAAKSUlEQVR4Xu2de2wUxx3Hfxhj5dkSIgOhpICDWilH1AjTGEwdnaCNdbi+2/n+EGlKAvSBopRIKa+KSC5tCU+ZoKaKQ9WSNihqgsXDqRMkHBRBDDi04Q9kGQFG4JAEqF1TIkwSP+BcjBXK7zC3551Ze3zdz/7NnffD3uz8HjND/hAQEBAQEBAQEBAQEBAQEBAQEOAMjeWpOVjF5djFB7gWDWjmNm5DMxq4lg9gF5djlZoTy3OGkmceuzNWoBaiDDu5Dmf4M26/en2GM1yHnShTC2MFj91JNhG+y4lwKVejkTtTv9DI1VzqRMJ3UaoMxlS1Bof5iuunX8FhtQZTaTD1J6EsNU2tRA06uNP7hQ7UkCuxB3kDN/X605t4Q+xB6g8wGWV8njvNXJQUnoH9Op+O/TyD+g5nLEpwXAjwURCK+JCR7ziEIvKf6CRUIC4E+CiIc7DT5LdgJ+eQf8QKuEoI8FdQBi/jL41/05e8jDLIPM50rhYCfBaE+/Cei4DL+Ce2ogy/4We4i2fwG5RhK3/Il5NLwnu4j0yC0dgqBfgvKKmeI/wSopGv0S34/tcRxR/4SDJFZIpwplrCLdzZ54LG9DinalG/Lx5H1+AQP4dNqOSDfIovXb1O8UFUYhM/x6GvRjB+iS/1NP/CGDIDHuU6DQFaY5CaglZxW2d5WdE9RMV3qDn8Op9LKvwcv67mTLmdqOgePI+zQk+rmmLo2eG1Ou8r/beY8+R1AW14PpRFFMlWv0NzqtLxb/w2kk0UysLz3PaVIOdJMkHsfo2pmbHXPFZ1z2A4RPTDb/BG/qLX6r/AK9FRRBzqnk1hFZkAReL/qd8E0SC8iZJwJhGewgXP+v/T9dSEM1GCN2kQaZOBdTo/LfOhhhqOCt3Pxw413FD4iS1CgAWCsNvEN2A36RO9W/wxlggq/uYt0yjH+DW1Ri1Us69eC9Ua/JWPCS1mX+1quAgLrRFEFMvnNnG7cbyDeRh9i2ntPLyTMEi0YSrpgjGo5057BEkw74ab/Ut3hieSjZn8MvbyEW7idm7iI9jLL2NmJPta9ujV/0lVPzHw9Ag9VgiScGl3Zsd5gCh3iPMEasRTIp+vGvWjcKbzAPZ16cF6A2OP+HFZKYgyeLtaQhmUwc/ypylI/5SfDWdiMW+nDO03lxiaLRMk4RA+SF07PuAQaZMhXuyWC8KOXqrfTrpgHXfaLUgWfHo1GBzSLv+gCHHbBUlmjMRHqenBRzNGaoekIuayWJAsAN0Ql7VjL1bgaWcWnsYLeJ/br+u5oF3uCWeKiN1qQRIn3DXHQTN+XXQPCQqH8fJrxag2J0y68FohwHJBEjUblWo4USwfr+Aot3ALjqKsOxUWHcFvq9kGsoWIWyPoEnmgS0SiaFRGR5jKF9bZ8/zwKfIA3u9JNvaSCXipRXo6sYM8oCb0kJK/pCYYKeRwiw1idINJPH6T6sfJBNhmkx6cLb6DPKJeFKJfNFUl7bTpUj8l7wzmPdcF7THUDcTVNunBJtIiko1PuvTgk0i2oRYEm/Twn3KHkCbOI2hFq/MImYGrbJGDj/EUGUHNV/ON9fdYoKYF9diCH4dvI/tAhQWhg704YxEPBCUBJckFBILqA0FJwOTkAgJBZYGgpMUdPh8ISoKallxAIGilbM7HvkCQADVCwKLCYXwsEHTDgiW5Isd5+Nq08V/pJ8h5WK4kSnGxlRMR/6y5u1fPyeVL6SaIBslanxOhVOBSIWjbDQuNOqwWpJ8vLfWQJFML6Dr4eboJUguEoGpKBdnlJzP/WGFaDy70q6AJsjsxpaW2cuBKzOLxa4YFvU/9SO4QOWyksHw4licE1ffwke8aFNSG79oUlMfyyA01V9zA2z02AB82Iucc/s4h6mdkSVrNITewWjxB66kHoqPwcboEElgv7ne1u9FyYXT+Lfv/LqSHIDVf3EF5bysZhcn6btJBEBcKQVW9jMOSLShznkA8DZ6gKWJIqXE3WitG9YcoCfjVwBcUe0jcQS25gQYRnYzVzTzaX70RT1ADuSHDN3Wva0/7WwNbkLo3ITR3Qw69oSxyYcrtfHAgCwplyYmrIUGyZ4JPpJkg/Z+YJDqem9LvJ6Y/SMsI7os0G6T1X/MSFeMr/xeveT4gBOVTyuAXPheIzmEr5xgXlC8EHSA3sEuGGpb147eob/kZamCXTrDqziB+w29FqPQ3WNVNd7i/NPf4rKjJ13THKnejc1wSZq4pW78XLvibMPOQcvWwsuyMrYLcU64aSfvUUd/BxYEhKHcIX5ZJey9lHw+oH3C7HYL0yz7uhUNPqLlWCNIvHLqXnm1rA/Wz9KzRvOAF/NkCQfrNC+7tLxpLgXdaIEi3/cW9gYo8IBb3WyqIF8mEvdcWvH2kQXQEGmwVJFsL1UrvTZw5Woq+zedtFMQ5Urya5r0NeDlpob7HX1ooaLkQdD6U5b2R/ARpgpl8xTZBMpOOMq2lCLF80gS/tEtQLF9qx2TqHXIfcWwmbewShM1Cz3HNeTA6iselk6DicXKuhxL9BXUb00kQ/ij0xJ2x2ksy0RodlS6CoqPQKgRVmFnUuyFdBPEGqTw6yciycHyOMekgCGMSipxV5jYWeIs08G3h+HF+w5mV+jQvsR8lVmBwawoU2SNIXjjJTCmAogTB1WY3NznlfYm//6sYsd5tJ83wbXxKCnKmkx6Jx0BgBXkE//BbkHsdDy9IPdhqfIMldHg4KUCkcn2+OFnDJjrk+IXRpI9aIq3z6cJh5AEnty8E4aQoVMltAU9LmWqJ0U3e9OvjeLcvFDmzqEdQmSCzLpxJAoPbBGKxtyoUWv0XhL9RD2Cx1IM4HiWB2Y0m272N/mp2Hwg63uPbOLGQuZYExrcqxUVMJA/gZ9zudw8RJYCJiaVw7Hf9eelvdovG6HiP+4J86K+ixBZTNEo9aI7dT+7ob5eMkx43GR7kRPhVHMVFvsKX/RU0Y2Ti1BBxl3jA6IbbtUKRJSGI0FObqA/ryAWjW7bjZHS8rYKi43HyJj1bXMIR85v+oxETbRSEiWi8Sc9ut6jfl2MjcNGZbpsgZ3oPTVyHoneTBjoHj7TzIpsE8aKbJxOo1zr1Sf/oGlQWDrND0PWgQujRyIcaO/zotJqiIcjP65DG02Py+Cx0YEX4NtsEYbfO2GP+ALZTKLJJELbov7nMH+H3FsbYIAhxrNOY9/h5CCQ+5w3RUf0rCM26QYXPx4iilTcWj+svQdhvIiT1/SBadGBzLL+vBSHOa00mNPw/yvgEL+ecPhNUJ7OF9jxHS5MfMYF9vMh5mAb5KqiFl4YzyVYwGttSGDq3qQVqQu4Q84KwDaPJDvQP5EcH6vltrDemp1qEzHYTK+jjAwOqYgU00IhOQoX/274jjgrR3zPgdsYvQb1vcupR4oylgQ8mo8xwb8d5lGEypROhLDVNrUSN3nan6ECNWqmmhbIoXQnf5US4lKvR2CsxjVzNpU5ELFhKd5yhsTw1F6u5nKtQw7VoQDO3cRua0cC1qOEqLsdqNTeW5wwla/gvpXzJeo7GTncAAAAASUVORK5CYII=) 2x); } .checkboxes { flex: 0 0 24px; } .checkbox { background: transparent; border: 1px solid white; border-radius: 2px; display: block; height: 14px; left: 0; position: absolute; right: 0; top: 3px; width: 14px; } .checkbox::before { background: transparent; border: 2px solid white; border-right-width: 0; border-top-width: 0; content: ''; height: 4px; left: 2px; opacity: 0; position: absolute; top: 3px; transform: rotate(-45deg); width: 9px; } .ssl-opt-in .checkbox { border-color: #696969; } .ssl-opt-in .checkbox::before { border-color: #696969; } input[type=checkbox]:checked ~ .checkbox::before { opacity: 1; } @media (max-width: 700px) { .interstitial-wrapper { padding: 0 10%; } #error-debugging-info { overflow: auto; } } @media (max-height: 600px) { .error-code { margin-top: 10px; } } @media (max-width: 420px) { button, [dir='rtl'] button, .small-link { float: none; font-size: .825em; font-weight: 400; margin: 0; text-transform: uppercase; width: 100%; } #details { margin: 20px 0 20px 0; } #details p:not(:first-of-type) { margin-top: 10px; } #details-button { display: block; margin-top: 20px; text-align: center; width: 100%; } .interstitial-wrapper { padding: 0 5%; } #extended-reporting-opt-in { margin-top: 24px; } .nav-wrapper { margin-top: 30px; } } /** * Mobile specific styling. * Navigation buttons are anchored to the bottom of the screen. * Details message replaces the top content in its own scrollable area. */ @media (max-width: 420px) and (max-height: 736px) and (orientation: portrait) { #details-button { border: 0; margin: 8px 0 0; } .secondary-button { -webkit-margin-end: 0; margin-top: 16px; } } /* Fixed nav. */ @media (min-width: 240px) and (max-width: 420px) and (min-height: 401px) and (max-height: 736px) and (orientation:portrait), (min-width: 421px) and (max-width: 736px) and (min-height: 240px) and (max-height: 420px) and (orientation:landscape) { body .nav-wrapper { background: #f7f7f7; bottom: 0; box-shadow: 0 -22px 40px rgb(247, 247, 247); left: 0; margin: 0; max-width: 736px; padding-left: 24px; padding-right: 24px; position: fixed; z-index: 2; } body.safe-browsing .nav-wrapper { background: rgb(206, 52, 38); box-shadow: 0 -22px 40px rgb(206, 52, 38); } .interstitial-wrapper { max-width: 736px; } #details, #main-content { padding-bottom: 40px; } } @media (max-width: 420px) and (max-height: 736px) and (orientation: portrait), (max-width: 736px) and (max-height: 420px) and (orientation: landscape) { body { margin: 0 auto; } button, [dir='rtl'] button, button.small-link { font-family: Roboto-Regular,Helvetica; font-size: .933em; font-weight: 600; margin: 6px 0; text-transform: uppercase; transform: translatez(0); } .nav-wrapper { box-sizing: border-box; padding-bottom: 8px; width: 100%; } .error-code { margin-top: 0; } #details { box-sizing: border-box; height: auto; margin: 0; opacity: 1; transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1); } #details.hidden, #main-content.hidden { display: block; height: 0; opacity: 0; overflow: hidden; transition: none; } #details-button { padding-bottom: 16px; padding-top: 16px; } h1 { font-size: 1.5em; margin-bottom: 8px; } .icon { margin-bottom: 12px; } .interstitial-wrapper { box-sizing: border-box; margin: 24px auto 12px; padding: 0 24px; position: relative; } .interstitial-wrapper p { font-size: .95em; line-height: 1.61em; margin-top: 8px; } #main-content { margin: 0; transition: opacity 100ms cubic-bezier(0.4, 0, 0.2, 1); } .small-link { border: 0; } .suggested-left > #control-buttons, .suggested-right > #control-buttons { float: none; margin: 0; } } @media (min-height: 400px) and (orientation:portrait) { .interstitial-wrapper { margin-bottom: 145px; } } @media (min-height: 299px) and (orientation:portrait) { .nav-wrapper { padding-bottom: 16px; } } @media (min-height: 405px) and (max-height: 736px) and (max-width: 420px) and (orientation:portrait) { .icon { margin-bottom: 24px; } .interstitial-wrapper { margin-top: 64px; } } @media (min-height: 480px) and (max-width: 420px) and (max-height: 736px) and (orientation: portrait), (min-height: 338px) and (max-height: 420px) and (max-width: 736px) and (orientation: landscape) { .icon { margin-bottom: 24px; } .nav-wrapper { padding-bottom: 24px; } } @media (min-height: 500px) and (max-width: 414px) and (orientation: portrait) { .interstitial-wrapper { margin-top: 96px; } } /* Phablet sizing */ @media (min-width: 375px) and (min-height: 641px) and (max-height: 736px) and (max-width: 414px) and (orientation: portrait) { button, [dir='rtl'] button, .small-link { font-size: 1em; padding-bottom: 12px; padding-top: 12px; } body:not(.offline) .icon { height: 80px; width: 80px; } #details-button { margin-top: 28px; } h1 { font-size: 1.7em; } .icon { margin-bottom: 28px; } .interstitial-wrapper { padding: 28px; } .interstitial-wrapper p { font-size: 1.05em; } .nav-wrapper { padding: 28px; } } @media (min-width: 420px) and (max-width: 736px) and (min-height: 240px) and (max-height: 298px) and (orientation:landscape) { body:not(.offline) .icon { height: 50px; width: 50px; } .icon { padding-top: 0; } .interstitial-wrapper { margin-top: 16px; } .nav-wrapper { padding: 0 24px 8px; } } @media (min-width: 420px) and (max-width: 736px) and (min-height: 240px) and (max-height: 420px) and (orientation:landscape) { #details-button { margin: 0; } .interstitial-wrapper { margin-bottom: 70px; } .nav-wrapper { margin-top: 0; } #extended-reporting-opt-in { margin-top: 0; } } /* Phablet landscape */ @media (min-width: 680px) and (max-height: 414px) { .interstitial-wrapper { margin: 24px auto; } .nav-wrapper { margin: 16px auto 0; } } @media (max-height: 240px) and (orientation: landscape), (max-height: 480px) and (orientation: portrait), (max-width: 419px) and (max-height: 323px) { body:not(.offline) .icon { height: 56px; width: 56px; } .icon { margin-bottom: 16px; } } /* Small mobile screens. No fixed nav. */ @media (max-height: 400px) and (orientation: portrait), (max-height: 239px) and (orientation: landscape), (max-width: 419px) and (max-height: 399px) { .interstitial-wrapper { display: flex; flex-direction: column; margin-bottom: 0; } #details { flex: 1 1 auto; order: 0; } #main-content { flex: 1 1 auto; order: 0; } .nav-wrapper { flex: 0 1 auto; margin-top: 8px; order: 1; padding-left: 0; padding-right: 0; position: relative; width: 100%; } } @media (max-width: 239px) and (orientation: portrait) { .nav-wrapper { padding-left: 0; padding-right: 0; } }";
var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.appendChild(document.createTextNode(styling));
head.appendChild(style);



var elementDependencies = '<div class="icon icon-offline" jseval="updateIconClass(this.classList, iconClass)" alt="" jstcache="1" style="visibility: hidden;"></div> <div id="offline-resources" jstcache="0"> <img id="offline-resources-1x" src="data:image/png;base64,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" jstcache="0"> <img id="offline-resources-2x" src="data:image/png;base64,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" jstcache="0"> <template id="audio-resources" jstcache="0"> <audio id="offline-sound-press" src="data:audio/mpeg;base64,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" i18n-processed=""></audio> <audio id="offline-sound-hit" src="data:audio/mpeg;base64,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" i18n-processed=""></audio> <audio id="offline-sound-reached" src="data:audio/mpeg;base64,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" i18n-processed=""></audio> </template> </div>'; // HTML string

var div = document.createElement('div');
div.innerHTML = elementDependencies;
var elements = div.childNodes;



// RRRRRRRRRRRUNERCopyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function() {
	'use strict';
	/**
	 * T-Rex runner.
	 * @param {string} outerContainerId Outer containing element id.
	 * @param {Object} opt_config
	 * @constructor
	 * @export
	 */
	function Runner(outerContainerId, opt_config) {
		// Singleton
		if (Runner.instance_) {
			return Runner.instance_;
		}
		Runner.instance_ = this;

		this.outerContainerEl = document.querySelector(outerContainerId);
		this.containerEl = null;
		this.snackbarEl = null;

		this.config = opt_config || Runner.config;

		this.dimensions = Runner.defaultDimensions;

		this.canvas = null;
		this.canvasCtx = null;

		this.tRex = null;

		this.distanceMeter = null;
		this.distanceRan = 0;

		this.highestScore = 0;

		this.time = 0;
		this.runningTime = 0;
		this.msPerFrame = 1000 / FPS;
		this.currentSpeed = this.config.SPEED;

		this.obstacles = [];

		this.activated = false; // Whether the easter egg has been activated.
		this.playing = false; // Whether the game is currently in play state.
		this.crashed = false;
		this.paused = false;
		this.inverted = false;
		this.invertTimer = 0;
		this.resizeTimerId_ = null;

		this.playCount = 0;

		// Sound FX.
		this.audioBuffer = null;
		this.soundFx = {};

		// Global web audio context for playing sounds.
		this.audioContext = null;

		// Images.
		this.images = {};
		this.imagesLoaded = 0;

		if (this.isDisabled()) {
			this.setupDisabledRunner();
		} else {
			this.loadImages();
		}
	}
	window['Runner'] = Runner;


	/**
	 * Default game width.
	 * @const
	 */
	var DEFAULT_WIDTH = 600;

	/**
	 * Frames per second.
	 * @const
	 */
	var FPS = 60;

	/** @const */
	var IS_HIDPI = window.devicePixelRatio > 1;

	/** @const */
	var IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.platform);

	/** @const */
	var IS_MOBILE = /Android/.test(window.navigator.userAgent) || IS_IOS;

	/** @const */
	var IS_TOUCH_ENABLED = 'ontouchstart' in window;

	/**
	 * Default game configuration.
	 * @enum {number}
	 */
	Runner.config = {
		ACCELERATION: 0.001,
		BG_CLOUD_SPEED: 0.2,
		BOTTOM_PAD: 10,
		CLEAR_TIME: 3000,
		CLOUD_FREQUENCY: 0.5,
		GAMEOVER_CLEAR_TIME: 750,
		GAP_COEFFICIENT: 0.6,
		GRAVITY: 0.6,
		INITIAL_JUMP_VELOCITY: 12,
		INVERT_FADE_DURATION: 12000,
		INVERT_DISTANCE: 700,
		MAX_BLINK_COUNT: 3,
		MAX_CLOUDS: 6,
		MAX_OBSTACLE_LENGTH: 3,
		MAX_OBSTACLE_DUPLICATION: 2,
		MAX_SPEED: 13,
		MIN_JUMP_HEIGHT: 35,
		MOBILE_SPEED_COEFFICIENT: 1.2,
		RESOURCE_TEMPLATE_ID: 'audio-resources',
		SPEED: 6,
		SPEED_DROP_COEFFICIENT: 3
	};


	/**
	 * Default dimensions.
	 * @enum {string}
	 */
	Runner.defaultDimensions = {
		WIDTH: DEFAULT_WIDTH,
		HEIGHT: 150
	};


	/**
	 * CSS class names.
	 * @enum {string}
	 */
	Runner.classes = {
		CANVAS: 'runner-canvas',
		CONTAINER: 'runner-container',
		CRASHED: 'crashed',
		ICON: 'icon-offline',
		INVERTED: 'inverted',
		SNACKBAR: 'snackbar',
		SNACKBAR_SHOW: 'snackbar-show',
		TOUCH_CONTROLLER: 'controller'
	};


	/**
	 * Sprite definition layout of the spritesheet.
	 * @enum {Object}
	 */
	Runner.spriteDefinition = {
		LDPI: {
			CACTUS_LARGE: {
				x: 332,
				y: 2
			},
			CACTUS_SMALL: {
				x: 228,
				y: 2
			},
			CLOUD: {
				x: 86,
				y: 2
			},
			HORIZON: {
				x: 2,
				y: 54
			},
			MOON: {
				x: 484,
				y: 2
			},
			PTERODACTYL: {
				x: 134,
				y: 2
			},
			RESTART: {
				x: 2,
				y: 2
			},
			TEXT_SPRITE: {
				x: 655,
				y: 2
			},
			TREX: {
				x: 848,
				y: 2
			},
			STAR: {
				x: 645,
				y: 2
			}
		},
		HDPI: {
			CACTUS_LARGE: {
				x: 652,
				y: 2
			},
			CACTUS_SMALL: {
				x: 446,
				y: 2
			},
			CLOUD: {
				x: 166,
				y: 2
			},
			HORIZON: {
				x: 2,
				y: 104
			},
			MOON: {
				x: 954,
				y: 2
			},
			PTERODACTYL: {
				x: 260,
				y: 2
			},
			RESTART: {
				x: 2,
				y: 2
			},
			TEXT_SPRITE: {
				x: 1294,
				y: 2
			},
			TREX: {
				x: 1678,
				y: 2
			},
			STAR: {
				x: 1276,
				y: 2
			}
		}
	};


	/**
	 * Sound FX. Reference to the ID of the audio tag on interstitial page.
	 * @enum {string}
	 */
	Runner.sounds = {
		BUTTON_PRESS: 'offline-sound-press',
		HIT: 'offline-sound-hit',
		SCORE: 'offline-sound-reached'
	};


	/**
	 * Key code mapping.
	 * @enum {Object}
	 */
	Runner.keycodes = {
		JUMP: {
			'38': 1,
			'32': 1
		}, // Up, spacebar
		DUCK: {
			'40': 1
		}, // Down
		RESTART: {
			'13': 1
		} // Enter
	};


	/**
	 * Runner event names.
	 * @enum {string}
	 */
	Runner.events = {
		ANIM_END: 'webkitAnimationEnd',
		CLICK: 'click',
		KEYDOWN: 'keydown',
		KEYUP: 'keyup',
		MOUSEDOWN: 'mousedown',
		MOUSEUP: 'mouseup',
		RESIZE: 'resize',
		TOUCHEND: 'touchend',
		TOUCHSTART: 'touchstart',
		VISIBILITY: 'visibilitychange',
		BLUR: 'blur',
		FOCUS: 'focus',
		LOAD: 'load'
	};


	Runner.prototype = {
		/**
		 * Whether the easter egg has been disabled. CrOS enterprise enrolled devices.
		 * @return {boolean}
		 */
		isDisabled: function() {
			return loadTimeData && loadTimeData.valueExists('disabledEasterEgg');
		},

		/**
		 * For disabled instances, set up a snackbar with the disabled message.
		 */
		setupDisabledRunner: function() {
			this.containerEl = document.createElement('div');
			this.containerEl.className = Runner.classes.SNACKBAR;
			this.containerEl.textContent = loadTimeData.getValue('disabledEasterEgg');
			this.outerContainerEl.appendChild(this.containerEl);

			// Show notification when the activation key is pressed.
			document.addEventListener(Runner.events.KEYDOWN, function(e) {
				if (Runner.keycodes.JUMP[e.keyCode]) {
					this.containerEl.classList.add(Runner.classes.SNACKBAR_SHOW);
					document.querySelector('.icon').classList.add('icon-disabled');
				}
			}.bind(this));
		},

		/**
		 * Setting individual settings for debugging.
		 * @param {string} setting
		 * @param {*} value
		 */
		updateConfigSetting: function(setting, value) {
			if (setting in this.config && value != undefined) {
				this.config[setting] = value;

				switch (setting) {
					case 'GRAVITY':
					case 'MIN_JUMP_HEIGHT':
					case 'SPEED_DROP_COEFFICIENT':
						this.tRex.config[setting] = value;
						break;
					case 'INITIAL_JUMP_VELOCITY':
						this.tRex.setJumpVelocity(value);
						break;
					case 'SPEED':
						this.setSpeed(value);
						break;
				}
			}
		},

		/**
		 * Cache the appropriate image sprite from the page and get the sprite sheet
		 * definition.
		 */
		loadImages: function() {
			if (IS_HIDPI) {
				Runner.imageSprite = document.getElementById('offline-resources-2x');
				this.spriteDef = Runner.spriteDefinition.HDPI;
			} else {
				Runner.imageSprite = document.getElementById('offline-resources-1x');
				this.spriteDef = Runner.spriteDefinition.LDPI;
			}

			if (Runner.imageSprite.complete) {
				this.init();
			} else {
				// If the images are not yet loaded, add a listener.
				Runner.imageSprite.addEventListener(Runner.events.LOAD,
					this.init.bind(this));
			}
		},

		/**
		 * Load and decode base 64 encoded sounds.
		 */
		loadSounds: function() {
			if (!IS_IOS) {
				this.audioContext = new AudioContext();

				var resourceTemplate =
					document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;

				for (var sound in Runner.sounds) {
					var soundSrc =
						resourceTemplate.getElementById(Runner.sounds[sound]).src;
					soundSrc = soundSrc.substr(soundSrc.indexOf(',') + 1);
					var buffer = decodeBase64ToArrayBuffer(soundSrc);

					// Async, so no guarantee of order in array.
					this.audioContext.decodeAudioData(buffer, function(index, audioData) {
						this.soundFx[index] = audioData;
					}.bind(this, sound));
				}
			}
		},

		/**
		 * Sets the game speed. Adjust the speed accordingly if on a smaller screen.
		 * @param {number} opt_speed
		 */
		setSpeed: function(opt_speed) {
			var speed = opt_speed || this.currentSpeed;

			// Reduce the speed on smaller mobile screens.
			if (this.dimensions.WIDTH < DEFAULT_WIDTH) {
				var mobileSpeed = speed * this.dimensions.WIDTH / DEFAULT_WIDTH *
					this.config.MOBILE_SPEED_COEFFICIENT;
				this.currentSpeed = mobileSpeed > speed ? speed : mobileSpeed;
			} else if (opt_speed) {
				this.currentSpeed = opt_speed;
			}
		},

		/**
		 * Game initialiser.
		 */
		init: function() {
			// Hide the static icon.
			document.querySelector('.' + Runner.classes.ICON).style.visibility =
				'hidden';

			this.adjustDimensions();
			this.setSpeed();

			this.containerEl = document.createElement('div');
			this.containerEl.className = Runner.classes.CONTAINER;

			// Player canvas container.
			this.canvas = createCanvas(this.containerEl, this.dimensions.WIDTH,
				this.dimensions.HEIGHT, Runner.classes.PLAYER);

			this.canvasCtx = this.canvas.getContext('2d');
			this.canvasCtx.fillStyle = '#f7f7f7';
			this.canvasCtx.fill();
			Runner.updateCanvasScaling(this.canvas);

			// Horizon contains clouds, obstacles and the ground.
			this.horizon = new Horizon(this.canvas, this.spriteDef, this.dimensions,
				this.config.GAP_COEFFICIENT);

			// Distance meter
			this.distanceMeter = new DistanceMeter(this.canvas,
				this.spriteDef.TEXT_SPRITE, this.dimensions.WIDTH);

			// Draw t-rex
			this.tRex = new Trex(this.canvas, this.spriteDef.TREX);

			this.outerContainerEl.appendChild(this.containerEl);

			if (IS_MOBILE) {
				this.createTouchController();
			}

			this.startListening();
			this.update();

			window.addEventListener(Runner.events.RESIZE,
				this.debounceResize.bind(this));
		},

		/**
		 * Create the touch controller. A div that covers whole screen.
		 */
		createTouchController: function() {
			this.touchController = document.createElement('div');
			this.touchController.className = Runner.classes.TOUCH_CONTROLLER;
		},

		/**
		 * Debounce the resize event.
		 */
		debounceResize: function() {
			if (!this.resizeTimerId_) {
				this.resizeTimerId_ =
					setInterval(this.adjustDimensions.bind(this), 250);
			}
		},

		/**
		 * Adjust game space dimensions on resize.
		 */
		adjustDimensions: function() {
			clearInterval(this.resizeTimerId_);
			this.resizeTimerId_ = null;

			var boxStyles = window.getComputedStyle(this.outerContainerEl);
			var padding = Number(boxStyles.paddingLeft.substr(0,
				boxStyles.paddingLeft.length - 2));

			this.dimensions.WIDTH = this.outerContainerEl.offsetWidth - padding * 2;

			// Redraw the elements back onto the canvas.
			if (this.canvas) {
				this.canvas.width = this.dimensions.WIDTH;
				this.canvas.height = this.dimensions.HEIGHT;

				Runner.updateCanvasScaling(this.canvas);

				this.distanceMeter.calcXPos(this.dimensions.WIDTH);
				this.clearCanvas();
				this.horizon.update(0, 0, true);
				this.tRex.update(0);

				// Outer container and distance meter.
				if (this.playing || this.crashed || this.paused) {
					this.containerEl.style.width = this.dimensions.WIDTH + 'px';
					this.containerEl.style.height = this.dimensions.HEIGHT + 'px';
					this.distanceMeter.update(0, Math.ceil(this.distanceRan));
					this.stop();
				} else {
					this.tRex.draw(0, 0);
				}

				// Game over panel.
				if (this.crashed && this.gameOverPanel) {
					this.gameOverPanel.updateDimensions(this.dimensions.WIDTH);
					this.gameOverPanel.draw();
				}
			}
		},

		/**
		 * Play the game intro.
		 * Canvas container width expands out to the full width.
		 */
		playIntro: function() {
			if (!this.activated && !this.crashed) {
				this.playingIntro = true;
				this.tRex.playingIntro = true;

				// CSS animation definition.
				var keyframes = '@-webkit-keyframes intro { ' +
					'from { width:' + Trex.config.WIDTH + 'px }' +
					'to { width: ' + this.dimensions.WIDTH + 'px }' +
					'}';
				document.styleSheets[0].insertRule(keyframes, 0);

				this.containerEl.addEventListener(Runner.events.ANIM_END,
					this.startGame.bind(this));

				this.containerEl.style.webkitAnimation = 'intro .4s ease-out 1 both';
				this.containerEl.style.width = this.dimensions.WIDTH + 'px';

				if (this.touchController) {
					this.outerContainerEl.appendChild(this.touchController);
				}
				this.playing = true;
				this.activated = true;
			} else if (this.crashed) {
				this.restart();
			}
		},


		/**
		 * Update the game status to started.
		 */
		startGame: function() {
			this.runningTime = 0;
			this.playingIntro = false;
			this.tRex.playingIntro = false;
			this.containerEl.style.webkitAnimation = '';
			this.playCount++;

			// Handle tabbing off the page. Pause the current game.
			// document.addEventListener(Runner.events.VISIBILITY,
			//       this.onVisibilityChange.bind(this));

			// window.addEventListener(Runner.events.BLUR,
			//       this.onVisibilityChange.bind(this));

			// window.addEventListener(Runner.events.FOCUS,
			//       this.onVisibilityChange.bind(this));
		},

		clearCanvas: function() {
			this.canvasCtx.clearRect(0, 0, this.dimensions.WIDTH,
				this.dimensions.HEIGHT);
		},

		/**
		 * Update the game frame and schedules the next one.
		 */
		update: function() {

			GameManipulator && GameManipulator.readSensors();

			this.updatePending = false;

			var now = getTimeStamp();
			var deltaTime = now - (this.time || now);
			this.time = now;

			if (this.playing) {
				this.clearCanvas();

				if (this.tRex.jumping) {
					this.tRex.updateJump(deltaTime);
				}

				this.runningTime += deltaTime;
				var hasObstacles = this.runningTime > this.config.CLEAR_TIME;

				// First jump triggers the intro.
				if (this.tRex.jumpCount == 1 && !this.playingIntro) {
					this.playIntro();
				}

				// The horizon doesn't move until the intro is over.
				if (this.playingIntro) {
					this.horizon.update(0, this.currentSpeed, hasObstacles);
				} else {
					deltaTime = !this.activated ? 0 : deltaTime;
					this.horizon.update(deltaTime, this.currentSpeed, hasObstacles,
						this.inverted);
				}

				// Check for collisions.
				var collision = hasObstacles &&
					checkForCollision(this.horizon.obstacles[0], this.tRex);

				if (!collision) {
					this.distanceRan += this.currentSpeed * deltaTime / this.msPerFrame;

					if (this.currentSpeed < this.config.MAX_SPEED) {
						this.currentSpeed += this.config.ACCELERATION;
					}
				} else {
					this.gameOver();
				}

				var playAchievementSound = this.distanceMeter.update(deltaTime,
					Math.ceil(this.distanceRan));

				if (playAchievementSound) {
					this.playSound(this.soundFx.SCORE);
				}

				// Night mode.
				if (this.invertTimer > this.config.INVERT_FADE_DURATION) {
					this.invertTimer = 0;
					this.invertTrigger = false;
					this.invert();
				} else if (this.invertTimer) {
					this.invertTimer += deltaTime;
				} else {
					var actualDistance =
						this.distanceMeter.getActualDistance(Math.ceil(this.distanceRan));

					if (actualDistance > 0) {
						this.invertTrigger = !(actualDistance %
							this.config.INVERT_DISTANCE);

						if (this.invertTrigger && this.invertTimer === 0) {
							this.invertTimer += deltaTime;
							this.invert();
						}
					}
				}

				drawMachineStats();
			}

			if (this.playing || (!this.activated &&
					this.tRex.blinkCount < Runner.config.MAX_BLINK_COUNT)) {
				this.tRex.update(deltaTime);
				this.scheduleNextUpdate();
			}
		},

		/**
		 * Event handler.
		 */
		handleEvent: function(e) {
			return (function(evtType, events) {
				switch (evtType) {
					case events.KEYDOWN:
					case events.TOUCHSTART:
					case events.MOUSEDOWN:
						this.onKeyDown(e);
						break;
					case events.KEYUP:
					case events.TOUCHEND:
					case events.MOUSEUP:
						this.onKeyUp(e);
						break;
				}
			}.bind(this))(e.type, Runner.events);
		},

		/**
		 * Bind relevant key / mouse / touch listeners.
		 */
		startListening: function() {
			// Keys.
			document.addEventListener(Runner.events.KEYDOWN, this);
			document.addEventListener(Runner.events.KEYUP, this);

			if (IS_MOBILE) {
				// Mobile only touch devices.
				this.touchController.addEventListener(Runner.events.TOUCHSTART, this);
				this.touchController.addEventListener(Runner.events.TOUCHEND, this);
				this.containerEl.addEventListener(Runner.events.TOUCHSTART, this);
			} else {
				// Mouse.
				document.addEventListener(Runner.events.MOUSEDOWN, this);
				document.addEventListener(Runner.events.MOUSEUP, this);
			}
		},

		/**
		 * Remove all listeners.
		 */
		stopListening: function() {
			document.removeEventListener(Runner.events.KEYDOWN, this);
			document.removeEventListener(Runner.events.KEYUP, this);

			if (IS_MOBILE) {
				this.touchController.removeEventListener(Runner.events.TOUCHSTART, this);
				this.touchController.removeEventListener(Runner.events.TOUCHEND, this);
				this.containerEl.removeEventListener(Runner.events.TOUCHSTART, this);
			} else {
				document.removeEventListener(Runner.events.MOUSEDOWN, this);
				document.removeEventListener(Runner.events.MOUSEUP, this);
			}
		},

		/**
		 * Process keydown.
		 * @param {Event} e
		 */
		onKeyDown: function(e) {
			// Prevent native page scrolling whilst tapping on mobile.
			if (IS_MOBILE && this.playing) {
				e.preventDefault();
			}

			if (!this.crashed && !this.paused) {
				if (Runner.keycodes.JUMP[e.keyCode] ||
					e.type == Runner.events.TOUCHSTART) {
					e.preventDefault();
					// Starting the game for the first time.
					if (!this.playing) {
						this.loadSounds();
						this.playing = true;
						this.update();
						if (window.errorPageController) {
							errorPageController.trackEasterEgg();
						}
					}
					// Start jump.
					if (!this.tRex.jumping && !this.tRex.ducking) {
						this.playSound(this.soundFx.BUTTON_PRESS);
						this.tRex.startJump(this.currentSpeed);
					}
				} else if (this.playing && Runner.keycodes.DUCK[e.keyCode]) {
					e.preventDefault();
					if (this.tRex.jumping) {
						// Speed drop, activated only when jump key is not pressed.
						this.tRex.setSpeedDrop();
					} else if (!this.tRex.jumping && !this.tRex.ducking) {
						// Duck.
						this.tRex.setDuck(true);
					}
				}
			} else if (this.crashed && e.type == Runner.events.TOUCHSTART &&
				e.currentTarget == this.containerEl) {
				this.restart();
			}
		},


		/**
		 * Process key up.
		 * @param {Event} e
		 */
		onKeyUp: function(e) {
			var keyCode = String(e.keyCode);
			var isjumpKey = Runner.keycodes.JUMP[keyCode] ||
				e.type == Runner.events.TOUCHEND ||
				e.type == Runner.events.MOUSEDOWN;

			if (this.isRunning() && isjumpKey) {
				this.tRex.endJump();
			} else if (Runner.keycodes.DUCK[keyCode]) {
				this.tRex.speedDrop = false;
				this.tRex.setDuck(false);
			} else if (this.crashed) {
				// Check that enough time has elapsed before allowing jump key to restart.
				var deltaTime = getTimeStamp() - this.time;

				if (Runner.keycodes.RESTART[keyCode] || this.isLeftClickOnCanvas(e) ||
					(deltaTime >= this.config.GAMEOVER_CLEAR_TIME &&
						Runner.keycodes.JUMP[keyCode])) {
					this.restart();
				}
			} else if (this.paused && isjumpKey) {
				// Reset the jump state
				this.tRex.reset();
				this.play();
			}
		},

		/**
		 * Returns whether the event was a left click on canvas.
		 * On Windows right click is registered as a click.
		 * @param {Event} e
		 * @return {boolean}
		 */
		isLeftClickOnCanvas: function(e) {
			return e.button != null && e.button < 2 &&
				e.type == Runner.events.MOUSEUP && e.target == this.canvas;
		},

		/**
		 * RequestAnimationFrame wrapper.
		 */
		scheduleNextUpdate: function() {
			if (!this.updatePending) {
				this.updatePending = true;
				this.raqId = requestAnimationFrame(this.update.bind(this));
			}
		},

		/**
		 * Whether the game is running.
		 * @return {boolean}
		 */
		isRunning: function() {
			return !!this.raqId;
		},

		/**
		 * Game over state.
		 */
		gameOver: function() {
			this.playSound(this.soundFx.HIT);
			vibrate(200);

			this.stop();
			this.crashed = true;
			this.distanceMeter.acheivement = false;

			this.tRex.update(100, Trex.status.CRASHED);

			// Game over panel.
			if (!this.gameOverPanel) {
				this.gameOverPanel = new GameOverPanel(this.canvas,
					this.spriteDef.TEXT_SPRITE, this.spriteDef.RESTART,
					this.dimensions);
			} else {
				this.gameOverPanel.draw();
			}

			// Update the high score.
			if (this.distanceRan > this.highestScore) {
				this.highestScore = Math.ceil(this.distanceRan);
				this.distanceMeter.setHighScore(this.highestScore);
			}

			// Reset the time clock.
			this.time = getTimeStamp();
			inGameDone();
			this.restart();
		},

		stop: function() {
			this.playing = false;
			this.paused = true;
			cancelAnimationFrame(this.raqId);
			this.raqId = 0;
		},

		play: function() {
			if (!this.crashed) {
				this.playing = true;
				this.paused = false;
				this.tRex.update(0, Trex.status.RUNNING);
				this.time = getTimeStamp();
				this.update();
			}
		},

		restart: function() {
			if (!this.raqId) {
				this.playCount++;
				this.runningTime = 0;
				this.playing = true;
				this.paused = false;
				this.crashed = false;
				this.distanceRan = 0;
				this.setSpeed(this.config.SPEED);
				this.time = getTimeStamp();
				this.containerEl.classList.remove(Runner.classes.CRASHED);
				this.clearCanvas();
				this.distanceMeter.reset(this.highestScore);
				this.horizon.reset();
				this.tRex.reset();
				this.playSound(this.soundFx.BUTTON_PRESS);
				this.invert(true);
				this.update();
			}
		},

		/**
		 * Pause the game if the tab is not in focus.
		 */
		onVisibilityChange: function(e) {
			if (document.hidden || document.webkitHidden || e.type == 'blur' ||
				document.visibilityState != 'visible') {
				this.stop();
			} else if (!this.crashed) {
				this.tRex.reset();
				this.play();
			}
		},

		/**
		 * Play a sound.
		 * @param {SoundBuffer} soundBuffer
		 */
		playSound: function(soundBuffer) {
			if (soundBuffer) {
				var sourceNode = this.audioContext.createBufferSource();
				sourceNode.buffer = soundBuffer;
				sourceNode.connect(this.audioContext.destination);
				sourceNode.start(0);
			}
		},

		/**
		 * Inverts the current page / canvas colors.
		 * @param {boolean} Whether to reset colors.
		 */
		invert: function(reset) {
			if (reset) {
				document.body.classList.toggle(Runner.classes.INVERTED, false);
				this.invertTimer = 0;
				this.inverted = false;
			} else {
				this.inverted = document.body.classList.toggle(Runner.classes.INVERTED,
					this.invertTrigger);
			}
		}
	};


	/**
	 * Updates the canvas size taking into
	 * account the backing store pixel ratio and
	 * the device pixel ratio.
	 *
	 * See article by Paul Lewis:
	 * http://www.html5rocks.com/en/tutorials/canvas/hidpi/
	 *
	 * @param {HTMLCanvasElement} canvas
	 * @param {number} opt_width
	 * @param {number} opt_height
	 * @return {boolean} Whether the canvas was scaled.
	 */
	Runner.updateCanvasScaling = function(canvas, opt_width, opt_height) {
		var context = canvas.getContext('2d');

		// Query the various pixel ratios
		var devicePixelRatio = Math.floor(window.devicePixelRatio) || 1;
		var backingStoreRatio = Math.floor(context.webkitBackingStorePixelRatio) || 1;
		var ratio = devicePixelRatio / backingStoreRatio;

		// Upscale the canvas if the two ratios don't match
		if (devicePixelRatio !== backingStoreRatio) {
			var oldWidth = opt_width || canvas.width;
			var oldHeight = opt_height || canvas.height;

			canvas.width = oldWidth * ratio;
			canvas.height = oldHeight * ratio;

			canvas.style.width = oldWidth + 'px';
			canvas.style.height = oldHeight + 'px';

			// Scale the context to counter the fact that we've manually scaled
			// our canvas element.
			context.scale(ratio, ratio);
			return true;
		} else if (devicePixelRatio == 1) {
			// Reset the canvas width / height. Fixes scaling bug when the page is
			// zoomed and the devicePixelRatio changes accordingly.
			canvas.style.width = canvas.width + 'px';
			canvas.style.height = canvas.height + 'px';
		}
		return false;
	};


	/**
	 * Get random number.
	 * @param {number} min
	 * @param {number} max
	 * @param {number}
	 */
	function getRandomNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	/**
	 * Vibrate on mobile devices.
	 * @param {number} duration Duration of the vibration in milliseconds.
	 */
	function vibrate(duration) {
		if (IS_MOBILE && window.navigator.vibrate) {
			window.navigator.vibrate(duration);
		}
	}


	/**
	 * Create canvas element.
	 * @param {HTMLElement} container Element to append canvas to.
	 * @param {number} width
	 * @param {number} height
	 * @param {string} opt_classname
	 * @return {HTMLCanvasElement}
	 */
	function createCanvas(container, width, height, opt_classname) {
		var canvas = document.createElement('canvas');
		canvas.className = opt_classname ? Runner.classes.CANVAS + ' ' +
			opt_classname : Runner.classes.CANVAS;
		canvas.width = width;
		canvas.height = height;
		container.appendChild(canvas);

		return canvas;
	}


	/**
	 * Decodes the base 64 audio to ArrayBuffer used by Web Audio.
	 * @param {string} base64String
	 */
	function decodeBase64ToArrayBuffer(base64String) {
		var len = (base64String.length / 4) * 3;
		var str = atob(base64String);
		var arrayBuffer = new ArrayBuffer(len);
		var bytes = new Uint8Array(arrayBuffer);

		for (var i = 0; i < len; i++) {
			bytes[i] = str.charCodeAt(i);
		}
		return bytes.buffer;
	}


	/**
	 * Return the current timestamp.
	 * @return {number}
	 */
	function getTimeStamp() {
		return IS_IOS ? new Date().getTime() : performance.now();
	}


	//******************************************************************************


	/**
	 * Game over panel.
	 * @param {!HTMLCanvasElement} canvas
	 * @param {Object} textImgPos
	 * @param {Object} restartImgPos
	 * @param {!Object} dimensions Canvas dimensions.
	 * @constructor
	 */
	function GameOverPanel(canvas, textImgPos, restartImgPos, dimensions) {
		this.canvas = canvas;
		this.canvasCtx = canvas.getContext('2d');
		this.canvasDimensions = dimensions;
		this.textImgPos = textImgPos;
		this.restartImgPos = restartImgPos;
		this.draw();
	};


	/**
	 * Dimensions used in the panel.
	 * @enum {number}
	 */
	GameOverPanel.dimensions = {
		TEXT_X: 0,
		TEXT_Y: 13,
		TEXT_WIDTH: 191,
		TEXT_HEIGHT: 11,
		RESTART_WIDTH: 36,
		RESTART_HEIGHT: 32
	};


	GameOverPanel.prototype = {
		/**
		 * Update the panel dimensions.
		 * @param {number} width New canvas width.
		 * @param {number} opt_height Optional new canvas height.
		 */
		updateDimensions: function(width, opt_height) {
			this.canvasDimensions.WIDTH = width;
			if (opt_height) {
				this.canvasDimensions.HEIGHT = opt_height;
			}
		},

		/**
		 * Draw the panel.
		 */
		draw: function() {
			var dimensions = GameOverPanel.dimensions;

			var centerX = this.canvasDimensions.WIDTH / 2;

			// Game over text.
			var textSourceX = dimensions.TEXT_X;
			var textSourceY = dimensions.TEXT_Y;
			var textSourceWidth = dimensions.TEXT_WIDTH;
			var textSourceHeight = dimensions.TEXT_HEIGHT;

			var textTargetX = Math.round(centerX - (dimensions.TEXT_WIDTH / 2));
			var textTargetY = Math.round((this.canvasDimensions.HEIGHT - 25) / 3);
			var textTargetWidth = dimensions.TEXT_WIDTH;
			var textTargetHeight = dimensions.TEXT_HEIGHT;

			var restartSourceWidth = dimensions.RESTART_WIDTH;
			var restartSourceHeight = dimensions.RESTART_HEIGHT;
			var restartTargetX = centerX - (dimensions.RESTART_WIDTH / 2);
			var restartTargetY = this.canvasDimensions.HEIGHT / 2;

			if (IS_HIDPI) {
				textSourceY *= 2;
				textSourceX *= 2;
				textSourceWidth *= 2;
				textSourceHeight *= 2;
				restartSourceWidth *= 2;
				restartSourceHeight *= 2;
			}

			textSourceX += this.textImgPos.x;
			textSourceY += this.textImgPos.y;

			// Game over text from sprite.
			this.canvasCtx.drawImage(Runner.imageSprite,
				textSourceX, textSourceY, textSourceWidth, textSourceHeight,
				textTargetX, textTargetY, textTargetWidth, textTargetHeight);

			// Restart button.
			this.canvasCtx.drawImage(Runner.imageSprite,
				this.restartImgPos.x, this.restartImgPos.y,
				restartSourceWidth, restartSourceHeight,
				restartTargetX, restartTargetY, dimensions.RESTART_WIDTH,
				dimensions.RESTART_HEIGHT);
		}
	};


	//******************************************************************************

	/**
	 * Check for a collision.
	 * @param {!Obstacle} obstacle
	 * @param {!Trex} tRex T-rex object.
	 * @param {HTMLCanvasContext} opt_canvasCtx Optional canvas context for drawing
	 *    collision boxes.
	 * @return {Array<CollisionBox>}
	 */
	function checkForCollision(obstacle, tRex, opt_canvasCtx) {
		var obstacleBoxXPos = Runner.defaultDimensions.WIDTH + obstacle.xPos;

		// Adjustments are made to the bounding box as there is a 1 pixel white
		// border around the t-rex and obstacles.
		var tRexBox = new CollisionBox(
			tRex.xPos + 1,
			tRex.yPos + 1,
			tRex.config.WIDTH - 2,
			tRex.config.HEIGHT - 2);

		var obstacleBox = new CollisionBox(
			obstacle.xPos + 1,
			obstacle.yPos + 1,
			obstacle.typeConfig.width * obstacle.size - 2,
			obstacle.typeConfig.height - 2);

		// Debug outer box
		if (opt_canvasCtx) {
			drawCollisionBoxes(opt_canvasCtx, tRexBox, obstacleBox);
		}

		// Simple outer bounds check.
		if (boxCompare(tRexBox, obstacleBox)) {
			var collisionBoxes = obstacle.collisionBoxes;
			var tRexCollisionBoxes = tRex.ducking ?
				Trex.collisionBoxes.DUCKING : Trex.collisionBoxes.RUNNING;

			// Detailed axis aligned box check.
			for (var t = 0; t < tRexCollisionBoxes.length; t++) {
				for (var i = 0; i < collisionBoxes.length; i++) {
					// Adjust the box to actual positions.
					var adjTrexBox =
						createAdjustedCollisionBox(tRexCollisionBoxes[t], tRexBox);
					var adjObstacleBox =
						createAdjustedCollisionBox(collisionBoxes[i], obstacleBox);
					var crashed = boxCompare(adjTrexBox, adjObstacleBox);

					// Draw boxes for debug.
					if (opt_canvasCtx) {
						drawCollisionBoxes(opt_canvasCtx, adjTrexBox, adjObstacleBox);
					}

					if (crashed) {
						return [adjTrexBox, adjObstacleBox];
					}
				}
			}
		}
		return false;
	};


	/**
	 * Adjust the collision box.
	 * @param {!CollisionBox} box The original box.
	 * @param {!CollisionBox} adjustment Adjustment box.
	 * @return {CollisionBox} The adjusted collision box object.
	 */
	function createAdjustedCollisionBox(box, adjustment) {
		return new CollisionBox(
			box.x + adjustment.x,
			box.y + adjustment.y,
			box.width,
			box.height);
	};


	/**
	 * Draw the collision boxes for debug.
	 */
	function drawCollisionBoxes(canvasCtx, tRexBox, obstacleBox) {
		canvasCtx.save();
		canvasCtx.strokeStyle = '#f00';
		canvasCtx.strokeRect(tRexBox.x, tRexBox.y, tRexBox.width, tRexBox.height);

		canvasCtx.strokeStyle = '#0f0';
		canvasCtx.strokeRect(obstacleBox.x, obstacleBox.y,
			obstacleBox.width, obstacleBox.height);
		canvasCtx.restore();
	};


	/**
	 * Compare two collision boxes for a collision.
	 * @param {CollisionBox} tRexBox
	 * @param {CollisionBox} obstacleBox
	 * @return {boolean} Whether the boxes intersected.
	 */
	function boxCompare(tRexBox, obstacleBox) {
		var crashed = false;
		var tRexBoxX = tRexBox.x;
		var tRexBoxY = tRexBox.y;

		var obstacleBoxX = obstacleBox.x;
		var obstacleBoxY = obstacleBox.y;

		// Axis-Aligned Bounding Box method.
		if (tRexBox.x < obstacleBoxX + obstacleBox.width &&
			tRexBox.x + tRexBox.width > obstacleBoxX &&
			tRexBox.y < obstacleBox.y + obstacleBox.height &&
			tRexBox.height + tRexBox.y > obstacleBox.y) {
			crashed = true;
		}

		return crashed;
	};


	//******************************************************************************

	/**
	 * Collision box object.
	 * @param {number} x X position.
	 * @param {number} y Y Position.
	 * @param {number} w Width.
	 * @param {number} h Height.
	 */
	function CollisionBox(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
	};


	//******************************************************************************

	/**
	 * Obstacle.
	 * @param {HTMLCanvasCtx} canvasCtx
	 * @param {Obstacle.type} type
	 * @param {Object} spritePos Obstacle position in sprite.
	 * @param {Object} dimensions
	 * @param {number} gapCoefficient Mutipler in determining the gap.
	 * @param {number} speed
	 * @param {number} opt_xOffset
	 */
	function Obstacle(canvasCtx, type, spriteImgPos, dimensions,
		gapCoefficient, speed, opt_xOffset) {

		this.canvasCtx = canvasCtx;
		this.spritePos = spriteImgPos;
		this.typeConfig = type;
		this.gapCoefficient = gapCoefficient;
		this.size = getRandomNum(1, Obstacle.MAX_OBSTACLE_LENGTH);
		this.dimensions = dimensions;
		this.remove = false;
		this.xPos = dimensions.WIDTH + (opt_xOffset || 0);
		this.yPos = 0;
		this.width = 0;
		this.collisionBoxes = [];
		this.gap = 0;
		this.speedOffset = 0;

		// For animated obstacles.
		this.currentFrame = 0;
		this.timer = 0;

		this.init(speed);
	};

	/**
	 * Coefficient for calculating the maximum gap.
	 * @const
	 */
	Obstacle.MAX_GAP_COEFFICIENT = 1.5;

	/**
	 * Maximum obstacle grouping count.
	 * @const
	 */
	Obstacle.MAX_OBSTACLE_LENGTH = 3,


		Obstacle.prototype = {
			/**
			 * Initialise the DOM for the obstacle.
			 * @param {number} speed
			 */
			init: function(speed) {

				this.cloneCollisionBoxes();

				// Only allow sizing if we're at the right speed.
				if (this.size > 1 && this.typeConfig.multipleSpeed > speed) {
					this.size = 1;
				}

				this.width = this.typeConfig.width * this.size;


				// Check if obstacle can be positioned at various heights.
				if (Array.isArray(this.typeConfig.yPos)) {
					var yPosConfig = IS_MOBILE ? this.typeConfig.yPosMobile :
						this.typeConfig.yPos;
					this.yPos = yPosConfig[getRandomNum(0, yPosConfig.length - 1)];
				} else {
					this.yPos = this.typeConfig.yPos;
				}

				this.draw();

				// Make collision box adjustments,
				// Central box is adjusted to the size as one box.
				//      ____        ______        ________
				//    _|   |-|    _|     |-|    _|       |-|
				//   | |<->| |   | |<--->| |   | |<----->| |
				//   | | 1 | |   | |  2  | |   | |   3   | |
				//   |_|___|_|   |_|_____|_|   |_|_______|_|
				//
				if (this.size > 1) {
					this.collisionBoxes[1].width = this.width - this.collisionBoxes[0].width -
						this.collisionBoxes[2].width;
					this.collisionBoxes[2].x = this.width - this.collisionBoxes[2].width;
				}

				// For obstacles that go at a different speed from the horizon.
				if (this.typeConfig.speedOffset) {
					this.speedOffset = Math.random() > 0.5 ? this.typeConfig.speedOffset :
						-this.typeConfig.speedOffset;
				}

				this.gap = this.getGap(this.gapCoefficient, speed);
			},

			/**
			 * Draw and crop based on size.
			 */
			draw: function() {
				var sourceWidth = this.typeConfig.width;
				var sourceHeight = this.typeConfig.height;

				if (IS_HIDPI) {
					sourceWidth = sourceWidth * 2;
					sourceHeight = sourceHeight * 2;
				}

				// X position in sprite.
				var sourceX = (sourceWidth * this.size) * (0.5 * (this.size - 1)) +
					this.spritePos.x;

				// Animation frames.
				if (this.currentFrame > 0) {
					sourceX += sourceWidth * this.currentFrame;
				}

				this.canvasCtx.drawImage(Runner.imageSprite,
					sourceX, this.spritePos.y,
					sourceWidth * this.size, sourceHeight,
					this.xPos, this.yPos,
					this.typeConfig.width * this.size, this.typeConfig.height);
			},

			/**
			 * Obstacle frame update.
			 * @param {number} deltaTime
			 * @param {number} speed
			 */
			update: function(deltaTime, speed) {
				if (!this.remove) {
					if (this.typeConfig.speedOffset) {
						speed += this.speedOffset;
					}
					this.xPos -= Math.floor((speed * FPS / 1000) * deltaTime);

					// Update frame
					if (this.typeConfig.numFrames) {
						this.timer += deltaTime;
						if (this.timer >= this.typeConfig.frameRate) {
							this.currentFrame =
								this.currentFrame == this.typeConfig.numFrames - 1 ?
								0 : this.currentFrame + 1;
							this.timer = 0;
						}
					}
					this.draw();

					if (!this.isVisible()) {
						this.remove = true;
					}
				}
			},

			/**
			 * Calculate a random gap size.
			 * - Minimum gap gets wider as speed increses
			 * @param {number} gapCoefficient
			 * @param {number} speed
			 * @return {number} The gap size.
			 */
			getGap: function(gapCoefficient, speed) {
				var minGap = Math.round(this.width * speed +
					this.typeConfig.minGap * gapCoefficient);
				var maxGap = Math.round(minGap * Obstacle.MAX_GAP_COEFFICIENT);
				return getRandomNum(minGap, maxGap);
			},

			/**
			 * Check if obstacle is visible.
			 * @return {boolean} Whether the obstacle is in the game area.
			 */
			isVisible: function() {
				return this.xPos + this.width > 0;
			},

			/**
			 * Make a copy of the collision boxes, since these will change based on
			 * obstacle type and size.
			 */
			cloneCollisionBoxes: function() {
				var collisionBoxes = this.typeConfig.collisionBoxes;

				for (var i = collisionBoxes.length - 1; i >= 0; i--) {
					this.collisionBoxes[i] = new CollisionBox(collisionBoxes[i].x,
						collisionBoxes[i].y, collisionBoxes[i].width,
						collisionBoxes[i].height);
				}
			}
		};


	/**
	 * Obstacle definitions.
	 * minGap: minimum pixel space betweeen obstacles.
	 * multipleSpeed: Speed at which multiples are allowed.
	 * speedOffset: speed faster / slower than the horizon.
	 * minSpeed: Minimum speed which the obstacle can make an appearance.
	 */
	Obstacle.types = [{
		type: 'CACTUS_SMALL',
		width: 17,
		height: 35,
		yPos: 105,
		multipleSpeed: 4,
		minGap: 120,
		minSpeed: 0,
		collisionBoxes: [
			new CollisionBox(0, 7, 5, 27),
			new CollisionBox(4, 0, 6, 34),
			new CollisionBox(10, 4, 7, 14)
		]
	}, {
		type: 'CACTUS_LARGE',
		width: 25,
		height: 50,
		yPos: 90,
		multipleSpeed: 7,
		minGap: 120,
		minSpeed: 0,
		collisionBoxes: [
			new CollisionBox(0, 12, 7, 38),
			new CollisionBox(8, 0, 7, 49),
			new CollisionBox(13, 10, 10, 38)
		]
	}, {
		type: 'PTERODACTYL',
		width: 46,
		height: 40,
		yPos: [100, 75, 50], // Variable height.
		yPosMobile: [100, 50], // Variable height mobile.
		multipleSpeed: 999,
		minSpeed: 8.5,
		minGap: 150,
		collisionBoxes: [
			new CollisionBox(15, 15, 16, 5),
			new CollisionBox(18, 21, 24, 6),
			new CollisionBox(2, 14, 4, 3),
			new CollisionBox(6, 10, 4, 7),
			new CollisionBox(10, 8, 6, 9)
		],
		numFrames: 2,
		frameRate: 1000 / 6,
		speedOffset: .8
	}];


	//******************************************************************************
	/**
	 * T-rex game character.
	 * @param {HTMLCanvas} canvas
	 * @param {Object} spritePos Positioning within image sprite.
	 * @constructor
	 */
	function Trex(canvas, spritePos) {
		this.canvas = canvas;
		this.canvasCtx = canvas.getContext('2d');
		this.spritePos = spritePos;
		this.xPos = 0;
		this.yPos = 0;
		// Position when on the ground.
		this.groundYPos = 0;
		this.currentFrame = 0;
		this.currentAnimFrames = [];
		this.blinkDelay = 0;
		this.blinkCount = 0;
		this.animStartTime = 0;
		this.timer = 0;
		this.msPerFrame = 1000 / FPS;
		this.config = Trex.config;
		// Current status.
		this.status = Trex.status.WAITING;

		this.jumping = false;
		this.ducking = false;
		this.jumpVelocity = 0;
		this.reachedMinHeight = false;
		this.speedDrop = false;
		this.jumpCount = 0;
		this.jumpspotX = 0;
		this.obstaclesJumped = 0;

		this.init();
	};


	/**
	 * T-rex player config.
	 * @enum {number}
	 */
	Trex.config = {
		DROP_VELOCITY: -5,
		GRAVITY: 0.6,
		HEIGHT: 47,
		HEIGHT_DUCK: 25,
		INIITAL_JUMP_VELOCITY: -10,
		INTRO_DURATION: 1500,
		MAX_JUMP_HEIGHT: 30,
		MIN_JUMP_HEIGHT: 30,
		SPEED_DROP_COEFFICIENT: 3,
		SPRITE_WIDTH: 262,
		START_X_POS: 50,
		WIDTH: 44,
		WIDTH_DUCK: 59
	};


	/**
	 * Used in collision detection.
	 * @type {Array<CollisionBox>}
	 */
	Trex.collisionBoxes = {
		DUCKING: [
			new CollisionBox(1, 18, 55, 25)
		],
		RUNNING: [
			new CollisionBox(22, 0, 17, 16),
			new CollisionBox(1, 18, 30, 9),
			new CollisionBox(10, 35, 14, 8),
			new CollisionBox(1, 24, 29, 5),
			new CollisionBox(5, 30, 21, 4),
			new CollisionBox(9, 34, 15, 4)
		]
	};


	/**
	 * Animation states.
	 * @enum {string}
	 */
	Trex.status = {
		CRASHED: 'CRASHED',
		DUCKING: 'DUCKING',
		JUMPING: 'JUMPING',
		RUNNING: 'RUNNING',
		WAITING: 'WAITING'
	};

	/**
	 * Blinking coefficient.
	 * @const
	 */
	Trex.BLINK_TIMING = 7000;


	/**
	 * Animation config for different states.
	 * @enum {Object}
	 */
	Trex.animFrames = {
		WAITING: {
			frames: [44, 0],
			msPerFrame: 1000 / 3
		},
		RUNNING: {
			frames: [88, 132],
			msPerFrame: 1000 / 12
		},
		CRASHED: {
			frames: [220],
			msPerFrame: 1000 / 60
		},
		JUMPING: {
			frames: [0],
			msPerFrame: 1000 / 60
		},
		DUCKING: {
			frames: [262, 321],
			msPerFrame: 1000 / 8
		}
	};


	Trex.prototype = {
		/**
		 * T-rex player initaliser.
		 * Sets the t-rex to blink at random intervals.
		 */
		init: function() {
			this.groundYPos = Runner.defaultDimensions.HEIGHT - this.config.HEIGHT -
				Runner.config.BOTTOM_PAD;
			this.yPos = this.groundYPos;
			this.minJumpHeight = this.groundYPos - this.config.MIN_JUMP_HEIGHT;

			this.draw(0, 0);
			this.update(0, Trex.status.WAITING);
		},

		/**
		 * Setter for the jump velocity.
		 * The approriate drop velocity is also set.
		 */
		setJumpVelocity: function(setting) {
			this.config.INIITAL_JUMP_VELOCITY = -setting;
			this.config.DROP_VELOCITY = -setting / 2;
		},

		/**
		 * Set the animation status.
		 * @param {!number} deltaTime
		 * @param {Trex.status} status Optional status to switch to.
		 */
		update: function(deltaTime, opt_status) {
			this.timer += deltaTime;

			// Update the status.
			if (opt_status) {
				this.status = opt_status;
				this.currentFrame = 0;
				this.msPerFrame = Trex.animFrames[opt_status].msPerFrame;
				this.currentAnimFrames = Trex.animFrames[opt_status].frames;

				if (opt_status == Trex.status.WAITING) {
					this.animStartTime = getTimeStamp();
					this.setBlinkDelay();
				}
			}

			// Game intro animation, T-rex moves in from the left.
			if (this.playingIntro && this.xPos < this.config.START_X_POS) {
				this.xPos += Math.round((this.config.START_X_POS /
					this.config.INTRO_DURATION) * deltaTime);
			}

			if (this.status == Trex.status.WAITING) {
				this.blink(getTimeStamp());
			} else {
				this.draw(this.currentAnimFrames[this.currentFrame], 0);
			}

			// Update the frame position.
			if (this.timer >= this.msPerFrame) {
				this.currentFrame = this.currentFrame ==
					this.currentAnimFrames.length - 1 ? 0 : this.currentFrame + 1;
				this.timer = 0;
			}

			// Speed drop becomes duck if the down key is still being pressed.
			if (this.speedDrop && this.yPos == this.groundYPos) {
				this.speedDrop = false;
				this.setDuck(true);
			}
		},

		/**
		 * Draw the t-rex to a particular position.
		 * @param {number} x
		 * @param {number} y
		 */
		draw: function(x, y) {
			var sourceX = x;
			var sourceY = y;
			var sourceWidth = this.ducking && this.status != Trex.status.CRASHED ?
				this.config.WIDTH_DUCK : this.config.WIDTH;
			var sourceHeight = this.config.HEIGHT;

			if (IS_HIDPI) {
				sourceX *= 2;
				sourceY *= 2;
				sourceWidth *= 2;
				sourceHeight *= 2;
			}

			// Adjustments for sprite sheet position.
			sourceX += this.spritePos.x;
			sourceY += this.spritePos.y;

			// Ducking.
			if (this.ducking && this.status != Trex.status.CRASHED) {
				this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY,
					sourceWidth, sourceHeight,
					this.xPos, this.yPos,
					this.config.WIDTH_DUCK, this.config.HEIGHT);
			} else {
				// Crashed whilst ducking. Trex is standing up so needs adjustment.
				if (this.ducking && this.status == Trex.status.CRASHED) {
					this.xPos++;
				}
				// Standing / running
				this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY,
					sourceWidth, sourceHeight,
					this.xPos, this.yPos,
					this.config.WIDTH, this.config.HEIGHT);
			}
		},

		/**
		 * Sets a random time for the blink to happen.
		 */
		setBlinkDelay: function() {
			this.blinkDelay = Math.ceil(Math.random() * Trex.BLINK_TIMING);
		},

		/**
		 * Make t-rex blink at random intervals.
		 * @param {number} time Current time in milliseconds.
		 */
		blink: function(time) {
			var deltaTime = time - this.animStartTime;

			if (deltaTime >= this.blinkDelay) {
				this.draw(this.currentAnimFrames[this.currentFrame], 0);

				if (this.currentFrame == 1) {
					// Set new random delay to blink.
					this.setBlinkDelay();
					this.animStartTime = time;
					this.blinkCount++;
				}
			}
		},

		/**
		 * Initialise a jump.
		 * @param {number} speed
		 */
		startJump: function(speed) {
			if (!this.jumping) {
				this.update(0, Trex.status.JUMPING);
				// Tweak the jump velocity based on the speed.
				this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY - (speed / 10);
				this.jumping = true;
				this.reachedMinHeight = false;
				this.speedDrop = false;
			}
		},

		/**
		 * Jump is complete, falling down.
		 */
		endJump: function() {
			if (this.reachedMinHeight &&
				this.jumpVelocity < this.config.DROP_VELOCITY) {
				this.jumpVelocity = this.config.DROP_VELOCITY;
			}
		},

		/**
		 * Update frame for a jump.
		 * @param {number} deltaTime
		 * @param {number} speed
		 */
		updateJump: function(deltaTime, speed) {
			var msPerFrame = Trex.animFrames[this.status].msPerFrame;
			var framesElapsed = deltaTime / msPerFrame;

			// Speed drop makes Trex fall faster.
			if (this.speedDrop) {
				this.yPos += Math.round(this.jumpVelocity *
					this.config.SPEED_DROP_COEFFICIENT * framesElapsed);
			} else {
				this.yPos += Math.round(this.jumpVelocity * framesElapsed);
			}

			this.jumpVelocity += this.config.GRAVITY * framesElapsed;

			// Minimum height has been reached.
			if (this.yPos < this.minJumpHeight || this.speedDrop) {
				this.reachedMinHeight = true;
			}

			// Reached max height
			if (this.yPos < this.config.MAX_JUMP_HEIGHT || this.speedDrop) {
				this.endJump();
			}

			// Back down at ground level. Jump completed.
			if (this.yPos > this.groundYPos) {
				this.reset();
				this.jumpCount++;
			}

			this.update(deltaTime);
		},

		/**
		 * Set the speed drop. Immediately cancels the current jump.
		 */
		setSpeedDrop: function() {
			this.speedDrop = true;
			this.jumpVelocity = 1;
		},

		/**
		 * @param {boolean} isDucking.
		 */
		setDuck: function(isDucking) {
			if (isDucking && this.status != Trex.status.DUCKING) {
				this.update(0, Trex.status.DUCKING);
				this.ducking = true;
			} else if (this.status == Trex.status.DUCKING) {
				this.update(0, Trex.status.RUNNING);
				this.ducking = false;
			}
		},

		/**
		 * Reset the t-rex to running at start of game.
		 */
		reset: function() {
			this.yPos = this.groundYPos;
			this.jumpVelocity = 0;
			this.jumping = false;
			this.ducking = false;
			this.update(0, Trex.status.RUNNING);
			this.midair = false;
			this.speedDrop = false;
			this.jumpCount = 0;
		}
	};


	//******************************************************************************

	/**
	 * Handles displaying the distance meter.
	 * @param {!HTMLCanvasElement} canvas
	 * @param {Object} spritePos Image position in sprite.
	 * @param {number} canvasWidth
	 * @constructor
	 */
	function DistanceMeter(canvas, spritePos, canvasWidth) {
		this.canvas = canvas;
		this.canvasCtx = canvas.getContext('2d');
		this.image = Runner.imageSprite;
		this.spritePos = spritePos;
		this.x = 0;
		this.y = 5;

		this.currentDistance = 0;
		this.maxScore = 0;
		this.highScore = 0;
		this.container = null;

		this.digits = [];
		this.acheivement = false;
		this.defaultString = '';
		this.flashTimer = 0;
		this.flashIterations = 0;
		this.invertTrigger = false;

		this.config = DistanceMeter.config;
		this.maxScoreUnits = this.config.MAX_DISTANCE_UNITS;
		this.init(canvasWidth);
	};


	/**
	 * @enum {number}
	 */
	DistanceMeter.dimensions = {
		WIDTH: 10,
		HEIGHT: 13,
		DEST_WIDTH: 11
	};


	/**
	 * Y positioning of the digits in the sprite sheet.
	 * X position is always 0.
	 * @type {Array<number>}
	 */
	DistanceMeter.yPos = [0, 13, 27, 40, 53, 67, 80, 93, 107, 120];


	/**
	 * Distance meter config.
	 * @enum {number}
	 */
	DistanceMeter.config = {
		// Number of digits.
		MAX_DISTANCE_UNITS: 5,

		// Distance that causes achievement animation.
		ACHIEVEMENT_DISTANCE: 100,

		// Used for conversion from pixel distance to a scaled unit.
		COEFFICIENT: 0.025,

		// Flash duration in milliseconds.
		FLASH_DURATION: 1000 / 4,

		// Flash iterations for achievement animation.
		FLASH_ITERATIONS: 3
	};


	DistanceMeter.prototype = {
		/**
		 * Initialise the distance meter to '00000'.
		 * @param {number} width Canvas width in px.
		 */
		init: function(width) {
			var maxDistanceStr = '';

			this.calcXPos(width);
			this.maxScore = this.maxScoreUnits;
			for (var i = 0; i < this.maxScoreUnits; i++) {
				this.draw(i, 0);
				this.defaultString += '0';
				maxDistanceStr += '9';
			}

			this.maxScore = parseInt(maxDistanceStr);
		},

		/**
		 * Calculate the xPos in the canvas.
		 * @param {number} canvasWidth
		 */
		calcXPos: function(canvasWidth) {
			this.x = canvasWidth - (DistanceMeter.dimensions.DEST_WIDTH *
				(this.maxScoreUnits + 1));
		},

		/**
		 * Draw a digit to canvas.
		 * @param {number} digitPos Position of the digit.
		 * @param {number} value Digit value 0-9.
		 * @param {boolean} opt_highScore Whether drawing the high score.
		 */
		draw: function(digitPos, value, opt_highScore) {
			var sourceWidth = DistanceMeter.dimensions.WIDTH;
			var sourceHeight = DistanceMeter.dimensions.HEIGHT;
			var sourceX = DistanceMeter.dimensions.WIDTH * value;
			var sourceY = 0;

			var targetX = digitPos * DistanceMeter.dimensions.DEST_WIDTH;
			var targetY = this.y;
			var targetWidth = DistanceMeter.dimensions.WIDTH;
			var targetHeight = DistanceMeter.dimensions.HEIGHT;

			// For high DPI we 2x source values.
			if (IS_HIDPI) {
				sourceWidth *= 2;
				sourceHeight *= 2;
				sourceX *= 2;
			}

			sourceX += this.spritePos.x;
			sourceY += this.spritePos.y;

			this.canvasCtx.save();

			if (opt_highScore) {
				// Left of the current score.
				var highScoreX = this.x - (this.maxScoreUnits * 2) *
					DistanceMeter.dimensions.WIDTH;
				this.canvasCtx.translate(highScoreX, this.y);
			} else {
				this.canvasCtx.translate(this.x, this.y);
			}

			this.canvasCtx.drawImage(this.image, sourceX, sourceY,
				sourceWidth, sourceHeight,
				targetX, targetY,
				targetWidth, targetHeight
			);

			this.canvasCtx.restore();


		},

		/**
		 * Covert pixel distance to a 'real' distance.
		 * @param {number} distance Pixel distance ran.
		 * @return {number} The 'real' distance ran.
		 */
		getActualDistance: function(distance) {
			return distance ? Math.round(distance * this.config.COEFFICIENT) : 0;
		},

		/**
		 * Update the distance meter.
		 * @param {number} distance
		 * @param {number} deltaTime
		 * @return {boolean} Whether the acheivement sound fx should be played.
		 */
		update: function(deltaTime, distance) {
			var paint = true;
			var playSound = false;

			if (!this.acheivement) {
				distance = this.getActualDistance(distance);
				// Score has gone beyond the initial digit count.
				if (distance > this.maxScore && this.maxScoreUnits ==
					this.config.MAX_DISTANCE_UNITS) {
					this.maxScoreUnits++;
					this.maxScore = parseInt(this.maxScore + '9');
				} else {
					this.distance = 0;
				}

				if (distance > 0) {
					// Acheivement unlocked
					if (distance % this.config.ACHIEVEMENT_DISTANCE == 0) {
						// Flash score and play sound.
						this.acheivement = true;
						this.flashTimer = 0;
						playSound = true;
					}

					// Create a string representation of the distance with leading 0.
					var distanceStr = (this.defaultString +
						distance).substr(-this.maxScoreUnits);
					this.digits = distanceStr.split('');
				} else {
					this.digits = this.defaultString.split('');
				}
			} else {
				// Control flashing of the score on reaching acheivement.
				if (this.flashIterations <= this.config.FLASH_ITERATIONS) {
					this.flashTimer += deltaTime;

					if (this.flashTimer < this.config.FLASH_DURATION) {
						paint = false;
					} else if (this.flashTimer >
						this.config.FLASH_DURATION * 2) {
						this.flashTimer = 0;
						this.flashIterations++;
					}
				} else {
					this.acheivement = false;
					this.flashIterations = 0;
					this.flashTimer = 0;
				}
			}

			// Draw the digits if not flashing.
			if (paint) {
				for (var i = this.digits.length - 1; i >= 0; i--) {
					this.draw(i, parseInt(this.digits[i]));
				}
			}

			this.drawHighScore();
			return playSound;
		},

		/**
		 * Draw the high score.
		 */
		drawHighScore: function() {
			this.canvasCtx.save();
			this.canvasCtx.globalAlpha = .8;
			for (var i = this.highScore.length - 1; i >= 0; i--) {
				this.draw(i, parseInt(this.highScore[i], 10), true);
			}
			this.canvasCtx.restore();
		},

		/**
		 * Set the highscore as a array string.
		 * Position of char in the sprite: H - 10, I - 11.
		 * @param {number} distance Distance ran in pixels.
		 */
		setHighScore: function(distance) {
			distance = this.getActualDistance(distance);
			var highScoreStr = (this.defaultString +
				distance).substr(-this.maxScoreUnits);

			this.highScore = ['10', '11', ''].concat(highScoreStr.split(''));
		},

		/**
		 * Reset the distance meter back to '00000'.
		 */
		reset: function() {
			this.update(0);
			this.acheivement = false;
		}
	};


	//******************************************************************************

	/**
	 * Cloud background item.
	 * Similar to an obstacle object but without collision boxes.
	 * @param {HTMLCanvasElement} canvas Canvas element.
	 * @param {Object} spritePos Position of image in sprite.
	 * @param {number} containerWidth
	 */
	function Cloud(canvas, spritePos, containerWidth) {
		this.canvas = canvas;
		this.canvasCtx = this.canvas.getContext('2d');
		this.spritePos = spritePos;
		this.containerWidth = containerWidth;
		this.xPos = containerWidth;
		this.yPos = 0;
		this.remove = false;
		this.cloudGap = getRandomNum(Cloud.config.MIN_CLOUD_GAP,
			Cloud.config.MAX_CLOUD_GAP);

		this.init();
	};


	/**
	 * Cloud object config.
	 * @enum {number}
	 */
	Cloud.config = {
		HEIGHT: 14,
		MAX_CLOUD_GAP: 400,
		MAX_SKY_LEVEL: 30,
		MIN_CLOUD_GAP: 100,
		MIN_SKY_LEVEL: 71,
		WIDTH: 46
	};


	Cloud.prototype = {
		/**
		 * Initialise the cloud. Sets the Cloud height.
		 */
		init: function() {
			this.yPos = getRandomNum(Cloud.config.MAX_SKY_LEVEL,
				Cloud.config.MIN_SKY_LEVEL);
			this.draw();
		},

		/**
		 * Draw the cloud.
		 */
		draw: function() {
			this.canvasCtx.save();
			var sourceWidth = Cloud.config.WIDTH;
			var sourceHeight = Cloud.config.HEIGHT;

			if (IS_HIDPI) {
				sourceWidth = sourceWidth * 2;
				sourceHeight = sourceHeight * 2;
			}

			this.canvasCtx.drawImage(Runner.imageSprite, this.spritePos.x,
				this.spritePos.y,
				sourceWidth, sourceHeight,
				this.xPos, this.yPos,
				Cloud.config.WIDTH, Cloud.config.HEIGHT);

			this.canvasCtx.restore();
		},

		/**
		 * Update the cloud position.
		 * @param {number} speed
		 */
		update: function(speed) {
			if (!this.remove) {
				this.xPos -= Math.ceil(speed);
				this.draw();

				// Mark as removeable if no longer in the canvas.
				if (!this.isVisible()) {
					this.remove = true;
				}
			}
		},

		/**
		 * Check if the cloud is visible on the stage.
		 * @return {boolean}
		 */
		isVisible: function() {
			return this.xPos + Cloud.config.WIDTH > 0;
		}
	};


	//******************************************************************************

	/**
	 * Nightmode shows a moon and stars on the horizon.
	 */
	function NightMode(canvas, spritePos, containerWidth) {
		this.spritePos = spritePos;
		this.canvas = canvas;
		this.canvasCtx = canvas.getContext('2d');
		this.xPos = containerWidth - 50;
		this.yPos = 30;
		this.currentPhase = 0;
		this.opacity = 0;
		this.containerWidth = containerWidth;
		this.stars = [];
		this.drawStars = false;
		this.placeStars();
	};

	/**
	 * @enum {number}
	 */
	NightMode.config = {
		FADE_SPEED: 0.035,
		HEIGHT: 40,
		MOON_SPEED: 0.25,
		NUM_STARS: 2,
		STAR_SIZE: 9,
		STAR_SPEED: 0.3,
		STAR_MAX_Y: 70,
		WIDTH: 20
	};

	NightMode.phases = [140, 120, 100, 60, 40, 20, 0];

	NightMode.prototype = {
		/**
		 * Update moving moon, changing phases.
		 * @param {boolean} activated Whether night mode is activated.
		 * @param {number} delta
		 */
		update: function(activated, delta) {
			// Moon phase.
			if (activated && this.opacity == 0) {
				this.currentPhase++;

				if (this.currentPhase >= NightMode.phases.length) {
					this.currentPhase = 0;
				}
			}

			// Fade in / out.
			if (activated && (this.opacity < 1 || this.opacity == 0)) {
				this.opacity += NightMode.config.FADE_SPEED;
			} else if (this.opacity > 0) {
				this.opacity -= NightMode.config.FADE_SPEED;
			}

			// Set moon positioning.
			if (this.opacity > 0) {
				this.xPos = this.updateXPos(this.xPos, NightMode.config.MOON_SPEED);

				// Update stars.
				if (this.drawStars) {
					for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
						this.stars[i].x = this.updateXPos(this.stars[i].x,
							NightMode.config.STAR_SPEED);
					}
				}
				this.draw();
			} else {
				this.opacity = 0;
				this.placeStars();
			}
			this.drawStars = true;
		},

		updateXPos: function(currentPos, speed) {
			if (currentPos < -NightMode.config.WIDTH) {
				currentPos = this.containerWidth;
			} else {
				currentPos -= speed;
			}
			return currentPos;
		},

		draw: function() {
			var moonSourceWidth = this.currentPhase == 3 ? NightMode.config.WIDTH * 2 :
				NightMode.config.WIDTH;
			var moonSourceHeight = NightMode.config.HEIGHT;
			var moonSourceX = this.spritePos.x + NightMode.phases[this.currentPhase];
			var moonOutputWidth = moonSourceWidth;
			var starSize = NightMode.config.STAR_SIZE;
			var starSourceX = Runner.spriteDefinition.LDPI.STAR.x;

			if (IS_HIDPI) {
				moonSourceWidth *= 2;
				moonSourceHeight *= 2;
				moonSourceX = this.spritePos.x +
					(NightMode.phases[this.currentPhase] * 2);
				starSize *= 2;
				starSourceX = Runner.spriteDefinition.HDPI.STAR.x;
			}

			this.canvasCtx.save();
			this.canvasCtx.globalAlpha = this.opacity;

			// Stars.
			if (this.drawStars) {
				for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
					this.canvasCtx.drawImage(Runner.imageSprite,
						starSourceX, this.stars[i].sourceY, starSize, starSize,
						Math.round(this.stars[i].x), this.stars[i].y,
						NightMode.config.STAR_SIZE, NightMode.config.STAR_SIZE);
				}
			}

			// Moon.
			this.canvasCtx.drawImage(Runner.imageSprite, moonSourceX,
				this.spritePos.y, moonSourceWidth, moonSourceHeight,
				Math.round(this.xPos), this.yPos,
				moonOutputWidth, NightMode.config.HEIGHT);

			this.canvasCtx.globalAlpha = 1;
			this.canvasCtx.restore();
		},

		// Do star placement.
		placeStars: function() {
			var segmentSize = Math.round(this.containerWidth /
				NightMode.config.NUM_STARS);

			for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
				this.stars[i] = {};
				this.stars[i].x = getRandomNum(segmentSize * i, segmentSize * (i + 1));
				this.stars[i].y = getRandomNum(0, NightMode.config.STAR_MAX_Y);

				if (IS_HIDPI) {
					this.stars[i].sourceY = Runner.spriteDefinition.HDPI.STAR.y +
						NightMode.config.STAR_SIZE * 2 * i;
				} else {
					this.stars[i].sourceY = Runner.spriteDefinition.LDPI.STAR.y +
						NightMode.config.STAR_SIZE * i;
				}
			}
		},

		reset: function() {
			this.currentPhase = 0;
			this.opacity = 0;
			this.update(false);
		}

	};


	//******************************************************************************

	/**
	 * Horizon Line.
	 * Consists of two connecting lines. Randomly assigns a flat / bumpy horizon.
	 * @param {HTMLCanvasElement} canvas
	 * @param {Object} spritePos Horizon position in sprite.
	 * @constructor
	 */
	function HorizonLine(canvas, spritePos) {
		this.spritePos = spritePos;
		this.canvas = canvas;
		this.canvasCtx = canvas.getContext('2d');
		this.sourceDimensions = {};
		this.dimensions = HorizonLine.dimensions;
		this.sourceXPos = [this.spritePos.x, this.spritePos.x +
			this.dimensions.WIDTH
		];
		this.xPos = [];
		this.yPos = 0;
		this.bumpThreshold = 0.5;

		this.setSourceDimensions();
		this.draw();
	};


	/**
	 * Horizon line dimensions.
	 * @enum {number}
	 */
	HorizonLine.dimensions = {
		WIDTH: 600,
		HEIGHT: 12,
		YPOS: 127
	};


	HorizonLine.prototype = {
		/**
		 * Set the source dimensions of the horizon line.
		 */
		setSourceDimensions: function() {

			for (var dimension in HorizonLine.dimensions) {
				if (IS_HIDPI) {
					if (dimension != 'YPOS') {
						this.sourceDimensions[dimension] =
							HorizonLine.dimensions[dimension] * 2;
					}
				} else {
					this.sourceDimensions[dimension] =
						HorizonLine.dimensions[dimension];
				}
				this.dimensions[dimension] = HorizonLine.dimensions[dimension];
			}

			this.xPos = [0, HorizonLine.dimensions.WIDTH];
			this.yPos = HorizonLine.dimensions.YPOS;
		},

		/**
		 * Return the crop x position of a type.
		 */
		getRandomType: function() {
			return Math.random() > this.bumpThreshold ? this.dimensions.WIDTH : 0;
		},

		/**
		 * Draw the horizon line.
		 */
		draw: function() {
			this.canvasCtx.drawImage(Runner.imageSprite, this.sourceXPos[0],
				this.spritePos.y,
				this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT,
				this.xPos[0], this.yPos,
				this.dimensions.WIDTH, this.dimensions.HEIGHT);

			this.canvasCtx.drawImage(Runner.imageSprite, this.sourceXPos[1],
				this.spritePos.y,
				this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT,
				this.xPos[1], this.yPos,
				this.dimensions.WIDTH, this.dimensions.HEIGHT);
		},

		/**
		 * Update the x position of an indivdual piece of the line.
		 * @param {number} pos Line position.
		 * @param {number} increment
		 */
		updateXPos: function(pos, increment) {
			var line1 = pos;
			var line2 = pos == 0 ? 1 : 0;

			this.xPos[line1] -= increment;
			this.xPos[line2] = this.xPos[line1] + this.dimensions.WIDTH;

			if (this.xPos[line1] <= -this.dimensions.WIDTH) {
				this.xPos[line1] += this.dimensions.WIDTH * 2;
				this.xPos[line2] = this.xPos[line1] - this.dimensions.WIDTH;
				this.sourceXPos[line1] = this.getRandomType() + this.spritePos.x;
			}
		},

		/**
		 * Update the horizon line.
		 * @param {number} deltaTime
		 * @param {number} speed
		 */
		update: function(deltaTime, speed) {
			var increment = Math.floor(speed * (FPS / 1000) * deltaTime);

			if (this.xPos[0] <= 0) {
				this.updateXPos(0, increment);
			} else {
				this.updateXPos(1, increment);
			}
			this.draw();
		},

		/**
		 * Reset horizon to the starting position.
		 */
		reset: function() {
			this.xPos[0] = 0;
			this.xPos[1] = HorizonLine.dimensions.WIDTH;
		}
	};


	//******************************************************************************

	/**
	 * Horizon background class.
	 * @param {HTMLCanvasElement} canvas
	 * @param {Object} spritePos Sprite positioning.
	 * @param {Object} dimensions Canvas dimensions.
	 * @param {number} gapCoefficient
	 * @constructor
	 */
	function Horizon(canvas, spritePos, dimensions, gapCoefficient) {
		this.canvas = canvas;
		this.canvasCtx = this.canvas.getContext('2d');
		this.config = Horizon.config;
		this.dimensions = dimensions;
		this.gapCoefficient = gapCoefficient;
		this.obstacles = [];
		this.obstacleHistory = [];
		this.horizonOffsets = [0, 0];
		this.cloudFrequency = this.config.CLOUD_FREQUENCY;
		this.spritePos = spritePos;
		this.nightMode = null;

		// Cloud
		this.clouds = [];
		this.cloudSpeed = this.config.BG_CLOUD_SPEED;

		// Horizon
		this.horizonLine = null;
		this.init();
	};


	/**
	 * Horizon config.
	 * @enum {number}
	 */
	Horizon.config = {
		BG_CLOUD_SPEED: 0.2,
		BUMPY_THRESHOLD: .3,
		CLOUD_FREQUENCY: .5,
		HORIZON_HEIGHT: 16,
		MAX_CLOUDS: 6
	};


	Horizon.prototype = {
		/**
		 * Initialise the horizon. Just add the line and a cloud. No obstacles.
		 */
		init: function() {
			this.addCloud();
			this.horizonLine = new HorizonLine(this.canvas, this.spritePos.HORIZON);
			this.nightMode = new NightMode(this.canvas, this.spritePos.MOON,
				this.dimensions.WIDTH);
		},

		/**
		 * @param {number} deltaTime
		 * @param {number} currentSpeed
		 * @param {boolean} updateObstacles Used as an override to prevent
		 *     the obstacles from being updated / added. This happens in the
		 *     ease in section.
		 * @param {boolean} showNightMode Night mode activated.
		 */
		update: function(deltaTime, currentSpeed, updateObstacles, showNightMode) {
			this.runningTime += deltaTime;
			this.horizonLine.update(deltaTime, currentSpeed);
			this.nightMode.update(showNightMode);
			this.updateClouds(deltaTime, currentSpeed);

			if (updateObstacles) {
				this.updateObstacles(deltaTime, currentSpeed);
			}
		},

		/**
		 * Update the cloud positions.
		 * @param {number} deltaTime
		 * @param {number} currentSpeed
		 */
		updateClouds: function(deltaTime, speed) {
			var cloudSpeed = this.cloudSpeed / 1000 * deltaTime * speed;
			var numClouds = this.clouds.length;

			if (numClouds) {
				for (var i = numClouds - 1; i >= 0; i--) {
					this.clouds[i].update(cloudSpeed);
				}

				var lastCloud = this.clouds[numClouds - 1];

				// Check for adding a new cloud.
				if (numClouds < this.config.MAX_CLOUDS &&
					(this.dimensions.WIDTH - lastCloud.xPos) > lastCloud.cloudGap &&
					this.cloudFrequency > Math.random()) {
					this.addCloud();
				}

				// Remove expired clouds.
				this.clouds = this.clouds.filter(function(obj) {
					return !obj.remove;
				});
			} else {
				this.addCloud();
			}
		},

		/**
		 * Update the obstacle positions.
		 * @param {number} deltaTime
		 * @param {number} currentSpeed
		 */
		updateObstacles: function(deltaTime, currentSpeed) {
			// Obstacles, move to Horizon layer.
			var updatedObstacles = this.obstacles.slice(0);

			for (var i = 0; i < this.obstacles.length; i++) {
				var obstacle = this.obstacles[i];
				obstacle.update(deltaTime, currentSpeed);

				// Clean up existing obstacles.
				if (obstacle.remove) {
					updatedObstacles.shift();
					r.tRex.obstaclesJumped++;
				}
			}
			this.obstacles = updatedObstacles;

			if (this.obstacles.length > 0) {
				var lastObstacle = this.obstacles[this.obstacles.length - 1];

				if (lastObstacle && !lastObstacle.followingObstacleCreated &&
					lastObstacle.isVisible() &&
					(lastObstacle.xPos + lastObstacle.width + lastObstacle.gap) <
					this.dimensions.WIDTH) {
					this.addNewObstacle(currentSpeed);
					lastObstacle.followingObstacleCreated = true;
				}
			} else {
				// Create new obstacles.
				this.addNewObstacle(currentSpeed);
			}
		},

		removeFirstObstacle: function() {
			this.obstacles.shift();
		},

		/**
		 * Add a new obstacle.
		 * @param {number} currentSpeed
		 */
		addNewObstacle: function(currentSpeed) {
			var obstacleTypeIndex = getRandomNum(0, Obstacle.types.length - 1);
			var obstacleType = Obstacle.types[obstacleTypeIndex];

			// Check for multiples of the same type of obstacle.
			// Also check obstacle is available at current speed.
			if (this.duplicateObstacleCheck(obstacleType.type) ||
				currentSpeed < obstacleType.minSpeed) {
				this.addNewObstacle(currentSpeed);
			} else {
				var obstacleSpritePos = this.spritePos[obstacleType.type];

				this.obstacles.push(new Obstacle(this.canvasCtx, obstacleType,
					obstacleSpritePos, this.dimensions,
					this.gapCoefficient, currentSpeed, obstacleType.width));

				this.obstacleHistory.unshift(obstacleType.type);

				if (this.obstacleHistory.length > 1) {
					this.obstacleHistory.splice(Runner.config.MAX_OBSTACLE_DUPLICATION);
				}
			}
		},

		/**
		 * Returns whether the previous two obstacles are the same as the next one.
		 * Maximum duplication is set in config value MAX_OBSTACLE_DUPLICATION.
		 * @return {boolean}
		 */
		duplicateObstacleCheck: function(nextObstacleType) {
			var duplicateCount = 0;

			for (var i = 0; i < this.obstacleHistory.length; i++) {
				duplicateCount = this.obstacleHistory[i] == nextObstacleType ?
					duplicateCount + 1 : 0;
			}
			return duplicateCount >= Runner.config.MAX_OBSTACLE_DUPLICATION;
		},

		/**
		 * Reset the horizon layer.
		 * Remove existing obstacles and reposition the horizon line.
		 */
		reset: function() {
			this.obstacles = [];
			this.horizonLine.reset();
			this.nightMode.reset();
		},

		/**
		 * Update the canvas width and scaling.
		 * @param {number} width Canvas width.
		 * @param {number} height Canvas height.
		 */
		resize: function(width, height) {
			this.canvas.width = width;
			this.canvas.height = height;
		},

		/**
		 * Add a new cloud to the horizon.
		 */
		addCloud: function() {
			this.clouds.push(new Cloud(this.canvas, this.spritePos.CLOUD,
				this.dimensions.WIDTH));
		}
	};



	//=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=
	//============================================================
	//============================================================
	//=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=
	// underscore
	//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	(function() {
		function n(n) {
			function t(t, r, e, u, i, o) {
				for (; i >= 0 && o > i; i += n) {
					var a = u ? u[i] : i;
					e = r(e, t[a], a, t)
				}
				return e
			}
			return function(r, e, u, i) {
				e = b(e, i, 4);
				var o = !k(r) && m.keys(r),
					a = (o || r).length,
					c = n > 0 ? 0 : a - 1;
				return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a)
			}
		}

		function t(n) {
			return function(t, r, e) {
				r = x(r, e);
				for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
					if (r(t[i], i, t)) return i;
				return -1
			}
		}

		function r(n, t, r) {
			return function(e, u, i) {
				var o = 0,
					a = O(e);
				if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
				else if (r && i && a) return i = r(e, u), e[i] === u ? i : -1;
				if (u !== u) return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;
				for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)
					if (e[i] === u) return i;
				return -1
			}
		}

		function e(n, t) {
			var r = I.length,
				e = n.constructor,
				u = m.isFunction(e) && e.prototype || a,
				i = "constructor";
			for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;) i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
		}
		var u = this,
			i = u._,
			o = Array.prototype,
			a = Object.prototype,
			c = Function.prototype,
			f = o.push,
			l = o.slice,
			s = a.toString,
			p = a.hasOwnProperty,
			h = Array.isArray,
			v = Object.keys,
			g = c.bind,
			y = Object.create,
			d = function() {},
			m = function(n) {
				return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
			};
		"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";
		var b = function(n, t, r) {
				if (t === void 0) return n;
				switch (null == r ? 3 : r) {
					case 1:
						return function(r) {
							return n.call(t, r)
						};
					case 2:
						return function(r, e) {
							return n.call(t, r, e)
						};
					case 3:
						return function(r, e, u) {
							return n.call(t, r, e, u)
						};
					case 4:
						return function(r, e, u, i) {
							return n.call(t, r, e, u, i)
						}
				}
				return function() {
					return n.apply(t, arguments)
				}
			},
			x = function(n, t, r) {
				return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
			};
		m.iteratee = function(n, t) {
			return x(n, t, 1 / 0)
		};
		var _ = function(n, t) {
				return function(r) {
					var e = arguments.length;
					if (2 > e || null == r) return r;
					for (var u = 1; e > u; u++)
						for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
							var f = o[c];
							t && r[f] !== void 0 || (r[f] = i[f])
						}
					return r
				}
			},
			j = function(n) {
				if (!m.isObject(n)) return {};
				if (y) return y(n);
				d.prototype = n;
				var t = new d;
				return d.prototype = null, t
			},
			w = function(n) {
				return function(t) {
					return null == t ? void 0 : t[n]
				}
			},
			A = Math.pow(2, 53) - 1,
			O = w("length"),
			k = function(n) {
				var t = O(n);
				return "number" == typeof t && t >= 0 && A >= t
			};
		m.each = m.forEach = function(n, t, r) {
			t = b(t, r);
			var e, u;
			if (k(n))
				for (e = 0, u = n.length; u > e; e++) t(n[e], e, n);
			else {
				var i = m.keys(n);
				for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n)
			}
			return n
		}, m.map = m.collect = function(n, t, r) {
			t = x(t, r);
			for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
				var a = e ? e[o] : o;
				i[o] = t(n[a], a, n)
			}
			return i
		}, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function(n, t, r) {
			var e;
			return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0
		}, m.filter = m.select = function(n, t, r) {
			var e = [];
			return t = x(t, r), m.each(n, function(n, r, u) {
				t(n, r, u) && e.push(n)
			}), e
		}, m.reject = function(n, t, r) {
			return m.filter(n, m.negate(x(t)), r)
		}, m.every = m.all = function(n, t, r) {
			t = x(t, r);
			for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
				var o = e ? e[i] : i;
				if (!t(n[o], o, n)) return !1
			}
			return !0
		}, m.some = m.any = function(n, t, r) {
			t = x(t, r);
			for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
				var o = e ? e[i] : i;
				if (t(n[o], o, n)) return !0
			}
			return !1
		}, m.contains = m.includes = m.include = function(n, t, r, e) {
			return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0
		}, m.invoke = function(n, t) {
			var r = l.call(arguments, 2),
				e = m.isFunction(t);
			return m.map(n, function(n) {
				var u = e ? t : n[t];
				return null == u ? u : u.apply(n, r)
			})
		}, m.pluck = function(n, t) {
			return m.map(n, m.property(t))
		}, m.where = function(n, t) {
			return m.filter(n, m.matcher(t))
		}, m.findWhere = function(n, t) {
			return m.find(n, m.matcher(t))
		}, m.max = function(n, t, r) {
			var e, u, i = -1 / 0,
				o = -1 / 0;
			if (null == t && null != n) {
				n = k(n) ? n : m.values(n);
				for (var a = 0, c = n.length; c > a; a++) e = n[a], e > i && (i = e)
			} else t = x(t, r), m.each(n, function(n, r, e) {
				u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
			});
			return i
		}, m.min = function(n, t, r) {
			var e, u, i = 1 / 0,
				o = 1 / 0;
			if (null == t && null != n) {
				n = k(n) ? n : m.values(n);
				for (var a = 0, c = n.length; c > a; a++) e = n[a], i > e && (i = e)
			} else t = x(t, r), m.each(n, function(n, r, e) {
				u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u)
			});
			return i
		}, m.shuffle = function(n) {
			for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
			return u
		}, m.sample = function(n, t, r) {
			return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
		}, m.sortBy = function(n, t, r) {
			return t = x(t, r), m.pluck(m.map(n, function(n, r, e) {
				return {
					value: n,
					index: r,
					criteria: t(n, r, e)
				}
			}).sort(function(n, t) {
				var r = n.criteria,
					e = t.criteria;
				if (r !== e) {
					if (r > e || r === void 0) return 1;
					if (e > r || e === void 0) return -1
				}
				return n.index - t.index
			}), "value")
		};
		var F = function(n) {
			return function(t, r, e) {
				var u = {};
				return r = x(r, e), m.each(t, function(e, i) {
					var o = r(e, i, t);
					n(u, e, o)
				}), u
			}
		};
		m.groupBy = F(function(n, t, r) {
			m.has(n, r) ? n[r].push(t) : n[r] = [t]
		}), m.indexBy = F(function(n, t, r) {
			n[r] = t
		}), m.countBy = F(function(n, t, r) {
			m.has(n, r) ? n[r]++ : n[r] = 1
		}), m.toArray = function(n) {
			return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
		}, m.size = function(n) {
			return null == n ? 0 : k(n) ? n.length : m.keys(n).length
		}, m.partition = function(n, t, r) {
			t = x(t, r);
			var e = [],
				u = [];
			return m.each(n, function(n, r, i) {
				(t(n, r, i) ? e : u).push(n)
			}), [e, u]
		}, m.first = m.head = m.take = function(n, t, r) {
			return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
		}, m.initial = function(n, t, r) {
			return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
		}, m.last = function(n, t, r) {
			return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
		}, m.rest = m.tail = m.drop = function(n, t, r) {
			return l.call(n, null == t || r ? 1 : t)
		}, m.compact = function(n) {
			return m.filter(n, m.identity)
		};
		var S = function(n, t, r, e) {
			for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
				var c = n[o];
				if (k(c) && (m.isArray(c) || m.isArguments(c))) {
					t || (c = S(c, t, r));
					var f = 0,
						l = c.length;
					for (u.length += l; l > f;) u[i++] = c[f++]
				} else r || (u[i++] = c)
			}
			return u
		};
		m.flatten = function(n, t) {
			return S(n, t, !1)
		}, m.without = function(n) {
			return m.difference(n, l.call(arguments, 1))
		}, m.uniq = m.unique = function(n, t, r, e) {
			m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e));
			for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
				var c = n[o],
					f = r ? r(c, o, n) : c;
				t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c)
			}
			return u
		}, m.union = function() {
			return m.uniq(S(arguments, !0, !0))
		}, m.intersection = function(n) {
			for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
				var i = n[e];
				if (!m.contains(t, i)) {
					for (var o = 1; r > o && m.contains(arguments[o], i); o++);
					o === r && t.push(i)
				}
			}
			return t
		}, m.difference = function(n) {
			var t = S(arguments, !0, !0, 1);
			return m.filter(n, function(n) {
				return !m.contains(t, n)
			})
		}, m.zip = function() {
			return m.unzip(arguments)
		}, m.unzip = function(n) {
			for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++) r[e] = m.pluck(n, e);
			return r
		}, m.object = function(n, t) {
			for (var r = {}, e = 0, u = O(n); u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
			return r
		}, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function(n, t, r, e) {
			r = x(r, e, 1);
			for (var u = r(t), i = 0, o = O(n); o > i;) {
				var a = Math.floor((i + o) / 2);
				r(n[a]) < u ? i = a + 1 : o = a
			}
			return i
		}, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function(n, t, r) {
			null == t && (t = n || 0, n = 0), r = r || 1;
			for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n;
			return u
		};
		var E = function(n, t, r, e, u) {
			if (!(e instanceof t)) return n.apply(r, u);
			var i = j(n.prototype),
				o = n.apply(i, u);
			return m.isObject(o) ? o : i
		};
		m.bind = function(n, t) {
			if (g && n.bind === g) return g.apply(n, l.call(arguments, 1));
			if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
			var r = l.call(arguments, 2),
				e = function() {
					return E(n, e, t, this, r.concat(l.call(arguments)))
				};
			return e
		}, m.partial = function(n) {
			var t = l.call(arguments, 1),
				r = function() {
					for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++) i[o] = t[o] === m ? arguments[e++] : t[o];
					for (; e < arguments.length;) i.push(arguments[e++]);
					return E(n, r, this, this, i)
				};
			return r
		}, m.bindAll = function(n) {
			var t, r, e = arguments.length;
			if (1 >= e) throw new Error("bindAll must be passed function names");
			for (t = 1; e > t; t++) r = arguments[t], n[r] = m.bind(n[r], n);
			return n
		}, m.memoize = function(n, t) {
			var r = function(e) {
				var u = r.cache,
					i = "" + (t ? t.apply(this, arguments) : e);
				return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
			};
			return r.cache = {}, r
		}, m.delay = function(n, t) {
			var r = l.call(arguments, 2);
			return setTimeout(function() {
				return n.apply(null, r)
			}, t)
		}, m.defer = m.partial(m.delay, m, 1), m.throttle = function(n, t, r) {
			var e, u, i, o = null,
				a = 0;
			r || (r = {});
			var c = function() {
				a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
			};
			return function() {
				var f = m.now();
				a || r.leading !== !1 || (a = f);
				var l = t - (f - a);
				return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i
			}
		}, m.debounce = function(n, t, r) {
			var e, u, i, o, a, c = function() {
				var f = m.now() - o;
				t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
			};
			return function() {
				i = this, u = arguments, o = m.now();
				var f = r && !e;
				return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a
			}
		}, m.wrap = function(n, t) {
			return m.partial(t, n)
		}, m.negate = function(n) {
			return function() {
				return !n.apply(this, arguments)
			}
		}, m.compose = function() {
			var n = arguments,
				t = n.length - 1;
			return function() {
				for (var r = t, e = n[t].apply(this, arguments); r--;) e = n[r].call(this, e);
				return e
			}
		}, m.after = function(n, t) {
			return function() {
				return --n < 1 ? t.apply(this, arguments) : void 0
			}
		}, m.before = function(n, t) {
			var r;
			return function() {
				return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r
			}
		}, m.once = m.partial(m.before, 2);
		var M = !{
				toString: null
			}.propertyIsEnumerable("toString"),
			I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
		m.keys = function(n) {
			if (!m.isObject(n)) return [];
			if (v) return v(n);
			var t = [];
			for (var r in n) m.has(n, r) && t.push(r);
			return M && e(n, t), t
		}, m.allKeys = function(n) {
			if (!m.isObject(n)) return [];
			var t = [];
			for (var r in n) t.push(r);
			return M && e(n, t), t
		}, m.values = function(n) {
			for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
			return e
		}, m.mapObject = function(n, t, r) {
			t = x(t, r);
			for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++) e = u[a], o[e] = t(n[e], e, n);
			return o
		}, m.pairs = function(n) {
			for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
			return e
		}, m.invert = function(n) {
			for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
			return t
		}, m.functions = m.methods = function(n) {
			var t = [];
			for (var r in n) m.isFunction(n[r]) && t.push(r);
			return t.sort()
		}, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function(n, t, r) {
			t = x(t, r);
			for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
				if (e = u[i], t(n[e], e, n)) return e
		}, m.pick = function(n, t, r) {
			var e, u, i = {},
				o = n;
			if (null == o) return i;
			m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function(n, t, r) {
				return t in r
			}, o = Object(o));
			for (var a = 0, c = u.length; c > a; a++) {
				var f = u[a],
					l = o[f];
				e(l, f, o) && (i[f] = l)
			}
			return i
		}, m.omit = function(n, t, r) {
			if (m.isFunction(t)) t = m.negate(t);
			else {
				var e = m.map(S(arguments, !1, !1, 1), String);
				t = function(n, t) {
					return !m.contains(e, t)
				}
			}
			return m.pick(n, t, r)
		}, m.defaults = _(m.allKeys, !0), m.create = function(n, t) {
			var r = j(n);
			return t && m.extendOwn(r, t), r
		}, m.clone = function(n) {
			return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
		}, m.tap = function(n, t) {
			return t(n), n
		}, m.isMatch = function(n, t) {
			var r = m.keys(t),
				e = r.length;
			if (null == n) return !e;
			for (var u = Object(n), i = 0; e > i; i++) {
				var o = r[i];
				if (t[o] !== u[o] || !(o in u)) return !1
			}
			return !0
		};
		var N = function(n, t, r, e) {
			if (n === t) return 0 !== n || 1 / n === 1 / t;
			if (null == n || null == t) return n === t;
			n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
			var u = s.call(n);
			if (u !== s.call(t)) return !1;
			switch (u) {
				case "[object RegExp]":
				case "[object String]":
					return "" + n == "" + t;
				case "[object Number]":
					return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
				case "[object Date]":
				case "[object Boolean]":
					return +n === +t
			}
			var i = "[object Array]" === u;
			if (!i) {
				if ("object" != typeof n || "object" != typeof t) return !1;
				var o = n.constructor,
					a = t.constructor;
				if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1
			}
			r = r || [], e = e || [];
			for (var c = r.length; c--;)
				if (r[c] === n) return e[c] === t;
			if (r.push(n), e.push(t), i) {
				if (c = n.length, c !== t.length) return !1;
				for (; c--;)
					if (!N(n[c], t[c], r, e)) return !1
			} else {
				var f, l = m.keys(n);
				if (c = l.length, m.keys(t).length !== c) return !1;
				for (; c--;)
					if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e)) return !1
			}
			return r.pop(), e.pop(), !0
		};
		m.isEqual = function(n, t) {
			return N(n, t)
		}, m.isEmpty = function(n) {
			return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length
		}, m.isElement = function(n) {
			return !(!n || 1 !== n.nodeType)
		}, m.isArray = h || function(n) {
			return "[object Array]" === s.call(n)
		}, m.isObject = function(n) {
			var t = typeof n;
			return "function" === t || "object" === t && !!n
		}, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
			m["is" + n] = function(t) {
				return s.call(t) === "[object " + n + "]"
			}
		}), m.isArguments(arguments) || (m.isArguments = function(n) {
			return m.has(n, "callee")
		}), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
			return "function" == typeof n || !1
		}), m.isFinite = function(n) {
			return isFinite(n) && !isNaN(parseFloat(n))
		}, m.isNaN = function(n) {
			return m.isNumber(n) && n !== +n
		}, m.isBoolean = function(n) {
			return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
		}, m.isNull = function(n) {
			return null === n
		}, m.isUndefined = function(n) {
			return n === void 0
		}, m.has = function(n, t) {
			return null != n && p.call(n, t)
		}, m.noConflict = function() {
			return u._ = i, this
		}, m.identity = function(n) {
			return n
		}, m.constant = function(n) {
			return function() {
				return n
			}
		}, m.noop = function() {}, m.property = w, m.propertyOf = function(n) {
			return null == n ? function() {} : function(t) {
				return n[t]
			}
		}, m.matcher = m.matches = function(n) {
			return n = m.extendOwn({}, n),
				function(t) {
					return m.isMatch(t, n)
				}
		}, m.times = function(n, t, r) {
			var e = Array(Math.max(0, n));
			t = b(t, r, 1);
			for (var u = 0; n > u; u++) e[u] = t(u);
			return e
		}, m.random = function(n, t) {
			return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
		}, m.now = Date.now || function() {
			return (new Date).getTime()
		};
		var B = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;",
				"`": "&#x60;"
			},
			T = m.invert(B),
			R = function(n) {
				var t = function(t) {
						return n[t]
					},
					r = "(?:" + m.keys(n).join("|") + ")",
					e = RegExp(r),
					u = RegExp(r, "g");
				return function(n) {
					return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
				}
			};
		m.escape = R(B), m.unescape = R(T), m.result = function(n, t, r) {
			var e = null == n ? void 0 : n[t];
			return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e
		};
		var q = 0;
		m.uniqueId = function(n) {
			var t = ++q + "";
			return n ? n + t : t
		}, m.templateSettings = {
			evaluate: /<%([\s\S]+?)%>/g,
			interpolate: /<%=([\s\S]+?)%>/g,
			escape: /<%-([\s\S]+?)%>/g
		};
		var K = /(.)^/,
			z = {
				"'": "'",
				"\\": "\\",
				"\r": "r",
				"\n": "n",
				"\u2028": "u2028",
				"\u2029": "u2029"
			},
			D = /\\|'|\r|\n|\u2028|\u2029/g,
			L = function(n) {
				return "\\" + z[n]
			};
		m.template = function(n, t, r) {
			!t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
			var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
				u = 0,
				i = "__p+='";
			n.replace(e, function(t, r, e, o, a) {
				return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
			}), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
			try {
				var o = new Function(t.variable || "obj", "_", i)
			} catch (a) {
				throw a.source = i, a
			}
			var c = function(n) {
					return o.call(this, n, m)
				},
				f = t.variable || "obj";
			return c.source = "function(" + f + "){\n" + i + "}", c
		}, m.chain = function(n) {
			var t = m(n);
			return t._chain = !0, t
		};
		var P = function(n, t) {
			return n._chain ? m(t).chain() : t
		};
		m.mixin = function(n) {
			m.each(m.functions(n), function(t) {
				var r = m[t] = n[t];
				m.prototype[t] = function() {
					var n = [this._wrapped];
					return f.apply(n, arguments), P(this, r.apply(m, n))
				}
			})
		}, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
			var t = o[n];
			m.prototype[n] = function() {
				var r = this._wrapped;
				return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r)
			}
		}), m.each(["concat", "join", "slice"], function(n) {
			var t = o[n];
			m.prototype[n] = function() {
				return P(this, t.apply(this._wrapped, arguments))
			}
		}), m.prototype.value = function() {
			return this._wrapped
		}, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
			return "" + this._wrapped
		}, "function" == typeof define && define.amd && define("underscore", [], function() {
			return m
		})
	}).call(window);

	/**
	 * @license
	 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
	 */
	;
	(function() {
		function n(n, t) {
			return n.set(t[0], t[1]), n
		}

		function t(n, t) {
			return n.add(t), n
		}

		function r(n, t, r) {
			switch (r.length) {
				case 0:
					return n.call(t);
				case 1:
					return n.call(t, r[0]);
				case 2:
					return n.call(t, r[0], r[1]);
				case 3:
					return n.call(t, r[0], r[1], r[2])
			}
			return n.apply(t, r)
		}

		function e(n, t, r, e) {
			for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) {
				var o = n[u];
				t(e, o, r(o), n)
			}
			return e
		}

		function u(n, t) {
			for (var r = -1, e = null == n ? 0 : n.length; ++r < e && false !== t(n[r], r, n););
			return n
		}

		function i(n, t) {
			for (var r = null == n ? 0 : n.length; r-- && false !== t(n[r], r, n););
			return n
		}

		function o(n, t) {
			for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)
				if (!t(n[r], r, n)) return false;
			return true
		}

		function f(n, t) {
			for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) {
				var o = n[r];
				t(o, r, n) && (i[u++] = o)
			}
			return i
		}

		function c(n, t) {
			return !(null == n || !n.length) && -1 < d(n, t, 0)
		}

		function a(n, t, r) {
			for (var e = -1, u = null == n ? 0 : n.length; ++e < u;)
				if (r(t, n[e])) return true;
			return false
		}

		function l(n, t) {
			for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;) u[r] = t(n[r], r, n);
			return u
		}

		function s(n, t) {
			for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];
			return n
		}

		function h(n, t, r, e) {
			var u = -1,
				i = null == n ? 0 : n.length;
			for (e && i && (r = n[++u]); ++u < i;) r = t(r, n[u], u, n);
			return r
		}

		function p(n, t, r, e) {
			var u = null == n ? 0 : n.length;
			for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);
			return r
		}

		function _(n, t) {
			for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)
				if (t(n[r], r, n)) return true;
			return false
		}

		function v(n, t, r) {
			var e;
			return r(n, function(n, r, u) {
				if (t(n, r, u)) return e = r, false
			}), e
		}

		function g(n, t, r, e) {
			var u = n.length;
			for (r += e ? 1 : -1; e ? r-- : ++r < u;)
				if (t(n[r], r, n)) return r;
			return -1
		}

		function d(n, t, r) {
			if (t === t) n: {
				--r;
				for (var e = n.length; ++r < e;)
					if (n[r] === t) {
						n = r;
						break n
					}
				n = -1
			}
			else n = g(n, b, r);
			return n
		}

		function y(n, t, r, e) {
			--r;
			for (var u = n.length; ++r < u;)
				if (e(n[r], t)) return r;
			return -1
		}

		function b(n) {
			return n !== n
		}

		function x(n, t) {
			var r = null == n ? 0 : n.length;
			return r ? k(n, t) / r : P
		}

		function j(n) {
			return function(t) {
				return null == t ? F : t[n]
			}
		}

		function w(n) {
			return function(t) {
				return null == n ? F : n[t]
			}
		}

		function m(n, t, r, e, u) {
			return u(n, function(n, u, i) {
				r = e ? (e = false, n) : t(r, n, u, i)
			}), r
		}

		function A(n, t) {
			var r = n.length;
			for (n.sort(t); r--;) n[r] = n[r].c;
			return n
		}

		function k(n, t) {
			for (var r, e = -1, u = n.length; ++e < u;) {
				var i = t(n[e]);
				i !== F && (r = r === F ? i : r + i)
			}
			return r
		}

		function E(n, t) {
			for (var r = -1, e = Array(n); ++r < n;) e[r] = t(r);
			return e
		}

		function O(n, t) {
			return l(t, function(t) {
				return [t, n[t]]
			})
		}

		function S(n) {
			return function(t) {
				return n(t)
			}
		}

		function I(n, t) {
			return l(t, function(t) {
				return n[t]
			})
		}

		function R(n, t) {
			return n.has(t)
		}

		function z(n, t) {
			for (var r = -1, e = n.length; ++r < e && -1 < d(t, n[r], 0););
			return r
		}

		function W(n, t) {
			for (var r = n.length; r-- && -1 < d(t, n[r], 0););
			return r
		}

		function B(n) {
			return "\\" + Tn[n]
		}

		function L(n) {
			var t = -1,
				r = Array(n.size);
			return n.forEach(function(n, e) {
				r[++t] = [e, n]
			}), r
		}

		function U(n, t) {
			return function(r) {
				return n(t(r))
			}
		}

		function C(n, t) {
			for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
				var o = n[r];
				o !== t && "__lodash_placeholder__" !== o || (n[r] = "__lodash_placeholder__", i[u++] = r)
			}
			return i
		}

		function D(n) {
			var t = -1,
				r = Array(n.size);
			return n.forEach(function(n) {
				r[++t] = n
			}), r
		}

		function M(n) {
			var t = -1,
				r = Array(n.size);
			return n.forEach(function(n) {
				r[++t] = [n, n]
			}), r
		}

		function T(n) {
			if (Bn.test(n)) {
				for (var t = zn.lastIndex = 0; zn.test(n);) ++t;
				n = t
			} else n = tt(n);
			return n
		}

		function $(n) {
			return Bn.test(n) ? n.match(zn) || [] : n.split("")
		}
		var F, N = 1 / 0,
			P = NaN,
			Z = [
				["ary", 128],
				["bind", 1],
				["bindKey", 2],
				["curry", 8],
				["curryRight", 16],
				["flip", 512],
				["partial", 32],
				["partialRight", 64],
				["rearg", 256]
			],
			q = /\b__p\+='';/g,
			V = /\b(__p\+=)''\+/g,
			K = /(__e\(.*?\)|\b__t\))\+'';/g,
			G = /&(?:amp|lt|gt|quot|#39);/g,
			H = /[&<>"']/g,
			J = RegExp(G.source),
			Y = RegExp(H.source),
			Q = /<%-([\s\S]+?)%>/g,
			X = /<%([\s\S]+?)%>/g,
			nn = /<%=([\s\S]+?)%>/g,
			tn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			rn = /^\w*$/,
			en = /^\./,
			un = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			on = /[\\^$.*+?()[\]{}|]/g,
			fn = RegExp(on.source),
			cn = /^\s+|\s+$/g,
			an = /^\s+/,
			ln = /\s+$/,
			sn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
			hn = /\{\n\/\* \[wrapped with (.+)\] \*/,
			pn = /,? & /,
			_n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
			vn = /\\(\\)?/g,
			gn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
			dn = /\w*$/,
			yn = /^[-+]0x[0-9a-f]+$/i,
			bn = /^0b[01]+$/i,
			xn = /^\[object .+?Constructor\]$/,
			jn = /^0o[0-7]+$/i,
			wn = /^(?:0|[1-9]\d*)$/,
			mn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
			An = /($^)/,
			kn = /['\n\r\u2028\u2029\\]/g,
			En = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",
			On = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + En,
			Sn = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
			In = RegExp("['\u2019]", "g"),
			Rn = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
			zn = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Sn + En, "g"),
			Wn = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)|\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)|\\d+", On].join("|"), "g"),
			Bn = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
			Ln = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
			Un = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),
			Cn = {};
		Cn["[object Float32Array]"] = Cn["[object Float64Array]"] = Cn["[object Int8Array]"] = Cn["[object Int16Array]"] = Cn["[object Int32Array]"] = Cn["[object Uint8Array]"] = Cn["[object Uint8ClampedArray]"] = Cn["[object Uint16Array]"] = Cn["[object Uint32Array]"] = true, Cn["[object Arguments]"] = Cn["[object Array]"] = Cn["[object ArrayBuffer]"] = Cn["[object Boolean]"] = Cn["[object DataView]"] = Cn["[object Date]"] = Cn["[object Error]"] = Cn["[object Function]"] = Cn["[object Map]"] = Cn["[object Number]"] = Cn["[object Object]"] = Cn["[object RegExp]"] = Cn["[object Set]"] = Cn["[object String]"] = Cn["[object WeakMap]"] = false;
		var Dn = {};
		Dn["[object Arguments]"] = Dn["[object Array]"] = Dn["[object ArrayBuffer]"] = Dn["[object DataView]"] = Dn["[object Boolean]"] = Dn["[object Date]"] = Dn["[object Float32Array]"] = Dn["[object Float64Array]"] = Dn["[object Int8Array]"] = Dn["[object Int16Array]"] = Dn["[object Int32Array]"] = Dn["[object Map]"] = Dn["[object Number]"] = Dn["[object Object]"] = Dn["[object RegExp]"] = Dn["[object Set]"] = Dn["[object String]"] = Dn["[object Symbol]"] = Dn["[object Uint8Array]"] = Dn["[object Uint8ClampedArray]"] = Dn["[object Uint16Array]"] = Dn["[object Uint32Array]"] = true,
			Dn["[object Error]"] = Dn["[object Function]"] = Dn["[object WeakMap]"] = false;
		var Mn, Tn = {
				"\\": "\\",
				"'": "'",
				"\n": "n",
				"\r": "r",
				"\u2028": "u2028",
				"\u2029": "u2029"
			},
			$n = parseFloat,
			Fn = parseInt,
			Nn = typeof global == "object" && global && global.Object === Object && global,
			Pn = typeof self == "object" && self && self.Object === Object && self,
			Zn = Nn || Pn || Function("return this")(),
			qn = typeof exports == "object" && exports && !exports.nodeType && exports,
			Vn = qn && typeof module == "object" && module && !module.nodeType && module,
			Kn = Vn && Vn.exports === qn,
			Gn = Kn && Nn.process;
		n: {
			try {
				Mn = Gn && Gn.binding && Gn.binding("util");
				break n
			} catch (n) {}
			Mn = void 0
		}
		var Hn = Mn && Mn.isArrayBuffer,
			Jn = Mn && Mn.isDate,
			Yn = Mn && Mn.isMap,
			Qn = Mn && Mn.isRegExp,
			Xn = Mn && Mn.isSet,
			nt = Mn && Mn.isTypedArray,
			tt = j("length"),
			rt = w({
				"\xc0": "A",
				"\xc1": "A",
				"\xc2": "A",
				"\xc3": "A",
				"\xc4": "A",
				"\xc5": "A",
				"\xe0": "a",
				"\xe1": "a",
				"\xe2": "a",
				"\xe3": "a",
				"\xe4": "a",
				"\xe5": "a",
				"\xc7": "C",
				"\xe7": "c",
				"\xd0": "D",
				"\xf0": "d",
				"\xc8": "E",
				"\xc9": "E",
				"\xca": "E",
				"\xcb": "E",
				"\xe8": "e",
				"\xe9": "e",
				"\xea": "e",
				"\xeb": "e",
				"\xcc": "I",
				"\xcd": "I",
				"\xce": "I",
				"\xcf": "I",
				"\xec": "i",
				"\xed": "i",
				"\xee": "i",
				"\xef": "i",
				"\xd1": "N",
				"\xf1": "n",
				"\xd2": "O",
				"\xd3": "O",
				"\xd4": "O",
				"\xd5": "O",
				"\xd6": "O",
				"\xd8": "O",
				"\xf2": "o",
				"\xf3": "o",
				"\xf4": "o",
				"\xf5": "o",
				"\xf6": "o",
				"\xf8": "o",
				"\xd9": "U",
				"\xda": "U",
				"\xdb": "U",
				"\xdc": "U",
				"\xf9": "u",
				"\xfa": "u",
				"\xfb": "u",
				"\xfc": "u",
				"\xdd": "Y",
				"\xfd": "y",
				"\xff": "y",
				"\xc6": "Ae",
				"\xe6": "ae",
				"\xde": "Th",
				"\xfe": "th",
				"\xdf": "ss",
				"\u0100": "A",
				"\u0102": "A",
				"\u0104": "A",
				"\u0101": "a",
				"\u0103": "a",
				"\u0105": "a",
				"\u0106": "C",
				"\u0108": "C",
				"\u010a": "C",
				"\u010c": "C",
				"\u0107": "c",
				"\u0109": "c",
				"\u010b": "c",
				"\u010d": "c",
				"\u010e": "D",
				"\u0110": "D",
				"\u010f": "d",
				"\u0111": "d",
				"\u0112": "E",
				"\u0114": "E",
				"\u0116": "E",
				"\u0118": "E",
				"\u011a": "E",
				"\u0113": "e",
				"\u0115": "e",
				"\u0117": "e",
				"\u0119": "e",
				"\u011b": "e",
				"\u011c": "G",
				"\u011e": "G",
				"\u0120": "G",
				"\u0122": "G",
				"\u011d": "g",
				"\u011f": "g",
				"\u0121": "g",
				"\u0123": "g",
				"\u0124": "H",
				"\u0126": "H",
				"\u0125": "h",
				"\u0127": "h",
				"\u0128": "I",
				"\u012a": "I",
				"\u012c": "I",
				"\u012e": "I",
				"\u0130": "I",
				"\u0129": "i",
				"\u012b": "i",
				"\u012d": "i",
				"\u012f": "i",
				"\u0131": "i",
				"\u0134": "J",
				"\u0135": "j",
				"\u0136": "K",
				"\u0137": "k",
				"\u0138": "k",
				"\u0139": "L",
				"\u013b": "L",
				"\u013d": "L",
				"\u013f": "L",
				"\u0141": "L",
				"\u013a": "l",
				"\u013c": "l",
				"\u013e": "l",
				"\u0140": "l",
				"\u0142": "l",
				"\u0143": "N",
				"\u0145": "N",
				"\u0147": "N",
				"\u014a": "N",
				"\u0144": "n",
				"\u0146": "n",
				"\u0148": "n",
				"\u014b": "n",
				"\u014c": "O",
				"\u014e": "O",
				"\u0150": "O",
				"\u014d": "o",
				"\u014f": "o",
				"\u0151": "o",
				"\u0154": "R",
				"\u0156": "R",
				"\u0158": "R",
				"\u0155": "r",
				"\u0157": "r",
				"\u0159": "r",
				"\u015a": "S",
				"\u015c": "S",
				"\u015e": "S",
				"\u0160": "S",
				"\u015b": "s",
				"\u015d": "s",
				"\u015f": "s",
				"\u0161": "s",
				"\u0162": "T",
				"\u0164": "T",
				"\u0166": "T",
				"\u0163": "t",
				"\u0165": "t",
				"\u0167": "t",
				"\u0168": "U",
				"\u016a": "U",
				"\u016c": "U",
				"\u016e": "U",
				"\u0170": "U",
				"\u0172": "U",
				"\u0169": "u",
				"\u016b": "u",
				"\u016d": "u",
				"\u016f": "u",
				"\u0171": "u",
				"\u0173": "u",
				"\u0174": "W",
				"\u0175": "w",
				"\u0176": "Y",
				"\u0177": "y",
				"\u0178": "Y",
				"\u0179": "Z",
				"\u017b": "Z",
				"\u017d": "Z",
				"\u017a": "z",
				"\u017c": "z",
				"\u017e": "z",
				"\u0132": "IJ",
				"\u0133": "ij",
				"\u0152": "Oe",
				"\u0153": "oe",
				"\u0149": "'n",
				"\u017f": "s"
			}),
			et = w({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			}),
			ut = w({
				"&amp;": "&",
				"&lt;": "<",
				"&gt;": ">",
				"&quot;": '"',
				"&#39;": "'"
			}),
			it = function w(En) {
				function On(n) {
					if (xu(n) && !af(n) && !(n instanceof Mn)) {
						if (n instanceof zn) return n;
						if (ci.call(n, "__wrapped__")) return Pe(n)
					}
					return new zn(n)
				}

				function Sn() {}

				function zn(n, t) {
					this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = F
				}

				function Mn(n) {
					this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1,
						this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
				}

				function Tn(n) {
					var t = -1,
						r = null == n ? 0 : n.length;
					for (this.clear(); ++t < r;) {
						var e = n[t];
						this.set(e[0], e[1])
					}
				}

				function Nn(n) {
					var t = -1,
						r = null == n ? 0 : n.length;
					for (this.clear(); ++t < r;) {
						var e = n[t];
						this.set(e[0], e[1])
					}
				}

				function Pn(n) {
					var t = -1,
						r = null == n ? 0 : n.length;
					for (this.clear(); ++t < r;) {
						var e = n[t];
						this.set(e[0], e[1])
					}
				}

				function qn(n) {
					var t = -1,
						r = null == n ? 0 : n.length;
					for (this.__data__ = new Pn; ++t < r;) this.add(n[t])
				}

				function Vn(n) {
					this.size = (this.__data__ = new Nn(n)).size
				}

				function Gn(n, t) {
					var r, e = af(n),
						u = !e && cf(n),
						i = !e && !u && sf(n),
						o = !e && !u && !i && gf(n),
						u = (e = e || u || i || o) ? E(n.length, ri) : [],
						f = u.length;
					for (r in n) !t && !ci.call(n, r) || e && ("length" == r || i && ("offset" == r || "parent" == r) || o && ("buffer" == r || "byteLength" == r || "byteOffset" == r) || Re(r, f)) || u.push(r);
					return u
				}

				function tt(n) {
					var t = n.length;
					return t ? n[cr(0, t - 1)] : F
				}

				function ot(n, t) {
					return Te(Mr(n), gt(t, 0, n.length))
				}

				function ft(n) {
					return Te(Mr(n))
				}

				function ct(n, t, r) {
					(r === F || hu(n[t], r)) && (r !== F || t in n) || _t(n, t, r);
				}

				function at(n, t, r) {
					var e = n[t];
					ci.call(n, t) && hu(e, r) && (r !== F || t in n) || _t(n, t, r)
				}

				function lt(n, t) {
					for (var r = n.length; r--;)
						if (hu(n[r][0], t)) return r;
					return -1
				}

				function st(n, t, r, e) {
					return oo(n, function(n, u, i) {
						t(e, n, r(n), i)
					}), e
				}

				function ht(n, t) {
					return n && Tr(t, Lu(t), n)
				}

				function pt(n, t) {
					return n && Tr(t, Uu(t), n)
				}

				function _t(n, t, r) {
					"__proto__" == t && Ei ? Ei(n, t, {
						configurable: true,
						enumerable: true,
						value: r,
						writable: true
					}) : n[t] = r
				}

				function vt(n, t) {
					for (var r = -1, e = t.length, u = Hu(e), i = null == n; ++r < e;) u[r] = i ? F : Wu(n, t[r]);
					return u;
				}

				function gt(n, t, r) {
					return n === n && (r !== F && (n = n <= r ? n : r), t !== F && (n = n >= t ? n : t)), n
				}

				function dt(n, t, r, e, i, o) {
					var f, c = 1 & t,
						a = 2 & t,
						l = 4 & t;
					if (r && (f = i ? r(n, e, i, o) : r(n)), f !== F) return f;
					if (!bu(n)) return n;
					if (e = af(n)) {
						if (f = Ee(n), !c) return Mr(n, f)
					} else {
						var s = yo(n),
							h = "[object Function]" == s || "[object GeneratorFunction]" == s;
						if (sf(n)) return Wr(n, c);
						if ("[object Object]" == s || "[object Arguments]" == s || h && !i) {
							if (f = a || h ? {} : Oe(n), !c) return a ? Fr(n, pt(f, n)) : $r(n, ht(f, n))
						} else {
							if (!Dn[s]) return i ? n : {};
							f = Se(n, s, dt, c)
						}
					}
					if (o || (o = new Vn),
						i = o.get(n)) return i;
					o.set(n, f);
					var a = l ? a ? ye : de : a ? Uu : Lu,
						p = e ? F : a(n);
					return u(p || n, function(e, u) {
						p && (u = e, e = n[u]), at(f, u, dt(e, t, r, u, n, o))
					}), f
				}

				function yt(n) {
					var t = Lu(n);
					return function(r) {
						return bt(r, n, t)
					}
				}

				function bt(n, t, r) {
					var e = r.length;
					if (null == n) return !e;
					for (n = ni(n); e--;) {
						var u = r[e],
							i = t[u],
							o = n[u];
						if (o === F && !(u in n) || !i(o)) return false
					}
					return true
				}

				function xt(n, t, r) {
					if (typeof n != "function") throw new ei("Expected a function");
					return jo(function() {
						n.apply(F, r)
					}, t)
				}

				function jt(n, t, r, e) {
					var u = -1,
						i = c,
						o = true,
						f = n.length,
						s = [],
						h = t.length;
					if (!f) return s;
					r && (t = l(t, S(r))), e ? (i = a, o = false) : 200 <= t.length && (i = R, o = false, t = new qn(t));
					n: for (; ++u < f;) {
						var p = n[u],
							_ = null == r ? p : r(p),
							p = e || 0 !== p ? p : 0;
						if (o && _ === _) {
							for (var v = h; v--;)
								if (t[v] === _) continue n;
							s.push(p)
						} else i(t, _, e) || s.push(p)
					}
					return s
				}

				function wt(n, t) {
					var r = true;
					return oo(n, function(n, e, u) {
						return r = !!t(n, e, u)
					}), r
				}

				function mt(n, t, r) {
					for (var e = -1, u = n.length; ++e < u;) {
						var i = n[e],
							o = t(i);
						if (null != o && (f === F ? o === o && !Au(o) : r(o, f))) var f = o,
							c = i
					}
					return c
				}

				function At(n, t) {
					var r = [];
					return oo(n, function(n, e, u) {
						t(n, e, u) && r.push(n)
					}), r
				}

				function kt(n, t, r, e, u) {
					var i = -1,
						o = n.length;
					for (r || (r = Ie), u || (u = []); ++i < o;) {
						var f = n[i];
						0 < t && r(f) ? 1 < t ? kt(f, t - 1, r, e, u) : s(u, f) : e || (u[u.length] = f)
					}
					return u
				}

				function Et(n, t) {
					return n && co(n, t, Lu)
				}

				function Ot(n, t) {
					return n && ao(n, t, Lu)
				}

				function St(n, t) {
					return f(t, function(t) {
						return gu(n[t])
					})
				}

				function It(n, t) {
					t = Rr(t, n);
					for (var r = 0, e = t.length; null != n && r < e;) n = n[$e(t[r++])];
					return r && r == e ? n : F
				}

				function Rt(n, t, r) {
					return t = t(n), af(n) ? t : s(t, r(n))
				}

				function zt(n) {
					if (null == n) n = n === F ? "[object Undefined]" : "[object Null]";
					else if (ki && ki in ni(n)) {
						var t = ci.call(n, ki),
							r = n[ki];
						try {
							n[ki] = F;
							var e = true
						} catch (n) {}
						var u = si.call(n);
						e && (t ? n[ki] = r : delete n[ki]), n = u
					} else n = si.call(n);
					return n
				}

				function Wt(n, t) {
					return n > t
				}

				function Bt(n, t) {
					return null != n && ci.call(n, t)
				}

				function Lt(n, t) {
					return null != n && t in ni(n)
				}

				function Ut(n, t, r) {
					for (var e = r ? a : c, u = n[0].length, i = n.length, o = i, f = Hu(i), s = 1 / 0, h = []; o--;) {
						var p = n[o];
						o && t && (p = l(p, S(t))), s = Mi(p.length, s), f[o] = !r && (t || 120 <= u && 120 <= p.length) ? new qn(o && p) : F
					}
					var p = n[0],
						_ = -1,
						v = f[0];
					n: for (; ++_ < u && h.length < s;) {
						var g = p[_],
							d = t ? t(g) : g,
							g = r || 0 !== g ? g : 0;
						if (v ? !R(v, d) : !e(h, d, r)) {
							for (o = i; --o;) {
								var y = f[o];
								if (y ? !R(y, d) : !e(n[o], d, r)) continue n
							}
							v && v.push(d), h.push(g)
						}
					}
					return h
				}

				function Ct(n, t, r) {
					var e = {};
					return Et(n, function(n, u, i) {
						t(e, r(n), u, i)
					}), e
				}

				function Dt(n, t, e) {
					return t = Rr(t, n), n = 2 > t.length ? n : It(n, vr(t, 0, -1)), t = null == n ? n : n[$e(Ge(t))], null == t ? F : r(t, n, e)
				}

				function Mt(n) {
					return xu(n) && "[object Arguments]" == zt(n)
				}

				function Tt(n) {
					return xu(n) && "[object ArrayBuffer]" == zt(n)
				}

				function $t(n) {
					return xu(n) && "[object Date]" == zt(n)
				}

				function Ft(n, t, r, e, u) {
					if (n === t) t = true;
					else if (null == n || null == t || !xu(n) && !xu(t)) t = n !== n && t !== t;
					else n: {
						var i = af(n),
							o = af(t),
							f = i ? "[object Array]" : yo(n),
							c = o ? "[object Array]" : yo(t),
							f = "[object Arguments]" == f ? "[object Object]" : f,
							c = "[object Arguments]" == c ? "[object Object]" : c,
							a = "[object Object]" == f,
							o = "[object Object]" == c;
						if ((c = f == c) && sf(n)) {
							if (!sf(t)) {
								t = false;
								break n
							}
							i = true, a = false
						}
						if (c && !a) u || (u = new Vn),
						t = i || gf(n) ? _e(n, t, r, e, Ft, u) : ve(n, t, f, r, e, Ft, u);
						else {
							if (!(1 & r) && (i = a && ci.call(n, "__wrapped__"), f = o && ci.call(t, "__wrapped__"), i || f)) {
								n = i ? n.value() : n, t = f ? t.value() : t, u || (u = new Vn), t = Ft(n, t, r, e, u);
								break n
							}
							if (c) t: if (u || (u = new Vn),
								i = 1 & r, f = de(n), o = f.length, c = de(t).length, o == c || i) {
								for (a = o; a--;) {
									var l = f[a];
									if (!(i ? l in t : ci.call(t, l))) {
										t = false;
										break t
									}
								}
								if ((c = u.get(n)) && u.get(t)) t = c == t;
								else {
									c = true, u.set(n, t), u.set(t, n);
									for (var s = i; ++a < o;) {
										var l = f[a],
											h = n[l],
											p = t[l];
										if (e) var _ = i ? e(p, h, l, t, n, u) : e(h, p, l, n, t, u);
										if (_ === F ? h !== p && !Ft(h, p, r, e, u) : !_) {
											c = false;
											break
										}
										s || (s = "constructor" == l)
									}
									c && !s && (r = n.constructor, e = t.constructor, r != e && "constructor" in n && "constructor" in t && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)),
										u.delete(n), u.delete(t), t = c
								}
							} else t = false;
							else t = false
						}
					}
					return t
				}

				function Nt(n) {
					return xu(n) && "[object Map]" == yo(n)
				}

				function Pt(n, t, r, e) {
					var u = r.length,
						i = u,
						o = !e;
					if (null == n) return !i;
					for (n = ni(n); u--;) {
						var f = r[u];
						if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return false
					}
					for (; ++u < i;) {
						var f = r[u],
							c = f[0],
							a = n[c],
							l = f[1];
						if (o && f[2]) {
							if (a === F && !(c in n)) return false
						} else {
							if (f = new Vn, e) var s = e(a, l, c, n, t, f);
							if (s === F ? !Ft(l, a, 3, e, f) : !s) return false
						}
					}
					return true
				}

				function Zt(n) {
					return !(!bu(n) || li && li in n) && (gu(n) ? _i : xn).test(Fe(n))
				}

				function qt(n) {
					return xu(n) && "[object RegExp]" == zt(n)
				}

				function Vt(n) {
					return xu(n) && "[object Set]" == yo(n)
				}

				function Kt(n) {
					return xu(n) && yu(n.length) && !!Cn[zt(n)]
				}

				function Gt(n) {
					return typeof n == "function" ? n : null == n ? Nu : typeof n == "object" ? af(n) ? Xt(n[0], n[1]) : Qt(n) : Vu(n)
				}

				function Ht(n) {
					if (!Le(n)) return Ci(n);
					var t, r = [];
					for (t in ni(n)) ci.call(n, t) && "constructor" != t && r.push(t);
					return r
				}

				function Jt(n, t) {
					return n < t
				}

				function Yt(n, t) {
					var r = -1,
						e = pu(n) ? Hu(n.length) : [];
					return oo(n, function(n, u, i) {
						e[++r] = t(n, u, i)
					}), e
				}

				function Qt(n) {
					var t = me(n);
					return 1 == t.length && t[0][2] ? Ue(t[0][0], t[0][1]) : function(r) {
						return r === n || Pt(r, n, t)
					}
				}

				function Xt(n, t) {
					return We(n) && t === t && !bu(t) ? Ue($e(n), t) : function(r) {
						var e = Wu(r, n);
						return e === F && e === t ? Bu(r, n) : Ft(t, e, 3)
					}
				}

				function nr(n, t, r, e, u) {
					n !== t && co(t, function(i, o) {
						if (bu(i)) {
							u || (u = new Vn);
							var f = u,
								c = n[o],
								a = t[o],
								l = f.get(a);
							if (l) ct(n, o, l);
							else {
								var l = e ? e(c, a, o + "", n, t, f) : F,
									s = l === F;
								if (s) {
									var h = af(a),
										p = !h && sf(a),
										_ = !h && !p && gf(a),
										l = a;
									h || p || _ ? af(c) ? l = c : _u(c) ? l = Mr(c) : p ? (s = false, l = Wr(a, true)) : _ ? (s = false, l = Lr(a, true)) : l = [] : wu(a) || cf(a) ? (l = c,
										cf(c) ? l = Ru(c) : (!bu(c) || r && gu(c)) && (l = Oe(a))) : s = false
								}
								s && (f.set(a, l), nr(l, a, r, e, f), f.delete(a)), ct(n, o, l)
							}
						} else f = e ? e(n[o], i, o + "", n, t, u) : F, f === F && (f = i), ct(n, o, f)
					}, Uu)
				}

				function tr(n, t) {
					var r = n.length;
					if (r) return t += 0 > t ? r : 0, Re(t, r) ? n[t] : F
				}

				function rr(n, t, r) {
					var e = -1;
					return t = l(t.length ? t : [Nu], S(je())), n = Yt(n, function(n) {
						return {
							a: l(t, function(t) {
								return t(n)
							}),
							b: ++e,
							c: n
						}
					}), A(n, function(n, t) {
						var e;
						n: {
							e = -1;
							for (var u = n.a, i = t.a, o = u.length, f = r.length; ++e < o;) {
								var c = Ur(u[e], i[e]);
								if (c) {
									e = e >= f ? c : c * ("desc" == r[e] ? -1 : 1);
									break n
								}
							}
							e = n.b - t.b
						}
						return e
					})
				}

				function er(n, t) {
					return ur(n, t, function(t, r) {
						return Bu(n, r)
					})
				}

				function ur(n, t, r) {
					for (var e = -1, u = t.length, i = {}; ++e < u;) {
						var o = t[e],
							f = It(n, o);
						r(f, o) && pr(i, Rr(o, n), f)
					}
					return i
				}

				function ir(n) {
					return function(t) {
						return It(t, n)
					}
				}

				function or(n, t, r, e) {
					var u = e ? y : d,
						i = -1,
						o = t.length,
						f = n;
					for (n === t && (t = Mr(t)), r && (f = l(n, S(r))); ++i < o;)
						for (var c = 0, a = t[i], a = r ? r(a) : a; - 1 < (c = u(f, a, c, e));) f !== n && wi.call(f, c, 1), wi.call(n, c, 1);
					return n
				}

				function fr(n, t) {
					for (var r = n ? t.length : 0, e = r - 1; r--;) {
						var u = t[r];
						if (r == e || u !== i) {
							var i = u;
							Re(u) ? wi.call(n, u, 1) : mr(n, u)
						}
					}
				}

				function cr(n, t) {
					return n + zi(Fi() * (t - n + 1))
				}

				function ar(n, t) {
					var r = "";
					if (!n || 1 > t || 9007199254740991 < t) return r;
					do t % 2 && (r += n), (t = zi(t / 2)) && (n += n); while (t);
					return r
				}

				function lr(n, t) {
					return wo(Ce(n, t, Nu), n + "")
				}

				function sr(n) {
					return tt(Du(n))
				}

				function hr(n, t) {
					var r = Du(n);
					return Te(r, gt(t, 0, r.length))
				}

				function pr(n, t, r, e) {
					if (!bu(n)) return n;
					t = Rr(t, n);
					for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i;) {
						var c = $e(t[u]),
							a = r;
						if (u != o) {
							var l = f[c],
								a = e ? e(l, c, f) : F;
							a === F && (a = bu(l) ? l : Re(t[u + 1]) ? [] : {})
						}
						at(f, c, a), f = f[c]
					}
					return n
				}

				function _r(n) {
					return Te(Du(n))
				}

				function vr(n, t, r) {
					var e = -1,
						u = n.length;
					for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Hu(u); ++e < u;) r[e] = n[e + t];
					return r
				}

				function gr(n, t) {
					var r;
					return oo(n, function(n, e, u) {
						return r = t(n, e, u), !r
					}), !!r
				}

				function dr(n, t, r) {
					var e = 0,
						u = null == n ? e : n.length;
					if (typeof t == "number" && t === t && 2147483647 >= u) {
						for (; e < u;) {
							var i = e + u >>> 1,
								o = n[i];
							null !== o && !Au(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i
						}
						return u
					}
					return yr(n, t, Nu, r);
				}

				function yr(n, t, r, e) {
					t = r(t);
					for (var u = 0, i = null == n ? 0 : n.length, o = t !== t, f = null === t, c = Au(t), a = t === F; u < i;) {
						var l = zi((u + i) / 2),
							s = r(n[l]),
							h = s !== F,
							p = null === s,
							_ = s === s,
							v = Au(s);
						(o ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? s <= t : s < t) ? u = l + 1: i = l
					}
					return Mi(i, 4294967294)
				}

				function br(n, t) {
					for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
						var o = n[r],
							f = t ? t(o) : o;
						if (!r || !hu(f, c)) {
							var c = f;
							i[u++] = 0 === o ? 0 : o
						}
					}
					return i
				}

				function xr(n) {
					return typeof n == "number" ? n : Au(n) ? P : +n
				}

				function jr(n) {
					if (typeof n == "string") return n;
					if (af(n)) return l(n, jr) + "";
					if (Au(n)) return uo ? uo.call(n) : "";
					var t = n + "";
					return "0" == t && 1 / n == -N ? "-0" : t
				}

				function wr(n, t, r) {
					var e = -1,
						u = c,
						i = n.length,
						o = true,
						f = [],
						l = f;
					if (r) o = false, u = a;
					else if (200 <= i) {
						if (u = t ? null : po(n)) return D(u);
						o = false, u = R, l = new qn
					} else l = t ? [] : f;
					n: for (; ++e < i;) {
						var s = n[e],
							h = t ? t(s) : s,
							s = r || 0 !== s ? s : 0;
						if (o && h === h) {
							for (var p = l.length; p--;)
								if (l[p] === h) continue n;
							t && l.push(h), f.push(s)
						} else u(l, h, r) || (l !== f && l.push(h), f.push(s))
					}
					return f
				}

				function mr(n, t) {
					return t = Rr(t, n), n = 2 > t.length ? n : It(n, vr(t, 0, -1)),
						null == n || delete n[$e(Ge(t))]
				}

				function Ar(n, t, r, e) {
					for (var u = n.length, i = e ? u : -1;
						(e ? i-- : ++i < u) && t(n[i], i, n););
					return r ? vr(n, e ? 0 : i, e ? i + 1 : u) : vr(n, e ? i + 1 : 0, e ? u : i)
				}

				function kr(n, t) {
					var r = n;
					return r instanceof Mn && (r = r.value()), h(t, function(n, t) {
						return t.func.apply(t.thisArg, s([n], t.args))
					}, r)
				}

				function Er(n, t, r) {
					var e = n.length;
					if (2 > e) return e ? wr(n[0]) : [];
					for (var u = -1, i = Hu(e); ++u < e;)
						for (var o = n[u], f = -1; ++f < e;) f != u && (i[u] = jt(i[u] || o, n[f], t, r));
					return wr(kt(i, 1), t, r)
				}

				function Or(n, t, r) {
					for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;) r(o, n[e], e < i ? t[e] : F);
					return o
				}

				function Sr(n) {
					return _u(n) ? n : []
				}

				function Ir(n) {
					return typeof n == "function" ? n : Nu
				}

				function Rr(n, t) {
					return af(n) ? n : We(n, t) ? [n] : mo(zu(n))
				}

				function zr(n, t, r) {
					var e = n.length;
					return r = r === F ? e : r, !t && r >= e ? n : vr(n, t, r)
				}

				function Wr(n, t) {
					if (t) return n.slice();
					var r = n.length,
						r = yi ? yi(r) : new n.constructor(r);
					return n.copy(r), r
				}

				function Br(n) {
					var t = new n.constructor(n.byteLength);
					return new di(t).set(new di(n)), t
				}

				function Lr(n, t) {
					return new n.constructor(t ? Br(n.buffer) : n.buffer, n.byteOffset, n.length)
				}

				function Ur(n, t) {
					if (n !== t) {
						var r = n !== F,
							e = null === n,
							u = n === n,
							i = Au(n),
							o = t !== F,
							f = null === t,
							c = t === t,
							a = Au(t);
						if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u) return 1;
						if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c) return -1
					}
					return 0
				}

				function Cr(n, t, r, e) {
					var u = -1,
						i = n.length,
						o = r.length,
						f = -1,
						c = t.length,
						a = Di(i - o, 0),
						l = Hu(c + a);
					for (e = !e; ++f < c;) l[f] = t[f];
					for (; ++u < o;)(e || u < i) && (l[r[u]] = n[u]);
					for (; a--;) l[f++] = n[u++];
					return l
				}

				function Dr(n, t, r, e) {
					var u = -1,
						i = n.length,
						o = -1,
						f = r.length,
						c = -1,
						a = t.length,
						l = Di(i - f, 0),
						s = Hu(l + a);
					for (e = !e; ++u < l;) s[u] = n[u];
					for (l = u; ++c < a;) s[l + c] = t[c];
					for (; ++o < f;)(e || u < i) && (s[l + r[o]] = n[u++]);
					return s
				}

				function Mr(n, t) {
					var r = -1,
						e = n.length;
					for (t || (t = Hu(e)); ++r < e;) t[r] = n[r];
					return t
				}

				function Tr(n, t, r, e) {
					var u = !r;
					r || (r = {});
					for (var i = -1, o = t.length; ++i < o;) {
						var f = t[i],
							c = e ? e(r[f], n[f], f, r, n) : F;
						c === F && (c = n[f]), u ? _t(r, f, c) : at(r, f, c)
					}
					return r
				}

				function $r(n, t) {
					return Tr(n, vo(n), t)
				}

				function Fr(n, t) {
					return Tr(n, go(n), t)
				}

				function Nr(n, t) {
					return function(r, u) {
						var i = af(r) ? e : st,
							o = t ? t() : {};
						return i(r, n, je(u, 2), o);
					}
				}

				function Pr(n) {
					return lr(function(t, r) {
						var e = -1,
							u = r.length,
							i = 1 < u ? r[u - 1] : F,
							o = 2 < u ? r[2] : F,
							i = 3 < n.length && typeof i == "function" ? (u--, i) : F;
						for (o && ze(r[0], r[1], o) && (i = 3 > u ? F : i, u = 1), t = ni(t); ++e < u;)(o = r[e]) && n(t, o, e, i);
						return t
					})
				}

				function Zr(n, t) {
					return function(r, e) {
						if (null == r) return r;
						if (!pu(r)) return n(r, e);
						for (var u = r.length, i = t ? u : -1, o = ni(r);
							(t ? i-- : ++i < u) && false !== e(o[i], i, o););
						return r
					}
				}

				function qr(n) {
					return function(t, r, e) {
						var u = -1,
							i = ni(t);
						e = e(t);
						for (var o = e.length; o--;) {
							var f = e[n ? o : ++u];
							if (false === r(i[f], f, i)) break;
						}
						return t
					}
				}

				function Vr(n, t, r) {
					function e() {
						return (this && this !== Zn && this instanceof e ? i : n).apply(u ? r : this, arguments)
					}
					var u = 1 & t,
						i = Hr(n);
					return e
				}

				function Kr(n) {
					return function(t) {
						t = zu(t);
						var r = Bn.test(t) ? $(t) : F,
							e = r ? r[0] : t.charAt(0);
						return t = r ? zr(r, 1).join("") : t.slice(1), e[n]() + t
					}
				}

				function Gr(n) {
					return function(t) {
						return h($u(Tu(t).replace(In, "")), n, "")
					}
				}

				function Hr(n) {
					return function() {
						var t = arguments;
						switch (t.length) {
							case 0:
								return new n;
							case 1:
								return new n(t[0]);
							case 2:
								return new n(t[0], t[1]);
							case 3:
								return new n(t[0], t[1], t[2]);
							case 4:
								return new n(t[0], t[1], t[2], t[3]);
							case 5:
								return new n(t[0], t[1], t[2], t[3], t[4]);
							case 6:
								return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
							case 7:
								return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
						}
						var r = io(n.prototype),
							t = n.apply(r, t);
						return bu(t) ? t : r
					}
				}

				function Jr(n, t, e) {
					function u() {
						for (var o = arguments.length, f = Hu(o), c = o, a = xe(u); c--;) f[c] = arguments[c];
						return c = 3 > o && f[0] !== a && f[o - 1] !== a ? [] : C(f, a), o -= c.length, o < e ? fe(n, t, Xr, u.placeholder, F, f, c, F, F, e - o) : r(this && this !== Zn && this instanceof u ? i : n, this, f);
					}
					var i = Hr(n);
					return u
				}

				function Yr(n) {
					return function(t, r, e) {
						var u = ni(t);
						if (!pu(t)) {
							var i = je(r, 3);
							t = Lu(t), r = function(n) {
								return i(u[n], n, u)
							}
						}
						return r = n(t, r, e), -1 < r ? u[i ? t[r] : r] : F
					}
				}

				function Qr(n) {
					return ge(function(t) {
						var r = t.length,
							e = r,
							u = zn.prototype.thru;
						for (n && t.reverse(); e--;) {
							var i = t[e];
							if (typeof i != "function") throw new ei("Expected a function");
							if (u && !o && "wrapper" == be(i)) var o = new zn([], true)
						}
						for (e = o ? e : r; ++e < r;) var i = t[e],
							u = be(i),
							f = "wrapper" == u ? _o(i) : F,
							o = f && Be(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? o[be(f[0])].apply(o, f[3]) : 1 == i.length && Be(i) ? o[u]() : o.thru(i);
						return function() {
							var n = arguments,
								e = n[0];
							if (o && 1 == n.length && af(e)) return o.plant(e).value();
							for (var u = 0, n = r ? t[u].apply(this, n) : e; ++u < r;) n = t[u].call(this, n);
							return n
						}
					})
				}

				function Xr(n, t, r, e, u, i, o, f, c, a) {
					function l() {
						for (var d = arguments.length, y = Hu(d), b = d; b--;) y[b] = arguments[b];
						if (_) {
							var x, j = xe(l),
								b = y.length;
							for (x = 0; b--;) y[b] === j && ++x
						}
						if (e && (y = Cr(y, e, u, _)), i && (y = Dr(y, i, o, _)), d -= x, _ && d < a) return j = C(y, j), fe(n, t, Xr, l.placeholder, r, y, j, f, c, a - d);
						if (j = h ? r : this, b = p ? j[n] : n, d = y.length, f) {
							x = y.length;
							for (var w = Mi(f.length, x), m = Mr(y); w--;) {
								var A = f[w];
								y[w] = Re(A, x) ? m[A] : F
							}
						} else v && 1 < d && y.reverse();
						return s && c < d && (y.length = c), this && this !== Zn && this instanceof l && (b = g || Hr(b)), b.apply(j, y)
					}
					var s = 128 & t,
						h = 1 & t,
						p = 2 & t,
						_ = 24 & t,
						v = 512 & t,
						g = p ? F : Hr(n);
					return l
				}

				function ne(n, t) {
					return function(r, e) {
						return Ct(r, n, t(e))
					}
				}

				function te(n, t) {
					return function(r, e) {
						var u;
						if (r === F && e === F) return t;
						if (r !== F && (u = r), e !== F) {
							if (u === F) return e;
							typeof r == "string" || typeof e == "string" ? (r = jr(r), e = jr(e)) : (r = xr(r), e = xr(e)), u = n(r, e)
						}
						return u
					}
				}

				function re(n) {
					return ge(function(t) {
						return t = l(t, S(je())), lr(function(e) {
							var u = this;
							return n(t, function(n) {
								return r(n, u, e)
							})
						})
					})
				}

				function ee(n, t) {
					t = t === F ? " " : jr(t);
					var r = t.length;
					return 2 > r ? r ? ar(t, n) : t : (r = ar(t, Ri(n / T(t))), Bn.test(t) ? zr($(r), 0, n).join("") : r.slice(0, n))
				}

				function ue(n, t, e, u) {
					function i() {
						for (var t = -1, c = arguments.length, a = -1, l = u.length, s = Hu(l + c), h = this && this !== Zn && this instanceof i ? f : n; ++a < l;) s[a] = u[a];
						for (; c--;) s[a++] = arguments[++t];
						return r(h, o ? e : this, s)
					}
					var o = 1 & t,
						f = Hr(n);
					return i
				}

				function ie(n) {
					return function(t, r, e) {
						e && typeof e != "number" && ze(t, r, e) && (r = e = F), t = Eu(t), r === F ? (r = t, t = 0) : r = Eu(r), e = e === F ? t < r ? 1 : -1 : Eu(e);
						var u = -1;
						r = Di(Ri((r - t) / (e || 1)), 0);
						for (var i = Hu(r); r--;) i[n ? r : ++u] = t, t += e;
						return i
					}
				}

				function oe(n) {
					return function(t, r) {
						return typeof t == "string" && typeof r == "string" || (t = Iu(t), r = Iu(r)), n(t, r)
					}
				}

				function fe(n, t, r, e, u, i, o, f, c, a) {
					var l = 8 & t,
						s = l ? o : F;
					o = l ? F : o;
					var h = l ? i : F;
					return i = l ? F : i, t = (t | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & t || (t &= -4), u = [n, t, u, h, s, i, o, f, c, a], r = r.apply(F, u), Be(n) && xo(r, u), r.placeholder = e, De(r, n, t)
				}

				function ce(n) {
					var t = Xu[n];
					return function(n, r) {
						if (n = Iu(n), r = null == r ? 0 : Mi(Ou(r), 292)) {
							var e = (zu(n) + "e").split("e"),
								e = t(e[0] + "e" + (+e[1] + r)),
								e = (zu(e) + "e").split("e");
							return +(e[0] + "e" + (+e[1] - r))
						}
						return t(n)
					}
				}

				function ae(n) {
					return function(t) {
						var r = yo(t);
						return "[object Map]" == r ? L(t) : "[object Set]" == r ? M(t) : O(t, n(t))
					}
				}

				function le(n, t, r, e, u, i, o, f) {
					var c = 2 & t;
					if (!c && typeof n != "function") throw new ei("Expected a function");
					var a = e ? e.length : 0;
					if (a || (t &= -97, e = u = F), o = o === F ? o : Di(Ou(o), 0), f = f === F ? f : Ou(f), a -= u ? u.length : 0, 64 & t) {
						var l = e,
							s = u;
						e = u = F
					}
					var h = c ? F : _o(n);
					return i = [n, t, r, e, u, l, s, i, o, f], h && (r = i[1], n = h[1], t = r | n, e = 128 == n && 8 == r || 128 == n && 256 == r && i[7].length <= h[8] || 384 == n && h[7].length <= h[8] && 8 == r, 131 > t || e) && (1 & n && (i[2] = h[2], t |= 1 & r ? 0 : 4), (r = h[3]) && (e = i[3], i[3] = e ? Cr(e, r, h[4]) : r, i[4] = e ? C(i[3], "__lodash_placeholder__") : h[4]), (r = h[5]) && (e = i[5], i[5] = e ? Dr(e, r, h[6]) : r, i[6] = e ? C(i[5], "__lodash_placeholder__") : h[6]), (r = h[7]) && (i[7] = r), 128 & n && (i[8] = null == i[8] ? h[8] : Mi(i[8], h[8])), null == i[9] && (i[9] = h[9]), i[0] = h[0], i[1] = t), n = i[0], t = i[1],
						r = i[2], e = i[3], u = i[4], f = i[9] = i[9] === F ? c ? 0 : n.length : Di(i[9] - a, 0), !f && 24 & t && (t &= -25), De((h ? lo : xo)(t && 1 != t ? 8 == t || 16 == t ? Jr(n, t, f) : 32 != t && 33 != t || u.length ? Xr.apply(F, i) : ue(n, t, r, e) : Vr(n, t, r), i), n, t)
				}

				function se(n, t, r, e) {
					return n === F || hu(n, ii[r]) && !ci.call(e, r) ? t : n
				}

				function he(n, t, r, e, u, i) {
					return bu(n) && bu(t) && (i.set(t, n), nr(n, t, F, he, i), i.delete(t)), n
				}

				function pe(n) {
					return wu(n) ? F : n
				}

				function _e(n, t, r, e, u, i) {
					var o = 1 & r,
						f = n.length,
						c = t.length;
					if (f != c && !(o && c > f)) return false;
					if ((c = i.get(n)) && i.get(t)) return c == t;
					var c = -1,
						a = true,
						l = 2 & r ? new qn : F;
					for (i.set(n, t), i.set(t, n); ++c < f;) {
						var s = n[c],
							h = t[c];
						if (e) var p = o ? e(h, s, c, t, n, i) : e(s, h, c, n, t, i);
						if (p !== F) {
							if (p) continue;
							a = false;
							break
						}
						if (l) {
							if (!_(t, function(n, t) {
									if (!R(l, t) && (s === n || u(s, n, r, e, i))) return l.push(t)
								})) {
								a = false;
								break
							}
						} else if (s !== h && !u(s, h, r, e, i)) {
							a = false;
							break
						}
					}
					return i.delete(n), i.delete(t), a
				}

				function ve(n, t, r, e, u, i, o) {
					switch (r) {
						case "[object DataView]":
							if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) break;
							n = n.buffer, t = t.buffer;
						case "[object ArrayBuffer]":
							if (n.byteLength != t.byteLength || !i(new di(n), new di(t))) break;
							return true;
						case "[object Boolean]":
						case "[object Date]":
						case "[object Number]":
							return hu(+n, +t);
						case "[object Error]":
							return n.name == t.name && n.message == t.message;
						case "[object RegExp]":
						case "[object String]":
							return n == t + "";
						case "[object Map]":
							var f = L;
						case "[object Set]":
							if (f || (f = D), n.size != t.size && !(1 & e)) break;
							return (r = o.get(n)) ? r == t : (e |= 2, o.set(n, t), t = _e(f(n), f(t), e, u, i, o), o.delete(n), t);
						case "[object Symbol]":
							if (eo) return eo.call(n) == eo.call(t)
					}
					return false
				}

				function ge(n) {
					return wo(Ce(n, F, Ve), n + "")
				}

				function de(n) {
					return Rt(n, Lu, vo)
				}

				function ye(n) {
					return Rt(n, Uu, go)
				}

				function be(n) {
					for (var t = n.name + "", r = Ji[t], e = ci.call(Ji, t) ? r.length : 0; e--;) {
						var u = r[e],
							i = u.func;
						if (null == i || i == n) return u.name
					}
					return t
				}

				function xe(n) {
					return (ci.call(On, "placeholder") ? On : n).placeholder
				}

				function je() {
					var n = On.iteratee || Pu,
						n = n === Pu ? Gt : n;
					return arguments.length ? n(arguments[0], arguments[1]) : n
				}

				function we(n, t) {
					var r = n.__data__,
						e = typeof t;
					return ("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
				}

				function me(n) {
					for (var t = Lu(n), r = t.length; r--;) {
						var e = t[r],
							u = n[e];
						t[r] = [e, u, u === u && !bu(u)]
					}
					return t
				}

				function Ae(n, t) {
					var r = null == n ? F : n[t];
					return Zt(r) ? r : F
				}

				function ke(n, t, r) {
					t = Rr(t, n);
					for (var e = -1, u = t.length, i = false; ++e < u;) {
						var o = $e(t[e]);
						if (!(i = null != n && r(n, o))) break;
						n = n[o]
					}
					return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && yu(u) && Re(o, u) && (af(n) || cf(n)))
				}

				function Ee(n) {
					var t = n.length,
						r = n.constructor(t);
					return t && "string" == typeof n[0] && ci.call(n, "index") && (r.index = n.index, r.input = n.input), r
				}

				function Oe(n) {
					return typeof n.constructor != "function" || Le(n) ? {} : io(bi(n))
				}

				function Se(r, e, u, i) {
					var o = r.constructor;
					switch (e) {
						case "[object ArrayBuffer]":
							return Br(r);
						case "[object Boolean]":
						case "[object Date]":
							return new o(+r);
						case "[object DataView]":
							return e = i ? Br(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.byteLength);
						case "[object Float32Array]":
						case "[object Float64Array]":
						case "[object Int8Array]":
						case "[object Int16Array]":
						case "[object Int32Array]":
						case "[object Uint8Array]":
						case "[object Uint8ClampedArray]":
						case "[object Uint16Array]":
						case "[object Uint32Array]":
							return Lr(r, i);
						case "[object Map]":
							return e = i ? u(L(r), 1) : L(r), h(e, n, new r.constructor);
						case "[object Number]":
						case "[object String]":
							return new o(r);
						case "[object RegExp]":
							return e = new r.constructor(r.source, dn.exec(r)), e.lastIndex = r.lastIndex, e;
						case "[object Set]":
							return e = i ? u(D(r), 1) : D(r), h(e, t, new r.constructor);
						case "[object Symbol]":
							return eo ? ni(eo.call(r)) : {}
					}
				}

				function Ie(n) {
					return af(n) || cf(n) || !!(mi && n && n[mi])
				}

				function Re(n, t) {
					return t = null == t ? 9007199254740991 : t, !!t && (typeof n == "number" || wn.test(n)) && -1 < n && 0 == n % 1 && n < t
				}

				function ze(n, t, r) {
					if (!bu(r)) return false;
					var e = typeof t;
					return !!("number" == e ? pu(r) && Re(t, r.length) : "string" == e && t in r) && hu(r[t], n)
				}

				function We(n, t) {
					if (af(n)) return false;
					var r = typeof n;
					return !("number" != r && "symbol" != r && "boolean" != r && null != n && !Au(n)) || (rn.test(n) || !tn.test(n) || null != t && n in ni(t))
				}

				function Be(n) {
					var t = be(n),
						r = On[t];
					return typeof r == "function" && t in Mn.prototype && (n === r || (t = _o(r), !!t && n === t[0]))
				}

				function Le(n) {
					var t = n && n.constructor;
					return n === (typeof t == "function" && t.prototype || ii)
				}

				function Ue(n, t) {
					return function(r) {
						return null != r && (r[n] === t && (t !== F || n in ni(r)))
					}
				}

				function Ce(n, t, e) {
					return t = Di(t === F ? n.length - 1 : t, 0),
						function() {
							for (var u = arguments, i = -1, o = Di(u.length - t, 0), f = Hu(o); ++i < o;) f[i] = u[t + i];
							for (i = -1, o = Hu(t + 1); ++i < t;) o[i] = u[i];
							return o[t] = e(f), r(n, this, o)
						}
				}

				function De(n, t, r) {
					var e = t + "";
					t = wo;
					var u, i = Ne;
					return u = (u = e.match(hn)) ? u[1].split(pn) : [], r = i(u, r), (i = r.length) && (u = i - 1, r[u] = (1 < i ? "& " : "") + r[u], r = r.join(2 < i ? ", " : " "),
						e = e.replace(sn, "{\n/* [wrapped with " + r + "] */\n")), t(n, e)
				}

				function Me(n) {
					var t = 0,
						r = 0;
					return function() {
						var e = Ti(),
							u = 16 - (e - r);
						if (r = e, 0 < u) {
							if (800 <= ++t) return arguments[0]
						} else t = 0;
						return n.apply(F, arguments)
					}
				}

				function Te(n, t) {
					var r = -1,
						e = n.length,
						u = e - 1;
					for (t = t === F ? e : t; ++r < t;) {
						var e = cr(r, u),
							i = n[e];
						n[e] = n[r], n[r] = i
					}
					return n.length = t, n
				}

				function $e(n) {
					if (typeof n == "string" || Au(n)) return n;
					var t = n + "";
					return "0" == t && 1 / n == -N ? "-0" : t
				}

				function Fe(n) {
					if (null != n) {
						try {
							return fi.call(n)
						} catch (n) {}
						return n + ""
					}
					return "";
				}

				function Ne(n, t) {
					return u(Z, function(r) {
						var e = "_." + r[0];
						t & r[1] && !c(n, e) && n.push(e)
					}), n.sort()
				}

				function Pe(n) {
					if (n instanceof Mn) return n.clone();
					var t = new zn(n.__wrapped__, n.__chain__);
					return t.__actions__ = Mr(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t
				}

				function Ze(n, t, r) {
					var e = null == n ? 0 : n.length;
					return e ? (r = null == r ? 0 : Ou(r), 0 > r && (r = Di(e + r, 0)), g(n, je(t, 3), r)) : -1
				}

				function qe(n, t, r) {
					var e = null == n ? 0 : n.length;
					if (!e) return -1;
					var u = e - 1;
					return r !== F && (u = Ou(r), u = 0 > r ? Di(e + u, 0) : Mi(u, e - 1)),
						g(n, je(t, 3), u, true)
				}

				function Ve(n) {
					return (null == n ? 0 : n.length) ? kt(n, 1) : []
				}

				function Ke(n) {
					return n && n.length ? n[0] : F
				}

				function Ge(n) {
					var t = null == n ? 0 : n.length;
					return t ? n[t - 1] : F
				}

				function He(n, t) {
					return n && n.length && t && t.length ? or(n, t) : n
				}

				function Je(n) {
					return null == n ? n : Ni.call(n)
				}

				function Ye(n) {
					if (!n || !n.length) return [];
					var t = 0;
					return n = f(n, function(n) {
						if (_u(n)) return t = Di(n.length, t), true
					}), E(t, function(t) {
						return l(n, j(t))
					})
				}

				function Qe(n, t) {
					if (!n || !n.length) return [];
					var e = Ye(n);
					return null == t ? e : l(e, function(n) {
						return r(t, F, n)
					})
				}

				function Xe(n) {
					return n = On(n), n.__chain__ = true, n
				}

				function nu(n, t) {
					return t(n)
				}

				function tu() {
					return this
				}

				function ru(n, t) {
					return (af(n) ? u : oo)(n, je(t, 3))
				}

				function eu(n, t) {
					return (af(n) ? i : fo)(n, je(t, 3))
				}

				function uu(n, t) {
					return (af(n) ? l : Yt)(n, je(t, 3))
				}

				function iu(n, t, r) {
					return t = r ? F : t, t = n && null == t ? n.length : t, le(n, 128, F, F, F, F, t)
				}

				function ou(n, t) {
					var r;
					if (typeof t != "function") throw new ei("Expected a function");
					return n = Ou(n),
						function() {
							return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = F),
								r
						}
				}

				function fu(n, t, r) {
					return t = r ? F : t, n = le(n, 8, F, F, F, F, F, t), n.placeholder = fu.placeholder, n
				}

				function cu(n, t, r) {
					return t = r ? F : t, n = le(n, 16, F, F, F, F, F, t), n.placeholder = cu.placeholder, n
				}

				function au(n, t, r) {
					function e(t) {
						var r = c,
							e = a;
						return c = a = F, _ = t, s = n.apply(e, r)
					}

					function u(n) {
						var r = n - p;
						return n -= _, p === F || r >= t || 0 > r || g && n >= l
					}

					function i() {
						var n = Jo();
						if (u(n)) return o(n);
						var r, e = jo;
						r = n - _, n = t - (n - p), r = g ? Mi(n, l - r) : n, h = e(i, r)
					}

					function o(n) {
						return h = F, d && c ? e(n) : (c = a = F, s)
					}

					function f() {
						var n = Jo(),
							r = u(n);
						if (c = arguments,
							a = this, p = n, r) {
							if (h === F) return _ = n = p, h = jo(i, t), v ? e(n) : s;
							if (g) return h = jo(i, t), e(p)
						}
						return h === F && (h = jo(i, t)), s
					}
					var c, a, l, s, h, p, _ = 0,
						v = false,
						g = false,
						d = true;
					if (typeof n != "function") throw new ei("Expected a function");
					return t = Iu(t) || 0, bu(r) && (v = !!r.leading, l = (g = "maxWait" in r) ? Di(Iu(r.maxWait) || 0, t) : l, d = "trailing" in r ? !!r.trailing : d), f.cancel = function() {
						h !== F && ho(h), _ = 0, c = p = a = h = F
					}, f.flush = function() {
						return h === F ? s : o(Jo())
					}, f
				}

				function lu(n, t) {
					function r() {
						var e = arguments,
							u = t ? t.apply(this, e) : e[0],
							i = r.cache;
						return i.has(u) ? i.get(u) : (e = n.apply(this, e),
							r.cache = i.set(u, e) || i, e)
					}
					if (typeof n != "function" || null != t && typeof t != "function") throw new ei("Expected a function");
					return r.cache = new(lu.Cache || Pn), r
				}

				function su(n) {
					if (typeof n != "function") throw new ei("Expected a function");
					return function() {
						var t = arguments;
						switch (t.length) {
							case 0:
								return !n.call(this);
							case 1:
								return !n.call(this, t[0]);
							case 2:
								return !n.call(this, t[0], t[1]);
							case 3:
								return !n.call(this, t[0], t[1], t[2])
						}
						return !n.apply(this, t)
					}
				}

				function hu(n, t) {
					return n === t || n !== n && t !== t
				}

				function pu(n) {
					return null != n && yu(n.length) && !gu(n);
				}

				function _u(n) {
					return xu(n) && pu(n)
				}

				function vu(n) {
					if (!xu(n)) return false;
					var t = zt(n);
					return "[object Error]" == t || "[object DOMException]" == t || typeof n.message == "string" && typeof n.name == "string" && !wu(n)
				}

				function gu(n) {
					return !!bu(n) && (n = zt(n), "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n)
				}

				function du(n) {
					return typeof n == "number" && n == Ou(n)
				}

				function yu(n) {
					return typeof n == "number" && -1 < n && 0 == n % 1 && 9007199254740991 >= n
				}

				function bu(n) {
					var t = typeof n;
					return null != n && ("object" == t || "function" == t);
				}

				function xu(n) {
					return null != n && typeof n == "object"
				}

				function ju(n) {
					return typeof n == "number" || xu(n) && "[object Number]" == zt(n)
				}

				function wu(n) {
					return !(!xu(n) || "[object Object]" != zt(n)) && (n = bi(n), null === n || (n = ci.call(n, "constructor") && n.constructor, typeof n == "function" && n instanceof n && fi.call(n) == hi))
				}

				function mu(n) {
					return typeof n == "string" || !af(n) && xu(n) && "[object String]" == zt(n)
				}

				function Au(n) {
					return typeof n == "symbol" || xu(n) && "[object Symbol]" == zt(n)
				}

				function ku(n) {
					if (!n) return [];
					if (pu(n)) return mu(n) ? $(n) : Mr(n);
					if (Ai && n[Ai]) {
						n = n[Ai]();
						for (var t, r = []; !(t = n.next()).done;) r.push(t.value);
						return r
					}
					return t = yo(n), ("[object Map]" == t ? L : "[object Set]" == t ? D : Du)(n)
				}

				function Eu(n) {
					return n ? (n = Iu(n), n === N || n === -N ? 1.7976931348623157e308 * (0 > n ? -1 : 1) : n === n ? n : 0) : 0 === n ? n : 0
				}

				function Ou(n) {
					n = Eu(n);
					var t = n % 1;
					return n === n ? t ? n - t : n : 0
				}

				function Su(n) {
					return n ? gt(Ou(n), 0, 4294967295) : 0
				}

				function Iu(n) {
					if (typeof n == "number") return n;
					if (Au(n)) return P;
					if (bu(n) && (n = typeof n.valueOf == "function" ? n.valueOf() : n, n = bu(n) ? n + "" : n), typeof n != "string") return 0 === n ? n : +n;
					n = n.replace(cn, "");
					var t = bn.test(n);
					return t || jn.test(n) ? Fn(n.slice(2), t ? 2 : 8) : yn.test(n) ? P : +n
				}

				function Ru(n) {
					return Tr(n, Uu(n))
				}

				function zu(n) {
					return null == n ? "" : jr(n)
				}

				function Wu(n, t, r) {
					return n = null == n ? F : It(n, t), n === F ? r : n
				}

				function Bu(n, t) {
					return null != n && ke(n, t, Lt)
				}

				function Lu(n) {
					return pu(n) ? Gn(n) : Ht(n)
				}

				function Uu(n) {
					if (pu(n)) n = Gn(n, true);
					else if (bu(n)) {
						var t, r = Le(n),
							e = [];
						for (t in n)("constructor" != t || !r && ci.call(n, t)) && e.push(t);
						n = e
					} else {
						if (t = [], null != n)
							for (r in ni(n)) t.push(r);
						n = t
					}
					return n
				}

				function Cu(n, t) {
					if (null == n) return {};
					var r = l(ye(n), function(n) {
						return [n]
					});
					return t = je(t), ur(n, r, function(n, r) {
						return t(n, r[0])
					})
				}

				function Du(n) {
					return null == n ? [] : I(n, Lu(n))
				}

				function Mu(n) {
					return Nf(zu(n).toLowerCase())
				}

				function Tu(n) {
					return (n = zu(n)) && n.replace(mn, rt).replace(Rn, "")
				}

				function $u(n, t, r) {
					return n = zu(n), t = r ? F : t, t === F ? Ln.test(n) ? n.match(Wn) || [] : n.match(_n) || [] : n.match(t) || []
				}

				function Fu(n) {
					return function() {
						return n
					}
				}

				function Nu(n) {
					return n
				}

				function Pu(n) {
					return Gt(typeof n == "function" ? n : dt(n, 1))
				}

				function Zu(n, t, r) {
					var e = Lu(t),
						i = St(t, e);
					null != r || bu(t) && (i.length || !e.length) || (r = t, t = n, n = this, i = St(t, Lu(t)));
					var o = !(bu(r) && "chain" in r && !r.chain),
						f = gu(n);
					return u(i, function(r) {
						var e = t[r];
						n[r] = e, f && (n.prototype[r] = function() {
							var t = this.__chain__;
							if (o || t) {
								var r = n(this.__wrapped__);
								return (r.__actions__ = Mr(this.__actions__)).push({
									func: e,
									args: arguments,
									thisArg: n
								}), r.__chain__ = t, r
							}
							return e.apply(n, s([this.value()], arguments))
						})
					}), n
				}

				function qu() {}

				function Vu(n) {
					return We(n) ? j($e(n)) : ir(n)
				}

				function Ku() {
					return []
				}

				function Gu() {
					return false
				}
				En = null == En ? Zn : it.defaults(Zn.Object(), En, it.pick(Zn, Un));
				var Hu = En.Array,
					Ju = En.Date,
					Yu = En.Error,
					Qu = En.Function,
					Xu = En.Math,
					ni = En.Object,
					ti = En.RegExp,
					ri = En.String,
					ei = En.TypeError,
					ui = Hu.prototype,
					ii = ni.prototype,
					oi = En["__core-js_shared__"],
					fi = Qu.prototype.toString,
					ci = ii.hasOwnProperty,
					ai = 0,
					li = function() {
						var n = /[^.]+$/.exec(oi && oi.keys && oi.keys.IE_PROTO || "");
						return n ? "Symbol(src)_1." + n : ""
					}(),
					si = ii.toString,
					hi = fi.call(ni),
					pi = Zn._,
					_i = ti("^" + fi.call(ci).replace(on, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
					vi = Kn ? En.Buffer : F,
					gi = En.Symbol,
					di = En.Uint8Array,
					yi = vi ? vi.f : F,
					bi = U(ni.getPrototypeOf, ni),
					xi = ni.create,
					ji = ii.propertyIsEnumerable,
					wi = ui.splice,
					mi = gi ? gi.isConcatSpreadable : F,
					Ai = gi ? gi.iterator : F,
					ki = gi ? gi.toStringTag : F,
					Ei = function() {
						try {
							var n = Ae(ni, "defineProperty");
							return n({}, "", {}), n
						} catch (n) {}
					}(),
					Oi = En.clearTimeout !== Zn.clearTimeout && En.clearTimeout,
					Si = Ju && Ju.now !== Zn.Date.now && Ju.now,
					Ii = En.setTimeout !== Zn.setTimeout && En.setTimeout,
					Ri = Xu.ceil,
					zi = Xu.floor,
					Wi = ni.getOwnPropertySymbols,
					Bi = vi ? vi.isBuffer : F,
					Li = En.isFinite,
					Ui = ui.join,
					Ci = U(ni.keys, ni),
					Di = Xu.max,
					Mi = Xu.min,
					Ti = Ju.now,
					$i = En.parseInt,
					Fi = Xu.random,
					Ni = ui.reverse,
					Pi = Ae(En, "DataView"),
					Zi = Ae(En, "Map"),
					qi = Ae(En, "Promise"),
					Vi = Ae(En, "Set"),
					Ki = Ae(En, "WeakMap"),
					Gi = Ae(ni, "create"),
					Hi = Ki && new Ki,
					Ji = {},
					Yi = Fe(Pi),
					Qi = Fe(Zi),
					Xi = Fe(qi),
					no = Fe(Vi),
					to = Fe(Ki),
					ro = gi ? gi.prototype : F,
					eo = ro ? ro.valueOf : F,
					uo = ro ? ro.toString : F,
					io = function() {
						function n() {}
						return function(t) {
							return bu(t) ? xi ? xi(t) : (n.prototype = t, t = new n, n.prototype = F, t) : {}
						}
					}();
				On.templateSettings = {
					escape: Q,
					evaluate: X,
					interpolate: nn,
					variable: "",
					imports: {
						_: On
					}
				}, On.prototype = Sn.prototype, On.prototype.constructor = On, zn.prototype = io(Sn.prototype), zn.prototype.constructor = zn, Mn.prototype = io(Sn.prototype), Mn.prototype.constructor = Mn, Tn.prototype.clear = function() {
					this.__data__ = Gi ? Gi(null) : {}, this.size = 0
				}, Tn.prototype.delete = function(n) {
					return n = this.has(n) && delete this.__data__[n],
						this.size -= n ? 1 : 0, n
				}, Tn.prototype.get = function(n) {
					var t = this.__data__;
					return Gi ? (n = t[n], "__lodash_hash_undefined__" === n ? F : n) : ci.call(t, n) ? t[n] : F
				}, Tn.prototype.has = function(n) {
					var t = this.__data__;
					return Gi ? t[n] !== F : ci.call(t, n)
				}, Tn.prototype.set = function(n, t) {
					var r = this.__data__;
					return this.size += this.has(n) ? 0 : 1, r[n] = Gi && t === F ? "__lodash_hash_undefined__" : t, this
				}, Nn.prototype.clear = function() {
					this.__data__ = [], this.size = 0
				}, Nn.prototype.delete = function(n) {
					var t = this.__data__;
					return n = lt(t, n), !(0 > n) && (n == t.length - 1 ? t.pop() : wi.call(t, n, 1),
						--this.size, true)
				}, Nn.prototype.get = function(n) {
					var t = this.__data__;
					return n = lt(t, n), 0 > n ? F : t[n][1]
				}, Nn.prototype.has = function(n) {
					return -1 < lt(this.__data__, n)
				}, Nn.prototype.set = function(n, t) {
					var r = this.__data__,
						e = lt(r, n);
					return 0 > e ? (++this.size, r.push([n, t])) : r[e][1] = t, this
				}, Pn.prototype.clear = function() {
					this.size = 0, this.__data__ = {
						hash: new Tn,
						map: new(Zi || Nn),
						string: new Tn
					}
				}, Pn.prototype.delete = function(n) {
					return n = we(this, n).delete(n), this.size -= n ? 1 : 0, n
				}, Pn.prototype.get = function(n) {
					return we(this, n).get(n);
				}, Pn.prototype.has = function(n) {
					return we(this, n).has(n)
				}, Pn.prototype.set = function(n, t) {
					var r = we(this, n),
						e = r.size;
					return r.set(n, t), this.size += r.size == e ? 0 : 1, this
				}, qn.prototype.add = qn.prototype.push = function(n) {
					return this.__data__.set(n, "__lodash_hash_undefined__"), this
				}, qn.prototype.has = function(n) {
					return this.__data__.has(n)
				}, Vn.prototype.clear = function() {
					this.__data__ = new Nn, this.size = 0
				}, Vn.prototype.delete = function(n) {
					var t = this.__data__;
					return n = t.delete(n), this.size = t.size, n
				}, Vn.prototype.get = function(n) {
					return this.__data__.get(n)
				}, Vn.prototype.has = function(n) {
					return this.__data__.has(n)
				}, Vn.prototype.set = function(n, t) {
					var r = this.__data__;
					if (r instanceof Nn) {
						var e = r.__data__;
						if (!Zi || 199 > e.length) return e.push([n, t]), this.size = ++r.size, this;
						r = this.__data__ = new Pn(e)
					}
					return r.set(n, t), this.size = r.size, this
				};
				var oo = Zr(Et),
					fo = Zr(Ot, true),
					co = qr(),
					ao = qr(true),
					lo = Hi ? function(n, t) {
						return Hi.set(n, t), n
					} : Nu,
					so = Ei ? function(n, t) {
						return Ei(n, "toString", {
							configurable: true,
							enumerable: false,
							value: Fu(t),
							writable: true
						})
					} : Nu,
					ho = Oi || function(n) {
						return Zn.clearTimeout(n)
					},
					po = Vi && 1 / D(new Vi([, -0]))[1] == N ? function(n) {
						return new Vi(n)
					} : qu,
					_o = Hi ? function(n) {
						return Hi.get(n)
					} : qu,
					vo = Wi ? function(n) {
						return null == n ? [] : (n = ni(n), f(Wi(n), function(t) {
							return ji.call(n, t)
						}))
					} : Ku,
					go = Wi ? function(n) {
						for (var t = []; n;) s(t, vo(n)), n = bi(n);
						return t
					} : Ku,
					yo = zt;
				(Pi && "[object DataView]" != yo(new Pi(new ArrayBuffer(1))) || Zi && "[object Map]" != yo(new Zi) || qi && "[object Promise]" != yo(qi.resolve()) || Vi && "[object Set]" != yo(new Vi) || Ki && "[object WeakMap]" != yo(new Ki)) && (yo = function(n) {
					var t = zt(n);
					if (n = (n = "[object Object]" == t ? n.constructor : F) ? Fe(n) : "") switch (n) {
						case Yi:
							return "[object DataView]";
						case Qi:
							return "[object Map]";
						case Xi:
							return "[object Promise]";
						case no:
							return "[object Set]";
						case to:
							return "[object WeakMap]"
					}
					return t
				});
				var bo = oi ? gu : Gu,
					xo = Me(lo),
					jo = Ii || function(n, t) {
						return Zn.setTimeout(n, t)
					},
					wo = Me(so),
					mo = function(n) {
						n = lu(n, function(n) {
							return 500 === t.size && t.clear(), n
						});
						var t = n.cache;
						return n
					}(function(n) {
						var t = [];
						return en.test(n) && t.push(""), n.replace(un, function(n, r, e, u) {
							t.push(e ? u.replace(vn, "$1") : r || n)
						}), t
					}),
					Ao = lr(function(n, t) {
						return _u(n) ? jt(n, kt(t, 1, _u, true)) : []
					}),
					ko = lr(function(n, t) {
						var r = Ge(t);
						return _u(r) && (r = F), _u(n) ? jt(n, kt(t, 1, _u, true), je(r, 2)) : []
					}),
					Eo = lr(function(n, t) {
						var r = Ge(t);
						return _u(r) && (r = F), _u(n) ? jt(n, kt(t, 1, _u, true), F, r) : []
					}),
					Oo = lr(function(n) {
						var t = l(n, Sr);
						return t.length && t[0] === n[0] ? Ut(t) : []
					}),
					So = lr(function(n) {
						var t = Ge(n),
							r = l(n, Sr);
						return t === Ge(r) ? t = F : r.pop(), r.length && r[0] === n[0] ? Ut(r, je(t, 2)) : []
					}),
					Io = lr(function(n) {
						var t = Ge(n),
							r = l(n, Sr);
						return (t = typeof t == "function" ? t : F) && r.pop(),
							r.length && r[0] === n[0] ? Ut(r, F, t) : []
					}),
					Ro = lr(He),
					zo = ge(function(n, t) {
						var r = null == n ? 0 : n.length,
							e = vt(n, t);
						return fr(n, l(t, function(n) {
							return Re(n, r) ? +n : n
						}).sort(Ur)), e
					}),
					Wo = lr(function(n) {
						return wr(kt(n, 1, _u, true))
					}),
					Bo = lr(function(n) {
						var t = Ge(n);
						return _u(t) && (t = F), wr(kt(n, 1, _u, true), je(t, 2))
					}),
					Lo = lr(function(n) {
						var t = Ge(n),
							t = typeof t == "function" ? t : F;
						return wr(kt(n, 1, _u, true), F, t)
					}),
					Uo = lr(function(n, t) {
						return _u(n) ? jt(n, t) : []
					}),
					Co = lr(function(n) {
						return Er(f(n, _u))
					}),
					Do = lr(function(n) {
						var t = Ge(n);
						return _u(t) && (t = F),
							Er(f(n, _u), je(t, 2))
					}),
					Mo = lr(function(n) {
						var t = Ge(n),
							t = typeof t == "function" ? t : F;
						return Er(f(n, _u), F, t)
					}),
					To = lr(Ye),
					$o = lr(function(n) {
						var t = n.length,
							t = 1 < t ? n[t - 1] : F,
							t = typeof t == "function" ? (n.pop(), t) : F;
						return Qe(n, t)
					}),
					Fo = ge(function(n) {
						function t(t) {
							return vt(t, n)
						}
						var r = n.length,
							e = r ? n[0] : 0,
							u = this.__wrapped__;
						return !(1 < r || this.__actions__.length) && u instanceof Mn && Re(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({
							func: nu,
							args: [t],
							thisArg: F
						}), new zn(u, this.__chain__).thru(function(n) {
							return r && !n.length && n.push(F),
								n
						})) : this.thru(t)
					}),
					No = Nr(function(n, t, r) {
						ci.call(n, r) ? ++n[r] : _t(n, r, 1)
					}),
					Po = Yr(Ze),
					Zo = Yr(qe),
					qo = Nr(function(n, t, r) {
						ci.call(n, r) ? n[r].push(t) : _t(n, r, [t])
					}),
					Vo = lr(function(n, t, e) {
						var u = -1,
							i = typeof t == "function",
							o = pu(n) ? Hu(n.length) : [];
						return oo(n, function(n) {
							o[++u] = i ? r(t, n, e) : Dt(n, t, e)
						}), o
					}),
					Ko = Nr(function(n, t, r) {
						_t(n, r, t)
					}),
					Go = Nr(function(n, t, r) {
						n[r ? 0 : 1].push(t)
					}, function() {
						return [
							[],
							[]
						]
					}),
					Ho = lr(function(n, t) {
						if (null == n) return [];
						var r = t.length;
						return 1 < r && ze(n, t[0], t[1]) ? t = [] : 2 < r && ze(t[0], t[1], t[2]) && (t = [t[0]]),
							rr(n, kt(t, 1), [])
					}),
					Jo = Si || function() {
						return Zn.Date.now()
					},
					Yo = lr(function(n, t, r) {
						var e = 1;
						if (r.length) var u = C(r, xe(Yo)),
							e = 32 | e;
						return le(n, e, t, r, u)
					}),
					Qo = lr(function(n, t, r) {
						var e = 3;
						if (r.length) var u = C(r, xe(Qo)),
							e = 32 | e;
						return le(t, e, n, r, u)
					}),
					Xo = lr(function(n, t) {
						return xt(n, 1, t)
					}),
					nf = lr(function(n, t, r) {
						return xt(n, Iu(t) || 0, r)
					});
				lu.Cache = Pn;
				var tf = lr(function(n, t) {
						t = 1 == t.length && af(t[0]) ? l(t[0], S(je())) : l(kt(t, 1), S(je()));
						var e = t.length;
						return lr(function(u) {
							for (var i = -1, o = Mi(u.length, e); ++i < o;) u[i] = t[i].call(this, u[i]);
							return r(n, this, u)
						})
					}),
					rf = lr(function(n, t) {
						return le(n, 32, F, t, C(t, xe(rf)))
					}),
					ef = lr(function(n, t) {
						return le(n, 64, F, t, C(t, xe(ef)))
					}),
					uf = ge(function(n, t) {
						return le(n, 256, F, F, F, t)
					}),
					of = oe(Wt),
					ff = oe(function(n, t) {
						return n >= t
					}),
					cf = Mt(function() {
						return arguments
					}()) ? Mt : function(n) {
						return xu(n) && ci.call(n, "callee") && !ji.call(n, "callee")
					},
					af = Hu.isArray,
					lf = Hn ? S(Hn) : Tt,
					sf = Bi || Gu,
					hf = Jn ? S(Jn) : $t,
					pf = Yn ? S(Yn) : Nt,
					_f = Qn ? S(Qn) : qt,
					vf = Xn ? S(Xn) : Vt,
					gf = nt ? S(nt) : Kt,
					df = oe(Jt),
					yf = oe(function(n, t) {
						return n <= t
					}),
					bf = Pr(function(n, t) {
						if (Le(t) || pu(t)) Tr(t, Lu(t), n);
						else
							for (var r in t) ci.call(t, r) && at(n, r, t[r])
					}),
					xf = Pr(function(n, t) {
						Tr(t, Uu(t), n)
					}),
					jf = Pr(function(n, t, r, e) {
						Tr(t, Uu(t), n, e)
					}),
					wf = Pr(function(n, t, r, e) {
						Tr(t, Lu(t), n, e)
					}),
					mf = ge(vt),
					Af = lr(function(n) {
						return n.push(F, se), r(jf, F, n)
					}),
					kf = lr(function(n) {
						return n.push(F, he), r(Rf, F, n)
					}),
					Ef = ne(function(n, t, r) {
						n[t] = r
					}, Fu(Nu)),
					Of = ne(function(n, t, r) {
						ci.call(n, t) ? n[t].push(r) : n[t] = [r]
					}, je),
					Sf = lr(Dt),
					If = Pr(function(n, t, r) {
						nr(n, t, r)
					}),
					Rf = Pr(function(n, t, r, e) {
						nr(n, t, r, e)
					}),
					zf = ge(function(n, t) {
						var r = {};
						if (null == n) return r;
						var e = false;
						t = l(t, function(t) {
							return t = Rr(t, n), e || (e = 1 < t.length), t
						}), Tr(n, ye(n), r), e && (r = dt(r, 7, pe));
						for (var u = t.length; u--;) mr(r, t[u]);
						return r
					}),
					Wf = ge(function(n, t) {
						return null == n ? {} : er(n, t)
					}),
					Bf = ae(Lu),
					Lf = ae(Uu),
					Uf = Gr(function(n, t, r) {
						return t = t.toLowerCase(), n + (r ? Mu(t) : t)
					}),
					Cf = Gr(function(n, t, r) {
						return n + (r ? "-" : "") + t.toLowerCase()
					}),
					Df = Gr(function(n, t, r) {
						return n + (r ? " " : "") + t.toLowerCase()
					}),
					Mf = Kr("toLowerCase"),
					Tf = Gr(function(n, t, r) {
						return n + (r ? "_" : "") + t.toLowerCase();
					}),
					$f = Gr(function(n, t, r) {
						return n + (r ? " " : "") + Nf(t)
					}),
					Ff = Gr(function(n, t, r) {
						return n + (r ? " " : "") + t.toUpperCase()
					}),
					Nf = Kr("toUpperCase"),
					Pf = lr(function(n, t) {
						try {
							return r(n, F, t)
						} catch (n) {
							return vu(n) ? n : new Yu(n)
						}
					}),
					Zf = ge(function(n, t) {
						return u(t, function(t) {
							t = $e(t), _t(n, t, Yo(n[t], n))
						}), n
					}),
					qf = Qr(),
					Vf = Qr(true),
					Kf = lr(function(n, t) {
						return function(r) {
							return Dt(r, n, t)
						}
					}),
					Gf = lr(function(n, t) {
						return function(r) {
							return Dt(n, r, t)
						}
					}),
					Hf = re(l),
					Jf = re(o),
					Yf = re(_),
					Qf = ie(),
					Xf = ie(true),
					nc = te(function(n, t) {
						return n + t
					}, 0),
					tc = ce("ceil"),
					rc = te(function(n, t) {
						return n / t
					}, 1),
					ec = ce("floor"),
					uc = te(function(n, t) {
						return n * t
					}, 1),
					ic = ce("round"),
					oc = te(function(n, t) {
						return n - t
					}, 0);
				return On.after = function(n, t) {
						if (typeof t != "function") throw new ei("Expected a function");
						return n = Ou(n),
							function() {
								if (1 > --n) return t.apply(this, arguments)
							}
					}, On.ary = iu, On.assign = bf, On.assignIn = xf, On.assignInWith = jf, On.assignWith = wf, On.at = mf, On.before = ou, On.bind = Yo, On.bindAll = Zf, On.bindKey = Qo, On.castArray = function() {
						if (!arguments.length) return [];
						var n = arguments[0];
						return af(n) ? n : [n]
					},
					On.chain = Xe, On.chunk = function(n, t, r) {
						if (t = (r ? ze(n, t, r) : t === F) ? 1 : Di(Ou(t), 0), r = null == n ? 0 : n.length, !r || 1 > t) return [];
						for (var e = 0, u = 0, i = Hu(Ri(r / t)); e < r;) i[u++] = vr(n, e, e += t);
						return i
					}, On.compact = function(n) {
						for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) {
							var i = n[t];
							i && (u[e++] = i)
						}
						return u
					}, On.concat = function() {
						var n = arguments.length;
						if (!n) return [];
						for (var t = Hu(n - 1), r = arguments[0]; n--;) t[n - 1] = arguments[n];
						return s(af(r) ? Mr(r) : [r], kt(t, 1))
					}, On.cond = function(n) {
						var t = null == n ? 0 : n.length,
							e = je();
						return n = t ? l(n, function(n) {
							if ("function" != typeof n[1]) throw new ei("Expected a function");
							return [e(n[0]), n[1]]
						}) : [], lr(function(e) {
							for (var u = -1; ++u < t;) {
								var i = n[u];
								if (r(i[0], this, e)) return r(i[1], this, e)
							}
						})
					}, On.conforms = function(n) {
						return yt(dt(n, 1))
					}, On.constant = Fu, On.countBy = No, On.create = function(n, t) {
						var r = io(n);
						return null == t ? r : ht(r, t)
					}, On.curry = fu, On.curryRight = cu, On.debounce = au, On.defaults = Af, On.defaultsDeep = kf, On.defer = Xo, On.delay = nf, On.difference = Ao, On.differenceBy = ko, On.differenceWith = Eo, On.drop = function(n, t, r) {
						var e = null == n ? 0 : n.length;
						return e ? (t = r || t === F ? 1 : Ou(t), vr(n, 0 > t ? 0 : t, e)) : []
					}, On.dropRight = function(n, t, r) {
						var e = null == n ? 0 : n.length;
						return e ? (t = r || t === F ? 1 : Ou(t), t = e - t, vr(n, 0, 0 > t ? 0 : t)) : []
					}, On.dropRightWhile = function(n, t) {
						return n && n.length ? Ar(n, je(t, 3), true, true) : []
					}, On.dropWhile = function(n, t) {
						return n && n.length ? Ar(n, je(t, 3), true) : []
					}, On.fill = function(n, t, r, e) {
						var u = null == n ? 0 : n.length;
						if (!u) return [];
						for (r && typeof r != "number" && ze(n, t, r) && (r = 0, e = u), u = n.length, r = Ou(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === F || e > u ? u : Ou(e), 0 > e && (e += u), e = r > e ? 0 : Su(e); r < e;) n[r++] = t;
						return n
					}, On.filter = function(n, t) {
						return (af(n) ? f : At)(n, je(t, 3))
					}, On.flatMap = function(n, t) {
						return kt(uu(n, t), 1)
					}, On.flatMapDeep = function(n, t) {
						return kt(uu(n, t), N)
					}, On.flatMapDepth = function(n, t, r) {
						return r = r === F ? 1 : Ou(r), kt(uu(n, t), r)
					}, On.flatten = Ve, On.flattenDeep = function(n) {
						return (null == n ? 0 : n.length) ? kt(n, N) : []
					}, On.flattenDepth = function(n, t) {
						return null != n && n.length ? (t = t === F ? 1 : Ou(t), kt(n, t)) : []
					}, On.flip = function(n) {
						return le(n, 512)
					}, On.flow = qf, On.flowRight = Vf, On.fromPairs = function(n) {
						for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
							var u = n[t];
							e[u[0]] = u[1]
						}
						return e
					}, On.functions = function(n) {
						return null == n ? [] : St(n, Lu(n))
					}, On.functionsIn = function(n) {
						return null == n ? [] : St(n, Uu(n))
					}, On.groupBy = qo, On.initial = function(n) {
						return (null == n ? 0 : n.length) ? vr(n, 0, -1) : []
					}, On.intersection = Oo, On.intersectionBy = So, On.intersectionWith = Io, On.invert = Ef, On.invertBy = Of, On.invokeMap = Vo, On.iteratee = Pu, On.keyBy = Ko, On.keys = Lu, On.keysIn = Uu, On.map = uu, On.mapKeys = function(n, t) {
						var r = {};
						return t = je(t, 3), Et(n, function(n, e, u) {
							_t(r, t(n, e, u), n)
						}), r
					}, On.mapValues = function(n, t) {
						var r = {};
						return t = je(t, 3), Et(n, function(n, e, u) {
							_t(r, e, t(n, e, u))
						}), r
					}, On.matches = function(n) {
						return Qt(dt(n, 1))
					}, On.matchesProperty = function(n, t) {
						return Xt(n, dt(t, 1))
					}, On.memoize = lu, On.merge = If, On.mergeWith = Rf, On.method = Kf, On.methodOf = Gf, On.mixin = Zu, On.negate = su, On.nthArg = function(n) {
						return n = Ou(n), lr(function(t) {
							return tr(t, n)
						})
					}, On.omit = zf, On.omitBy = function(n, t) {
						return Cu(n, su(je(t)))
					}, On.once = function(n) {
						return ou(2, n)
					}, On.orderBy = function(n, t, r, e) {
						return null == n ? [] : (af(t) || (t = null == t ? [] : [t]),
							r = e ? F : r, af(r) || (r = null == r ? [] : [r]), rr(n, t, r))
					}, On.over = Hf, On.overArgs = tf, On.overEvery = Jf, On.overSome = Yf, On.partial = rf, On.partialRight = ef, On.partition = Go, On.pick = Wf, On.pickBy = Cu, On.property = Vu, On.propertyOf = function(n) {
						return function(t) {
							return null == n ? F : It(n, t)
						}
					}, On.pull = Ro, On.pullAll = He, On.pullAllBy = function(n, t, r) {
						return n && n.length && t && t.length ? or(n, t, je(r, 2)) : n
					}, On.pullAllWith = function(n, t, r) {
						return n && n.length && t && t.length ? or(n, t, F, r) : n
					}, On.pullAt = zo, On.range = Qf, On.rangeRight = Xf, On.rearg = uf, On.reject = function(n, t) {
						return (af(n) ? f : At)(n, su(je(t, 3)))
					}, On.remove = function(n, t) {
						var r = [];
						if (!n || !n.length) return r;
						var e = -1,
							u = [],
							i = n.length;
						for (t = je(t, 3); ++e < i;) {
							var o = n[e];
							t(o, e, n) && (r.push(o), u.push(e))
						}
						return fr(n, u), r
					}, On.rest = function(n, t) {
						if (typeof n != "function") throw new ei("Expected a function");
						return t = t === F ? t : Ou(t), lr(n, t)
					}, On.reverse = Je, On.sampleSize = function(n, t, r) {
						return t = (r ? ze(n, t, r) : t === F) ? 1 : Ou(t), (af(n) ? ot : hr)(n, t)
					}, On.set = function(n, t, r) {
						return null == n ? n : pr(n, t, r)
					}, On.setWith = function(n, t, r, e) {
						return e = typeof e == "function" ? e : F,
							null == n ? n : pr(n, t, r, e)
					}, On.shuffle = function(n) {
						return (af(n) ? ft : _r)(n)
					}, On.slice = function(n, t, r) {
						var e = null == n ? 0 : n.length;
						return e ? (r && typeof r != "number" && ze(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : Ou(t), r = r === F ? e : Ou(r)), vr(n, t, r)) : []
					}, On.sortBy = Ho, On.sortedUniq = function(n) {
						return n && n.length ? br(n) : []
					}, On.sortedUniqBy = function(n, t) {
						return n && n.length ? br(n, je(t, 2)) : []
					}, On.split = function(n, t, r) {
						return r && typeof r != "number" && ze(n, t, r) && (t = r = F), r = r === F ? 4294967295 : r >>> 0, r ? (n = zu(n)) && (typeof t == "string" || null != t && !_f(t)) && (t = jr(t), !t && Bn.test(n)) ? zr($(n), 0, r) : n.split(t, r) : []
					}, On.spread = function(n, t) {
						if (typeof n != "function") throw new ei("Expected a function");
						return t = null == t ? 0 : Di(Ou(t), 0), lr(function(e) {
							var u = e[t];
							return e = zr(e, 0, t), u && s(e, u), r(n, this, e)
						})
					}, On.tail = function(n) {
						var t = null == n ? 0 : n.length;
						return t ? vr(n, 1, t) : []
					}, On.take = function(n, t, r) {
						return n && n.length ? (t = r || t === F ? 1 : Ou(t), vr(n, 0, 0 > t ? 0 : t)) : []
					}, On.takeRight = function(n, t, r) {
						var e = null == n ? 0 : n.length;
						return e ? (t = r || t === F ? 1 : Ou(t), t = e - t, vr(n, 0 > t ? 0 : t, e)) : []
					}, On.takeRightWhile = function(n, t) {
						return n && n.length ? Ar(n, je(t, 3), false, true) : []
					}, On.takeWhile = function(n, t) {
						return n && n.length ? Ar(n, je(t, 3)) : []
					}, On.tap = function(n, t) {
						return t(n), n
					}, On.throttle = function(n, t, r) {
						var e = true,
							u = true;
						if (typeof n != "function") throw new ei("Expected a function");
						return bu(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), au(n, t, {
							leading: e,
							maxWait: t,
							trailing: u
						})
					}, On.thru = nu, On.toArray = ku, On.toPairs = Bf, On.toPairsIn = Lf, On.toPath = function(n) {
						return af(n) ? l(n, $e) : Au(n) ? [n] : Mr(mo(zu(n)))
					}, On.toPlainObject = Ru,
					On.transform = function(n, t, r) {
						var e = af(n),
							i = e || sf(n) || gf(n);
						if (t = je(t, 4), null == r) {
							var o = n && n.constructor;
							r = i ? e ? new o : [] : bu(n) && gu(o) ? io(bi(n)) : {}
						}
						return (i ? u : Et)(n, function(n, e, u) {
							return t(r, n, e, u)
						}), r
					}, On.unary = function(n) {
						return iu(n, 1)
					}, On.union = Wo, On.unionBy = Bo, On.unionWith = Lo, On.uniq = function(n) {
						return n && n.length ? wr(n) : []
					}, On.uniqBy = function(n, t) {
						return n && n.length ? wr(n, je(t, 2)) : []
					}, On.uniqWith = function(n, t) {
						return t = typeof t == "function" ? t : F, n && n.length ? wr(n, F, t) : []
					}, On.unset = function(n, t) {
						return null == n || mr(n, t);
					}, On.unzip = Ye, On.unzipWith = Qe, On.update = function(n, t, r) {
						return null == n ? n : pr(n, t, Ir(r)(It(n, t)), void 0)
					}, On.updateWith = function(n, t, r, e) {
						return e = typeof e == "function" ? e : F, null != n && (n = pr(n, t, Ir(r)(It(n, t)), e)), n
					}, On.values = Du, On.valuesIn = function(n) {
						return null == n ? [] : I(n, Uu(n))
					}, On.without = Uo, On.words = $u, On.wrap = function(n, t) {
						return rf(Ir(t), n)
					}, On.xor = Co, On.xorBy = Do, On.xorWith = Mo, On.zip = To, On.zipObject = function(n, t) {
						return Or(n || [], t || [], at)
					}, On.zipObjectDeep = function(n, t) {
						return Or(n || [], t || [], pr);
					}, On.zipWith = $o, On.entries = Bf, On.entriesIn = Lf, On.extend = xf, On.extendWith = jf, Zu(On, On), On.add = nc, On.attempt = Pf, On.camelCase = Uf, On.capitalize = Mu, On.ceil = tc, On.clamp = function(n, t, r) {
						return r === F && (r = t, t = F), r !== F && (r = Iu(r), r = r === r ? r : 0), t !== F && (t = Iu(t), t = t === t ? t : 0), gt(Iu(n), t, r)
					}, On.clone = function(n) {
						return dt(n, 4)
					}, On.cloneDeep = function(n) {
						return dt(n, 5)
					}, On.cloneDeepWith = function(n, t) {
						return t = typeof t == "function" ? t : F, dt(n, 5, t)
					}, On.cloneWith = function(n, t) {
						return t = typeof t == "function" ? t : F, dt(n, 4, t)
					},
					On.conformsTo = function(n, t) {
						return null == t || bt(n, t, Lu(t))
					}, On.deburr = Tu, On.defaultTo = function(n, t) {
						return null == n || n !== n ? t : n
					}, On.divide = rc, On.endsWith = function(n, t, r) {
						n = zu(n), t = jr(t);
						var e = n.length,
							e = r = r === F ? e : gt(Ou(r), 0, e);
						return r -= t.length, 0 <= r && n.slice(r, e) == t
					}, On.eq = hu, On.escape = function(n) {
						return (n = zu(n)) && Y.test(n) ? n.replace(H, et) : n
					}, On.escapeRegExp = function(n) {
						return (n = zu(n)) && fn.test(n) ? n.replace(on, "\\$&") : n
					}, On.every = function(n, t, r) {
						var e = af(n) ? o : wt;
						return r && ze(n, t, r) && (t = F), e(n, je(t, 3));
					}, On.find = Po, On.findIndex = Ze, On.findKey = function(n, t) {
						return v(n, je(t, 3), Et)
					}, On.findLast = Zo, On.findLastIndex = qe, On.findLastKey = function(n, t) {
						return v(n, je(t, 3), Ot)
					}, On.floor = ec, On.forEach = ru, On.forEachRight = eu, On.forIn = function(n, t) {
						return null == n ? n : co(n, je(t, 3), Uu)
					}, On.forInRight = function(n, t) {
						return null == n ? n : ao(n, je(t, 3), Uu)
					}, On.forOwn = function(n, t) {
						return n && Et(n, je(t, 3))
					}, On.forOwnRight = function(n, t) {
						return n && Ot(n, je(t, 3))
					}, On.get = Wu, On.gt = of, On.gte = ff, On.has = function(n, t) {
						return null != n && ke(n, t, Bt);
					}, On.hasIn = Bu, On.head = Ke, On.identity = Nu, On.includes = function(n, t, r, e) {
						return n = pu(n) ? n : Du(n), r = r && !e ? Ou(r) : 0, e = n.length, 0 > r && (r = Di(e + r, 0)), mu(n) ? r <= e && -1 < n.indexOf(t, r) : !!e && -1 < d(n, t, r)
					}, On.indexOf = function(n, t, r) {
						var e = null == n ? 0 : n.length;
						return e ? (r = null == r ? 0 : Ou(r), 0 > r && (r = Di(e + r, 0)), d(n, t, r)) : -1
					}, On.inRange = function(n, t, r) {
						return t = Eu(t), r === F ? (r = t, t = 0) : r = Eu(r), n = Iu(n), n >= Mi(t, r) && n < Di(t, r)
					}, On.invoke = Sf, On.isArguments = cf, On.isArray = af, On.isArrayBuffer = lf, On.isArrayLike = pu, On.isArrayLikeObject = _u,
					On.isBoolean = function(n) {
						return true === n || false === n || xu(n) && "[object Boolean]" == zt(n)
					}, On.isBuffer = sf, On.isDate = hf, On.isElement = function(n) {
						return xu(n) && 1 === n.nodeType && !wu(n)
					}, On.isEmpty = function(n) {
						if (null == n) return true;
						if (pu(n) && (af(n) || typeof n == "string" || typeof n.splice == "function" || sf(n) || gf(n) || cf(n))) return !n.length;
						var t = yo(n);
						if ("[object Map]" == t || "[object Set]" == t) return !n.size;
						if (Le(n)) return !Ht(n).length;
						for (var r in n)
							if (ci.call(n, r)) return false;
						return true
					}, On.isEqual = function(n, t) {
						return Ft(n, t);
					}, On.isEqualWith = function(n, t, r) {
						var e = (r = typeof r == "function" ? r : F) ? r(n, t) : F;
						return e === F ? Ft(n, t, F, r) : !!e
					}, On.isError = vu, On.isFinite = function(n) {
						return typeof n == "number" && Li(n)
					}, On.isFunction = gu, On.isInteger = du, On.isLength = yu, On.isMap = pf, On.isMatch = function(n, t) {
						return n === t || Pt(n, t, me(t))
					}, On.isMatchWith = function(n, t, r) {
						return r = typeof r == "function" ? r : F, Pt(n, t, me(t), r)
					}, On.isNaN = function(n) {
						return ju(n) && n != +n
					}, On.isNative = function(n) {
						if (bo(n)) throw new Yu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
						return Zt(n)
					}, On.isNil = function(n) {
						return null == n
					}, On.isNull = function(n) {
						return null === n
					}, On.isNumber = ju, On.isObject = bu, On.isObjectLike = xu, On.isPlainObject = wu, On.isRegExp = _f, On.isSafeInteger = function(n) {
						return du(n) && -9007199254740991 <= n && 9007199254740991 >= n
					}, On.isSet = vf, On.isString = mu, On.isSymbol = Au, On.isTypedArray = gf, On.isUndefined = function(n) {
						return n === F
					}, On.isWeakMap = function(n) {
						return xu(n) && "[object WeakMap]" == yo(n)
					}, On.isWeakSet = function(n) {
						return xu(n) && "[object WeakSet]" == zt(n)
					}, On.join = function(n, t) {
						return null == n ? "" : Ui.call(n, t)
					}, On.kebabCase = Cf, On.last = Ge, On.lastIndexOf = function(n, t, r) {
						var e = null == n ? 0 : n.length;
						if (!e) return -1;
						var u = e;
						if (r !== F && (u = Ou(r), u = 0 > u ? Di(e + u, 0) : Mi(u, e - 1)), t === t) {
							for (r = u + 1; r-- && n[r] !== t;);
							n = r
						} else n = g(n, b, u, true);
						return n
					}, On.lowerCase = Df, On.lowerFirst = Mf, On.lt = df, On.lte = yf, On.max = function(n) {
						return n && n.length ? mt(n, Nu, Wt) : F
					}, On.maxBy = function(n, t) {
						return n && n.length ? mt(n, je(t, 2), Wt) : F
					}, On.mean = function(n) {
						return x(n, Nu)
					}, On.meanBy = function(n, t) {
						return x(n, je(t, 2))
					}, On.min = function(n) {
						return n && n.length ? mt(n, Nu, Jt) : F
					}, On.minBy = function(n, t) {
						return n && n.length ? mt(n, je(t, 2), Jt) : F
					}, On.stubArray = Ku, On.stubFalse = Gu, On.stubObject = function() {
						return {}
					}, On.stubString = function() {
						return ""
					}, On.stubTrue = function() {
						return true
					}, On.multiply = uc, On.nth = function(n, t) {
						return n && n.length ? tr(n, Ou(t)) : F
					}, On.noConflict = function() {
						return Zn._ === this && (Zn._ = pi), this
					}, On.noop = qu, On.now = Jo, On.pad = function(n, t, r) {
						n = zu(n);
						var e = (t = Ou(t)) ? T(n) : 0;
						return !t || e >= t ? n : (t = (t - e) / 2, ee(zi(t), r) + n + ee(Ri(t), r))
					}, On.padEnd = function(n, t, r) {
						n = zu(n);
						var e = (t = Ou(t)) ? T(n) : 0;
						return t && e < t ? n + ee(t - e, r) : n
					}, On.padStart = function(n, t, r) {
						n = zu(n);
						var e = (t = Ou(t)) ? T(n) : 0;
						return t && e < t ? ee(t - e, r) + n : n
					}, On.parseInt = function(n, t, r) {
						return r || null == t ? t = 0 : t && (t = +t), $i(zu(n).replace(an, ""), t || 0)
					}, On.random = function(n, t, r) {
						if (r && typeof r != "boolean" && ze(n, t, r) && (t = r = F), r === F && (typeof t == "boolean" ? (r = t, t = F) : typeof n == "boolean" && (r = n, n = F)), n === F && t === F ? (n = 0, t = 1) : (n = Eu(n), t === F ? (t = n, n = 0) : t = Eu(t)), n > t) {
							var e = n;
							n = t, t = e
						}
						return r || n % 1 || t % 1 ? (r = Fi(), Mi(n + r * (t - n + $n("1e-" + ((r + "").length - 1))), t)) : cr(n, t);
					}, On.reduce = function(n, t, r) {
						var e = af(n) ? h : m,
							u = 3 > arguments.length;
						return e(n, je(t, 4), r, u, oo)
					}, On.reduceRight = function(n, t, r) {
						var e = af(n) ? p : m,
							u = 3 > arguments.length;
						return e(n, je(t, 4), r, u, fo)
					}, On.repeat = function(n, t, r) {
						return t = (r ? ze(n, t, r) : t === F) ? 1 : Ou(t), ar(zu(n), t)
					}, On.replace = function() {
						var n = arguments,
							t = zu(n[0]);
						return 3 > n.length ? t : t.replace(n[1], n[2])
					}, On.result = function(n, t, r) {
						t = Rr(t, n);
						var e = -1,
							u = t.length;
						for (u || (u = 1, n = F); ++e < u;) {
							var i = null == n ? F : n[$e(t[e])];
							i === F && (e = u, i = r), n = gu(i) ? i.call(n) : i;
						}
						return n
					}, On.round = ic, On.runInContext = w, On.sample = function(n) {
						return (af(n) ? tt : sr)(n)
					}, On.size = function(n) {
						if (null == n) return 0;
						if (pu(n)) return mu(n) ? T(n) : n.length;
						var t = yo(n);
						return "[object Map]" == t || "[object Set]" == t ? n.size : Ht(n).length
					}, On.snakeCase = Tf, On.some = function(n, t, r) {
						var e = af(n) ? _ : gr;
						return r && ze(n, t, r) && (t = F), e(n, je(t, 3))
					}, On.sortedIndex = function(n, t) {
						return dr(n, t)
					}, On.sortedIndexBy = function(n, t, r) {
						return yr(n, t, je(r, 2))
					}, On.sortedIndexOf = function(n, t) {
						var r = null == n ? 0 : n.length;
						if (r) {
							var e = dr(n, t);
							if (e < r && hu(n[e], t)) return e
						}
						return -1
					}, On.sortedLastIndex = function(n, t) {
						return dr(n, t, true)
					}, On.sortedLastIndexBy = function(n, t, r) {
						return yr(n, t, je(r, 2), true)
					}, On.sortedLastIndexOf = function(n, t) {
						if (null == n ? 0 : n.length) {
							var r = dr(n, t, true) - 1;
							if (hu(n[r], t)) return r
						}
						return -1
					}, On.startCase = $f, On.startsWith = function(n, t, r) {
						return n = zu(n), r = null == r ? 0 : gt(Ou(r), 0, n.length), t = jr(t), n.slice(r, r + t.length) == t
					}, On.subtract = oc, On.sum = function(n) {
						return n && n.length ? k(n, Nu) : 0
					}, On.sumBy = function(n, t) {
						return n && n.length ? k(n, je(t, 2)) : 0;
					}, On.template = function(n, t, r) {
						var e = On.templateSettings;
						r && ze(n, t, r) && (t = F), n = zu(n), t = jf({}, t, e, se), r = jf({}, t.imports, e.imports, se);
						var u, i, o = Lu(r),
							f = I(r, o),
							c = 0;
						r = t.interpolate || An;
						var a = "__p+='";
						r = ti((t.escape || An).source + "|" + r.source + "|" + (r === nn ? gn : An).source + "|" + (t.evaluate || An).source + "|$", "g");
						var l = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
						if (n.replace(r, function(t, r, e, o, f, l) {
								return e || (e = o), a += n.slice(c, l).replace(kn, B), r && (u = true, a += "'+__e(" + r + ")+'"), f && (i = true, a += "';" + f + ";\n__p+='"),
									e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + t.length, t
							}), a += "';", (t = t.variable) || (a = "with(obj){" + a + "}"), a = (i ? a.replace(q, "") : a).replace(V, "$1").replace(K, "$1;"), a = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", t = Pf(function() {
								return Qu(o, l + "return " + a).apply(F, f)
							}), t.source = a, vu(t)) throw t;
						return t
					}, On.times = function(n, t) {
						if (n = Ou(n), 1 > n || 9007199254740991 < n) return [];
						var r = 4294967295,
							e = Mi(n, 4294967295);
						for (t = je(t), n -= 4294967295, e = E(e, t); ++r < n;) t(r);
						return e
					}, On.toFinite = Eu, On.toInteger = Ou, On.toLength = Su, On.toLower = function(n) {
						return zu(n).toLowerCase()
					}, On.toNumber = Iu, On.toSafeInteger = function(n) {
						return n ? gt(Ou(n), -9007199254740991, 9007199254740991) : 0 === n ? n : 0
					}, On.toString = zu, On.toUpper = function(n) {
						return zu(n).toUpperCase()
					}, On.trim = function(n, t, r) {
						return (n = zu(n)) && (r || t === F) ? n.replace(cn, "") : n && (t = jr(t)) ? (n = $(n), r = $(t), t = z(n, r), r = W(n, r) + 1, zr(n, t, r).join("")) : n;
					}, On.trimEnd = function(n, t, r) {
						return (n = zu(n)) && (r || t === F) ? n.replace(ln, "") : n && (t = jr(t)) ? (n = $(n), t = W(n, $(t)) + 1, zr(n, 0, t).join("")) : n
					}, On.trimStart = function(n, t, r) {
						return (n = zu(n)) && (r || t === F) ? n.replace(an, "") : n && (t = jr(t)) ? (n = $(n), t = z(n, $(t)), zr(n, t).join("")) : n
					}, On.truncate = function(n, t) {
						var r = 30,
							e = "...";
						if (bu(t)) var u = "separator" in t ? t.separator : u,
							r = "length" in t ? Ou(t.length) : r,
							e = "omission" in t ? jr(t.omission) : e;
						n = zu(n);
						var i = n.length;
						if (Bn.test(n)) var o = $(n),
							i = o.length;
						if (r >= i) return n;
						if (i = r - T(e), 1 > i) return e;
						if (r = o ? zr(o, 0, i).join("") : n.slice(0, i), u === F) return r + e;
						if (o && (i += r.length - i), _f(u)) {
							if (n.slice(i).search(u)) {
								var f = r;
								for (u.global || (u = ti(u.source, zu(dn.exec(u)) + "g")), u.lastIndex = 0; o = u.exec(f);) var c = o.index;
								r = r.slice(0, c === F ? i : c)
							}
						} else n.indexOf(jr(u), i) != i && (u = r.lastIndexOf(u), -1 < u && (r = r.slice(0, u)));
						return r + e
					}, On.unescape = function(n) {
						return (n = zu(n)) && J.test(n) ? n.replace(G, ut) : n
					}, On.uniqueId = function(n) {
						var t = ++ai;
						return zu(n) + t
					}, On.upperCase = Ff, On.upperFirst = Nf, On.each = ru, On.eachRight = eu, On.first = Ke,
					Zu(On, function() {
						var n = {};
						return Et(On, function(t, r) {
							ci.call(On.prototype, r) || (n[r] = t)
						}), n
					}(), {
						chain: false
					}), On.VERSION = "4.17.4", u("bind bindKey curry curryRight partial partialRight".split(" "), function(n) {
						On[n].placeholder = On
					}), u(["drop", "take"], function(n, t) {
						Mn.prototype[n] = function(r) {
							r = r === F ? 1 : Di(Ou(r), 0);
							var e = this.__filtered__ && !t ? new Mn(this) : this.clone();
							return e.__filtered__ ? e.__takeCount__ = Mi(r, e.__takeCount__) : e.__views__.push({
								size: Mi(r, 4294967295),
								type: n + (0 > e.__dir__ ? "Right" : "")
							}), e
						}, Mn.prototype[n + "Right"] = function(t) {
							return this.reverse()[n](t).reverse()
						}
					}), u(["filter", "map", "takeWhile"], function(n, t) {
						var r = t + 1,
							e = 1 == r || 3 == r;
						Mn.prototype[n] = function(n) {
							var t = this.clone();
							return t.__iteratees__.push({
								iteratee: je(n, 3),
								type: r
							}), t.__filtered__ = t.__filtered__ || e, t
						}
					}), u(["head", "last"], function(n, t) {
						var r = "take" + (t ? "Right" : "");
						Mn.prototype[n] = function() {
							return this[r](1).value()[0]
						}
					}), u(["initial", "tail"], function(n, t) {
						var r = "drop" + (t ? "" : "Right");
						Mn.prototype[n] = function() {
							return this.__filtered__ ? new Mn(this) : this[r](1);
						}
					}), Mn.prototype.compact = function() {
						return this.filter(Nu)
					}, Mn.prototype.find = function(n) {
						return this.filter(n).head()
					}, Mn.prototype.findLast = function(n) {
						return this.reverse().find(n)
					}, Mn.prototype.invokeMap = lr(function(n, t) {
						return typeof n == "function" ? new Mn(this) : this.map(function(r) {
							return Dt(r, n, t)
						})
					}), Mn.prototype.reject = function(n) {
						return this.filter(su(je(n)))
					}, Mn.prototype.slice = function(n, t) {
						n = Ou(n);
						var r = this;
						return r.__filtered__ && (0 < n || 0 > t) ? new Mn(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)),
							t !== F && (t = Ou(t), r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r)
					}, Mn.prototype.takeRightWhile = function(n) {
						return this.reverse().takeWhile(n).reverse()
					}, Mn.prototype.toArray = function() {
						return this.take(4294967295)
					}, Et(Mn.prototype, function(n, t) {
						var r = /^(?:filter|find|map|reject)|While$/.test(t),
							e = /^(?:head|last)$/.test(t),
							u = On[e ? "take" + ("last" == t ? "Right" : "") : t],
							i = e || /^find/.test(t);
						u && (On.prototype[t] = function() {
							function t(n) {
								return n = u.apply(On, s([n], f)), e && h ? n[0] : n
							}
							var o = this.__wrapped__,
								f = e ? [1] : arguments,
								c = o instanceof Mn,
								a = f[0],
								l = c || af(o);
							l && r && typeof a == "function" && 1 != a.length && (c = l = false);
							var h = this.__chain__,
								p = !!this.__actions__.length,
								a = i && !h,
								c = c && !p;
							return !i && l ? (o = c ? o : new Mn(this), o = n.apply(o, f), o.__actions__.push({
								func: nu,
								args: [t],
								thisArg: F
							}), new zn(o, h)) : a && c ? n.apply(this, f) : (o = this.thru(t), a ? e ? o.value()[0] : o.value() : o)
						})
					}), u("pop push shift sort splice unshift".split(" "), function(n) {
						var t = ui[n],
							r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
							e = /^(?:pop|shift)$/.test(n);
						On.prototype[n] = function() {
							var n = arguments;
							if (e && !this.__chain__) {
								var u = this.value();
								return t.apply(af(u) ? u : [], n)
							}
							return this[r](function(r) {
								return t.apply(af(r) ? r : [], n)
							})
						}
					}), Et(Mn.prototype, function(n, t) {
						var r = On[t];
						if (r) {
							var e = r.name + "";
							(Ji[e] || (Ji[e] = [])).push({
								name: t,
								func: r
							})
						}
					}), Ji[Xr(F, 2).name] = [{
						name: "wrapper",
						func: F
					}], Mn.prototype.clone = function() {
						var n = new Mn(this.__wrapped__);
						return n.__actions__ = Mr(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Mr(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Mr(this.__views__),
							n
					}, Mn.prototype.reverse = function() {
						if (this.__filtered__) {
							var n = new Mn(this);
							n.__dir__ = -1, n.__filtered__ = true
						} else n = this.clone(), n.__dir__ *= -1;
						return n
					}, Mn.prototype.value = function() {
						var n, t = this.__wrapped__.value(),
							r = this.__dir__,
							e = af(t),
							u = 0 > r,
							i = e ? t.length : 0;
						n = i;
						for (var o = this.__views__, f = 0, c = -1, a = o.length; ++c < a;) {
							var l = o[c],
								s = l.size;
							switch (l.type) {
								case "drop":
									f += s;
									break;
								case "dropRight":
									n -= s;
									break;
								case "take":
									n = Mi(n, f + s);
									break;
								case "takeRight":
									f = Di(f, n - s)
							}
						}
						if (n = {
								start: f,
								end: n
							}, o = n.start, f = n.end, n = f - o,
							o = u ? f : o - 1, f = this.__iteratees__, c = f.length, a = 0, l = Mi(n, this.__takeCount__), !e || !u && i == n && l == n) return kr(t, this.__actions__);
						e = [];
						n: for (; n-- && a < l;) {
							for (o += r, u = -1, i = t[o]; ++u < c;) {
								var h = f[u],
									s = h.type,
									h = (0, h.iteratee)(i);
								if (2 == s) i = h;
								else if (!h) {
									if (1 == s) continue n;
									break n
								}
							}
							e[a++] = i
						}
						return e
					}, On.prototype.at = Fo, On.prototype.chain = function() {
						return Xe(this)
					}, On.prototype.commit = function() {
						return new zn(this.value(), this.__chain__)
					}, On.prototype.next = function() {
						this.__values__ === F && (this.__values__ = ku(this.value()));
						var n = this.__index__ >= this.__values__.length;
						return {
							done: n,
							value: n ? F : this.__values__[this.__index__++]
						}
					}, On.prototype.plant = function(n) {
						for (var t, r = this; r instanceof Sn;) {
							var e = Pe(r);
							e.__index__ = 0, e.__values__ = F, t ? u.__wrapped__ = e : t = e;
							var u = e,
								r = r.__wrapped__
						}
						return u.__wrapped__ = n, t
					}, On.prototype.reverse = function() {
						var n = this.__wrapped__;
						return n instanceof Mn ? (this.__actions__.length && (n = new Mn(this)), n = n.reverse(), n.__actions__.push({
							func: nu,
							args: [Je],
							thisArg: F
						}), new zn(n, this.__chain__)) : this.thru(Je);
					}, On.prototype.toJSON = On.prototype.valueOf = On.prototype.value = function() {
						return kr(this.__wrapped__, this.__actions__)
					}, On.prototype.first = On.prototype.head, Ai && (On.prototype[Ai] = tu), On
			}();
		typeof define == "function" && typeof define.amd == "object" && define.amd ? (Zn._ = it, define(function() {
			return it
		})) : Vn ? ((Vn.exports = it)._ = it, qn._ = it) : Zn._ = it
	}).call(window);


	//async
	(function(global, factory) {
		typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
			typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.async = global.async || {})));
	}(window, (function(exports) {
		'use strict';

		function slice(arrayLike, start) {
			start = start | 0;
			var newLen = Math.max(arrayLike.length - start, 0);
			var newArr = Array(newLen);
			for (var idx = 0; idx < newLen; idx++) {
				newArr[idx] = arrayLike[start + idx];
			}
			return newArr;
		}

		var initialParams = function(fn) {
			return function( /*...args, callback*/ ) {
				var args = slice(arguments);
				var callback = args.pop();
				fn.call(this, args, callback);
			};
		};

		/**
		 * Checks if `value` is the
		 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
		 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
		 * @example
		 *
		 * _.isObject({});
		 * // => true
		 *
		 * _.isObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isObject(_.noop);
		 * // => true
		 *
		 * _.isObject(null);
		 * // => false
		 */
		function isObject(value) {
			var type = typeof value;
			return value != null && (type == 'object' || type == 'function');
		}

		var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
		var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

		function fallback(fn) {
			setTimeout(fn, 0);
		}

		function wrap(defer) {
			return function(fn /*, ...args*/ ) {
				var args = slice(arguments, 1);
				defer(function() {
					fn.apply(null, args);
				});
			};
		}

		var _defer;

		if (hasSetImmediate) {
			_defer = setImmediate;
		} else if (hasNextTick) {
			_defer = process.nextTick;
		} else {
			_defer = fallback;
		}

		var setImmediate$1 = wrap(_defer);

		/**
		 * Take a sync function and make it async, passing its return value to a
		 * callback. This is useful for plugging sync functions into a waterfall,
		 * series, or other async functions. Any arguments passed to the generated
		 * function will be passed to the wrapped function (except for the final
		 * callback argument). Errors thrown will be passed to the callback.
		 *
		 * If the function passed to `asyncify` returns a Promise, that promises's
		 * resolved/rejected state will be used to call the callback, rather than simply
		 * the synchronous return value.
		 *
		 * This also means you can asyncify ES2017 `async` functions.
		 *
		 * @name asyncify
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @alias wrapSync
		 * @category Util
		 * @param {Function} func - The synchronous function, or Promise-returning
		 * function to convert to an {@link AsyncFunction}.
		 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
		 * invoked with `(args..., callback)`.
		 * @example
		 *
		 * // passing a regular synchronous function
		 * async.waterfall([
		 *     async.apply(fs.readFile, filename, "utf8"),
		 *     async.asyncify(JSON.parse),
		 *     function (data, next) {
		 *         // data is the result of parsing the text.
		 *         // If there was a parsing error, it would have been caught.
		 *     }
		 * ], callback);
		 *
		 * // passing a function returning a promise
		 * async.waterfall([
		 *     async.apply(fs.readFile, filename, "utf8"),
		 *     async.asyncify(function (contents) {
		 *         return db.model.create(contents);
		 *     }),
		 *     function (model, next) {
		 *         // `model` is the instantiated model object.
		 *         // If there was an error, this function would be skipped.
		 *     }
		 * ], callback);
		 *
		 * // es2017 example, though `asyncify` is not needed if your JS environment
		 * // supports async functions out of the box
		 * var q = async.queue(async.asyncify(async function(file) {
		 *     var intermediateStep = await processFile(file);
		 *     return await somePromise(intermediateStep)
		 * }));
		 *
		 * q.push(files);
		 */
		function asyncify(func) {
			return initialParams(function(args, callback) {
				var result;
				try {
					result = func.apply(this, args);
				} catch (e) {
					return callback(e);
				}
				// if result is Promise object
				if (isObject(result) && typeof result.then === 'function') {
					result.then(function(value) {
						invokeCallback(callback, null, value);
					}, function(err) {
						invokeCallback(callback, err.message ? err : new Error(err));
					});
				} else {
					callback(null, result);
				}
			});
		}

		function invokeCallback(callback, error, value) {
			try {
				callback(error, value);
			} catch (e) {
				setImmediate$1(rethrow, e);
			}
		}

		function rethrow(error) {
			throw error;
		}

		var supportsSymbol = typeof Symbol === 'function';

		function isAsync(fn) {
			return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
		}

		function wrapAsync(asyncFn) {
			return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
		}

		function applyEach$1(eachfn) {
			return function(fns /*, ...args*/ ) {
				var args = slice(arguments, 1);
				var go = initialParams(function(args, callback) {
					var that = this;
					return eachfn(fns, function(fn, cb) {
						wrapAsync(fn).apply(that, args.concat(cb));
					}, callback);
				});
				if (args.length) {
					return go.apply(this, args);
				} else {
					return go;
				}
			};
		}

		/** Detect free variable `global` from Node.js. */
		var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

		/** Detect free variable `self`. */
		var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

		/** Used as a reference to the global object. */
		var root = freeGlobal || freeSelf || Function('return this')();

		/** Built-in value references. */
		var Symbol$1 = root.Symbol;

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString = objectProto.toString;

		/** Built-in value references. */
		var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

		/**
		 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the raw `toStringTag`.
		 */
		function getRawTag(value) {
			var isOwn = hasOwnProperty.call(value, symToStringTag$1),
				tag = value[symToStringTag$1];

			try {
				value[symToStringTag$1] = undefined;
				var unmasked = true;
			} catch (e) {}

			var result = nativeObjectToString.call(value);
			if (unmasked) {
				if (isOwn) {
					value[symToStringTag$1] = tag;
				} else {
					delete value[symToStringTag$1];
				}
			}
			return result;
		}

		/** Used for built-in method references. */
		var objectProto$1 = Object.prototype;

		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString$1 = objectProto$1.toString;

		/**
		 * Converts `value` to a string using `Object.prototype.toString`.
		 *
		 * @private
		 * @param {*} value The value to convert.
		 * @returns {string} Returns the converted string.
		 */
		function objectToString(value) {
			return nativeObjectToString$1.call(value);
		}

		/** `Object#toString` result references. */
		var nullTag = '[object Null]';
		var undefinedTag = '[object Undefined]';

		/** Built-in value references. */
		var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

		/**
		 * The base implementation of `getTag` without fallbacks for buggy environments.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */
		function baseGetTag(value) {
			if (value == null) {
				return value === undefined ? undefinedTag : nullTag;
			}
			value = Object(value);
			return (symToStringTag && symToStringTag in value) ? getRawTag(value) : objectToString(value);
		}

		/** `Object#toString` result references. */
		var asyncTag = '[object AsyncFunction]';
		var funcTag = '[object Function]';
		var genTag = '[object GeneratorFunction]';
		var proxyTag = '[object Proxy]';

		/**
		 * Checks if `value` is classified as a `Function` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
		 * @example
		 *
		 * _.isFunction(_);
		 * // => true
		 *
		 * _.isFunction(/abc/);
		 * // => false
		 */
		function isFunction(value) {
			if (!isObject(value)) {
				return false;
			}
			// The use of `Object#toString` avoids issues with the `typeof` operator
			// in Safari 9 which returns 'object' for typed arrays and other constructors.
			var tag = baseGetTag(value);
			return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
		}

		/** Used as references for various `Number` constants. */
		var MAX_SAFE_INTEGER = 9007199254740991;

		/**
		 * Checks if `value` is a valid array-like length.
		 *
		 * **Note:** This method is loosely based on
		 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
		 * @example
		 *
		 * _.isLength(3);
		 * // => true
		 *
		 * _.isLength(Number.MIN_VALUE);
		 * // => false
		 *
		 * _.isLength(Infinity);
		 * // => false
		 *
		 * _.isLength('3');
		 * // => false
		 */
		function isLength(value) {
			return typeof value == 'number' &&
				value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
		}

		/**
		 * Checks if `value` is array-like. A value is considered array-like if it's
		 * not a function and has a `value.length` that's an integer greater than or
		 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
		 * @example
		 *
		 * _.isArrayLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isArrayLike(document.body.children);
		 * // => true
		 *
		 * _.isArrayLike('abc');
		 * // => true
		 *
		 * _.isArrayLike(_.noop);
		 * // => false
		 */
		function isArrayLike(value) {
			return value != null && isLength(value.length) && !isFunction(value);
		}

		// A temporary value used to identify if the loop should be broken.
		// See #1064, #1293
		var breakLoop = {};

		/**
		 * This method returns `undefined`.
		 *
		 * @static
		 * @memberOf _
		 * @since 2.3.0
		 * @category Util
		 * @example
		 *
		 * _.times(2, _.noop);
		 * // => [undefined, undefined]
		 */
		function noop() {
			// No operation performed.
		}

		function once(fn) {
			return function() {
				if (fn === null) return;
				var callFn = fn;
				fn = null;
				callFn.apply(this, arguments);
			};
		}

		var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

		var getIterator = function(coll) {
			return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
		};

		/**
		 * The base implementation of `_.times` without support for iteratee shorthands
		 * or max array length checks.
		 *
		 * @private
		 * @param {number} n The number of times to invoke `iteratee`.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns the array of results.
		 */
		function baseTimes(n, iteratee) {
			var index = -1,
				result = Array(n);

			while (++index < n) {
				result[index] = iteratee(index);
			}
			return result;
		}

		/**
		 * Checks if `value` is object-like. A value is object-like if it's not `null`
		 * and has a `typeof` result of "object".
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		 * @example
		 *
		 * _.isObjectLike({});
		 * // => true
		 *
		 * _.isObjectLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isObjectLike(_.noop);
		 * // => false
		 *
		 * _.isObjectLike(null);
		 * // => false
		 */
		function isObjectLike(value) {
			return value != null && typeof value == 'object';
		}

		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]';

		/**
		 * The base implementation of `_.isArguments`.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
		 */
		function baseIsArguments(value) {
			return isObjectLike(value) && baseGetTag(value) == argsTag;
		}

		/** Used for built-in method references. */
		var objectProto$3 = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

		/** Built-in value references. */
		var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

		/**
		 * Checks if `value` is likely an `arguments` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
		 *  else `false`.
		 * @example
		 *
		 * _.isArguments(function() { return arguments; }());
		 * // => true
		 *
		 * _.isArguments([1, 2, 3]);
		 * // => false
		 */
		var isArguments = baseIsArguments(function() {
			return arguments;
		}()) ? baseIsArguments : function(value) {
			return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
				!propertyIsEnumerable.call(value, 'callee');
		};

		/**
		 * Checks if `value` is classified as an `Array` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
		 * @example
		 *
		 * _.isArray([1, 2, 3]);
		 * // => true
		 *
		 * _.isArray(document.body.children);
		 * // => false
		 *
		 * _.isArray('abc');
		 * // => false
		 *
		 * _.isArray(_.noop);
		 * // => false
		 */
		var isArray = Array.isArray;

		/**
		 * This method returns `false`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.13.0
		 * @category Util
		 * @returns {boolean} Returns `false`.
		 * @example
		 *
		 * _.times(2, _.stubFalse);
		 * // => [false, false]
		 */
		function stubFalse() {
			return false;
		}

		/** Detect free variable `exports`. */
		var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

		/** Detect free variable `module`. */
		var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Built-in value references. */
		var Buffer = moduleExports ? root.Buffer : undefined;

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

		/**
		 * Checks if `value` is a buffer.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.3.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
		 * @example
		 *
		 * _.isBuffer(new Buffer(2));
		 * // => true
		 *
		 * _.isBuffer(new Uint8Array(2));
		 * // => false
		 */
		var isBuffer = nativeIsBuffer || stubFalse;

		/** Used as references for various `Number` constants. */
		var MAX_SAFE_INTEGER$1 = 9007199254740991;

		/** Used to detect unsigned integer values. */
		var reIsUint = /^(?:0|[1-9]\d*)$/;

		/**
		 * Checks if `value` is a valid array-like index.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
		 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
		 */
		function isIndex(value, length) {
			length = length == null ? MAX_SAFE_INTEGER$1 : length;
			return !!length &&
				(typeof value == 'number' || reIsUint.test(value)) &&
				(value > -1 && value % 1 == 0 && value < length);
		}

		/** `Object#toString` result references. */
		var argsTag$1 = '[object Arguments]';
		var arrayTag = '[object Array]';
		var boolTag = '[object Boolean]';
		var dateTag = '[object Date]';
		var errorTag = '[object Error]';
		var funcTag$1 = '[object Function]';
		var mapTag = '[object Map]';
		var numberTag = '[object Number]';
		var objectTag = '[object Object]';
		var regexpTag = '[object RegExp]';
		var setTag = '[object Set]';
		var stringTag = '[object String]';
		var weakMapTag = '[object WeakMap]';

		var arrayBufferTag = '[object ArrayBuffer]';
		var dataViewTag = '[object DataView]';
		var float32Tag = '[object Float32Array]';
		var float64Tag = '[object Float64Array]';
		var int8Tag = '[object Int8Array]';
		var int16Tag = '[object Int16Array]';
		var int32Tag = '[object Int32Array]';
		var uint8Tag = '[object Uint8Array]';
		var uint8ClampedTag = '[object Uint8ClampedArray]';
		var uint16Tag = '[object Uint16Array]';
		var uint32Tag = '[object Uint32Array]';

		/** Used to identify `toStringTag` values of typed arrays. */
		var typedArrayTags = {};
		typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
			typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
			typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
			typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
			typedArrayTags[uint32Tag] = true;
		typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
			typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
			typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
			typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
			typedArrayTags[mapTag] = typedArrayTags[numberTag] =
			typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
			typedArrayTags[setTag] = typedArrayTags[stringTag] =
			typedArrayTags[weakMapTag] = false;

		/**
		 * The base implementation of `_.isTypedArray` without Node.js optimizations.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		 */
		function baseIsTypedArray(value) {
			return isObjectLike(value) &&
				isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
		}

		/**
		 * The base implementation of `_.unary` without support for storing metadata.
		 *
		 * @private
		 * @param {Function} func The function to cap arguments for.
		 * @returns {Function} Returns the new capped function.
		 */
		function baseUnary(func) {
			return function(value) {
				return func(value);
			};
		}

		/** Detect free variable `exports`. */
		var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

		/** Detect free variable `module`. */
		var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

		/** Detect free variable `process` from Node.js. */
		var freeProcess = moduleExports$1 && freeGlobal.process;

		/** Used to access faster Node.js helpers. */
		var nodeUtil = (function() {
			try {
				return freeProcess && freeProcess.binding('util');
			} catch (e) {}
		}());

		/* Node.js helper references. */
		var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

		/**
		 * Checks if `value` is classified as a typed array.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		 * @example
		 *
		 * _.isTypedArray(new Uint8Array);
		 * // => true
		 *
		 * _.isTypedArray([]);
		 * // => false
		 */
		var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

		/** Used for built-in method references. */
		var objectProto$2 = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

		/**
		 * Creates an array of the enumerable property names of the array-like `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @param {boolean} inherited Specify returning inherited property names.
		 * @returns {Array} Returns the array of property names.
		 */
		function arrayLikeKeys(value, inherited) {
			var isArr = isArray(value),
				isArg = !isArr && isArguments(value),
				isBuff = !isArr && !isArg && isBuffer(value),
				isType = !isArr && !isArg && !isBuff && isTypedArray(value),
				skipIndexes = isArr || isArg || isBuff || isType,
				result = skipIndexes ? baseTimes(value.length, String) : [],
				length = result.length;

			for (var key in value) {
				if ((inherited || hasOwnProperty$1.call(value, key)) &&
					!(skipIndexes && (
						// Safari 9 has enumerable `arguments.length` in strict mode.
						key == 'length' ||
						// Node.js 0.10 has enumerable non-index properties on buffers.
						(isBuff && (key == 'offset' || key == 'parent')) ||
						// PhantomJS 2 has enumerable non-index properties on typed arrays.
						(isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
						// Skip index properties.
						isIndex(key, length)
					))) {
					result.push(key);
				}
			}
			return result;
		}

		/** Used for built-in method references. */
		var objectProto$5 = Object.prototype;

		/**
		 * Checks if `value` is likely a prototype object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
		 */
		function isPrototype(value) {
			var Ctor = value && value.constructor,
				proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

			return value === proto;
		}

		/**
		 * Creates a unary function that invokes `func` with its argument transformed.
		 *
		 * @private
		 * @param {Function} func The function to wrap.
		 * @param {Function} transform The argument transform.
		 * @returns {Function} Returns the new function.
		 */
		function overArg(func, transform) {
			return function(arg) {
				return func(transform(arg));
			};
		}

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeKeys = overArg(Object.keys, Object);

		/** Used for built-in method references. */
		var objectProto$4 = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

		/**
		 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */
		function baseKeys(object) {
			if (!isPrototype(object)) {
				return nativeKeys(object);
			}
			var result = [];
			for (var key in Object(object)) {
				if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
					result.push(key);
				}
			}
			return result;
		}

		/**
		 * Creates an array of the own enumerable property names of `object`.
		 *
		 * **Note:** Non-object values are coerced to objects. See the
		 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
		 * for more details.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Object
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 *   this.b = 2;
		 * }
		 *
		 * Foo.prototype.c = 3;
		 *
		 * _.keys(new Foo);
		 * // => ['a', 'b'] (iteration order is not guaranteed)
		 *
		 * _.keys('hi');
		 * // => ['0', '1']
		 */
		function keys(object) {
			return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
		}

		function createArrayIterator(coll) {
			var i = -1;
			var len = coll.length;
			return function next() {
				return ++i < len ? {
					value: coll[i],
					key: i
				} : null;
			}
		}

		function createES2015Iterator(iterator) {
			var i = -1;
			return function next() {
				var item = iterator.next();
				if (item.done)
					return null;
				i++;
				return {
					value: item.value,
					key: i
				};
			}
		}

		function createObjectIterator(obj) {
			var okeys = keys(obj);
			var i = -1;
			var len = okeys.length;
			return function next() {
				var key = okeys[++i];
				return i < len ? {
					value: obj[key],
					key: key
				} : null;
			};
		}

		function iterator(coll) {
			if (isArrayLike(coll)) {
				return createArrayIterator(coll);
			}

			var iterator = getIterator(coll);
			return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
		}

		function onlyOnce(fn) {
			return function() {
				if (fn === null) throw new Error("Callback was already called.");
				var callFn = fn;
				fn = null;
				callFn.apply(this, arguments);
			};
		}

		function _eachOfLimit(limit) {
			return function(obj, iteratee, callback) {
				callback = once(callback || noop);
				if (limit <= 0 || !obj) {
					return callback(null);
				}
				var nextElem = iterator(obj);
				var done = false;
				var running = 0;

				function iterateeCallback(err, value) {
					running -= 1;
					if (err) {
						done = true;
						callback(err);
					} else if (value === breakLoop || (done && running <= 0)) {
						done = true;
						return callback(null);
					} else {
						replenish();
					}
				}

				function replenish() {
					while (running < limit && !done) {
						var elem = nextElem();
						if (elem === null) {
							done = true;
							if (running <= 0) {
								callback(null);
							}
							return;
						}
						running += 1;
						iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
					}
				}

				replenish();
			};
		}

		/**
		 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
		 * time.
		 *
		 * @name eachOfLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.eachOf]{@link module:Collections.eachOf}
		 * @alias forEachOfLimit
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - An async function to apply to each
		 * item in `coll`. The `key` is the item's key, or index in the case of an
		 * array.
		 * Invoked with (item, key, callback).
		 * @param {Function} [callback] - A callback which is called when all
		 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
		 */
		function eachOfLimit(coll, limit, iteratee, callback) {
			_eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
		}

		function doLimit(fn, limit) {
			return function(iterable, iteratee, callback) {
				return fn(iterable, limit, iteratee, callback);
			};
		}

		// eachOf implementation optimized for array-likes
		function eachOfArrayLike(coll, iteratee, callback) {
			callback = once(callback || noop);
			var index = 0,
				completed = 0,
				length = coll.length;
			if (length === 0) {
				callback(null);
			}

			function iteratorCallback(err, value) {
				if (err) {
					callback(err);
				} else if ((++completed === length) || value === breakLoop) {
					callback(null);
				}
			}

			for (; index < length; index++) {
				iteratee(coll[index], index, onlyOnce(iteratorCallback));
			}
		}

		// a generic version of eachOf which can handle array, object, and iterator cases.
		var eachOfGeneric = doLimit(eachOfLimit, Infinity);

		/**
		 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
		 * to the iteratee.
		 *
		 * @name eachOf
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @alias forEachOf
		 * @category Collection
		 * @see [async.each]{@link module:Collections.each}
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - A function to apply to each
		 * item in `coll`.
		 * The `key` is the item's key, or index in the case of an array.
		 * Invoked with (item, key, callback).
		 * @param {Function} [callback] - A callback which is called when all
		 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
		 * @example
		 *
		 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
		 * var configs = {};
		 *
		 * async.forEachOf(obj, function (value, key, callback) {
		 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
		 *         if (err) return callback(err);
		 *         try {
		 *             configs[key] = JSON.parse(data);
		 *         } catch (e) {
		 *             return callback(e);
		 *         }
		 *         callback();
		 *     });
		 * }, function (err) {
		 *     if (err) console.error(err.message);
		 *     // configs is now a map of JSON data
		 *     doSomethingWith(configs);
		 * });
		 */
		var eachOf = function(coll, iteratee, callback) {
			var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
			eachOfImplementation(coll, wrapAsync(iteratee), callback);
		};

		function doParallel(fn) {
			return function(obj, iteratee, callback) {
				return fn(eachOf, obj, wrapAsync(iteratee), callback);
			};
		}

		function _asyncMap(eachfn, arr, iteratee, callback) {
			callback = callback || noop;
			arr = arr || [];
			var results = [];
			var counter = 0;
			var _iteratee = wrapAsync(iteratee);

			eachfn(arr, function(value, _, callback) {
				var index = counter++;
				_iteratee(value, function(err, v) {
					results[index] = v;
					callback(err);
				});
			}, function(err) {
				callback(err, results);
			});
		}

		/**
		 * Produces a new collection of values by mapping each value in `coll` through
		 * the `iteratee` function. The `iteratee` is called with an item from `coll`
		 * and a callback for when it has finished processing. Each of these callback
		 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
		 * `iteratee` passes an error to its callback, the main `callback` (for the
		 * `map` function) is immediately called with the error.
		 *
		 * Note, that since this function applies the `iteratee` to each item in
		 * parallel, there is no guarantee that the `iteratee` functions will complete
		 * in order. However, the results array will be in the same order as the
		 * original `coll`.
		 *
		 * If `map` is passed an Object, the results will be an Array.  The results
		 * will roughly be in the order of the original Objects' keys (but this can
		 * vary across JavaScript engines).
		 *
		 * @name map
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async function to apply to each item in
		 * `coll`.
		 * The iteratee should complete with the transformed item.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. Results is an Array of the
		 * transformed items from the `coll`. Invoked with (err, results).
		 * @example
		 *
		 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
		 *     // results is now an array of stats for each file
		 * });
		 */
		var map = doParallel(_asyncMap);

		/**
		 * Applies the provided arguments to each function in the array, calling
		 * `callback` after all functions have completed. If you only provide the first
		 * argument, `fns`, then it will return a function which lets you pass in the
		 * arguments as if it were a single function call. If more arguments are
		 * provided, `callback` is required while `args` is still optional.
		 *
		 * @name applyEach
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s
		 * to all call with the same arguments
		 * @param {...*} [args] - any number of separate arguments to pass to the
		 * function.
		 * @param {Function} [callback] - the final argument should be the callback,
		 * called when all functions have completed processing.
		 * @returns {Function} - If only the first argument, `fns`, is provided, it will
		 * return a function which lets you pass in the arguments as if it were a single
		 * function call. The signature is `(..args, callback)`. If invoked with any
		 * arguments, `callback` is required.
		 * @example
		 *
		 * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
		 *
		 * // partial application example:
		 * async.each(
		 *     buckets,
		 *     async.applyEach([enableSearch, updateSchema]),
		 *     callback
		 * );
		 */
		var applyEach = applyEach$1(map);

		function doParallelLimit(fn) {
			return function(obj, limit, iteratee, callback) {
				return fn(_eachOfLimit(limit), obj, wrapAsync(iteratee), callback);
			};
		}

		/**
		 * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
		 *
		 * @name mapLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.map]{@link module:Collections.map}
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - An async function to apply to each item in
		 * `coll`.
		 * The iteratee should complete with the transformed item.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. Results is an array of the
		 * transformed items from the `coll`. Invoked with (err, results).
		 */
		var mapLimit = doParallelLimit(_asyncMap);

		/**
		 * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
		 *
		 * @name mapSeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.map]{@link module:Collections.map}
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async function to apply to each item in
		 * `coll`.
		 * The iteratee should complete with the transformed item.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. Results is an array of the
		 * transformed items from the `coll`. Invoked with (err, results).
		 */
		var mapSeries = doLimit(mapLimit, 1);

		/**
		 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
		 *
		 * @name applyEachSeries
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
		 * @category Control Flow
		 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
		 * call with the same arguments
		 * @param {...*} [args] - any number of separate arguments to pass to the
		 * function.
		 * @param {Function} [callback] - the final argument should be the callback,
		 * called when all functions have completed processing.
		 * @returns {Function} - If only the first argument is provided, it will return
		 * a function which lets you pass in the arguments as if it were a single
		 * function call.
		 */
		var applyEachSeries = applyEach$1(mapSeries);

		/**
		 * Creates a continuation function with some arguments already applied.
		 *
		 * Useful as a shorthand when combined with other control flow functions. Any
		 * arguments passed to the returned function are added to the arguments
		 * originally passed to apply.
		 *
		 * @name apply
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @category Util
		 * @param {Function} fn - The function you want to eventually apply all
		 * arguments to. Invokes with (arguments...).
		 * @param {...*} arguments... - Any number of arguments to automatically apply
		 * when the continuation is called.
		 * @returns {Function} the partially-applied function
		 * @example
		 *
		 * // using apply
		 * async.parallel([
		 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
		 *     async.apply(fs.writeFile, 'testfile2', 'test2')
		 * ]);
		 *
		 *
		 * // the same process without using apply
		 * async.parallel([
		 *     function(callback) {
		 *         fs.writeFile('testfile1', 'test1', callback);
		 *     },
		 *     function(callback) {
		 *         fs.writeFile('testfile2', 'test2', callback);
		 *     }
		 * ]);
		 *
		 * // It's possible to pass any number of additional arguments when calling the
		 * // continuation:
		 *
		 * node> var fn = async.apply(sys.puts, 'one');
		 * node> fn('two', 'three');
		 * one
		 * two
		 * three
		 */
		var apply = function(fn /*, ...args*/ ) {
			var args = slice(arguments, 1);
			return function( /*callArgs*/ ) {
				var callArgs = slice(arguments);
				return fn.apply(null, args.concat(callArgs));
			};
		};

		/**
		 * A specialized version of `_.forEach` for arrays without support for
		 * iteratee shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns `array`.
		 */
		function arrayEach(array, iteratee) {
			var index = -1,
				length = array == null ? 0 : array.length;

			while (++index < length) {
				if (iteratee(array[index], index, array) === false) {
					break;
				}
			}
			return array;
		}

		/**
		 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
		 *
		 * @private
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {Function} Returns the new base function.
		 */
		function createBaseFor(fromRight) {
			return function(object, iteratee, keysFunc) {
				var index = -1,
					iterable = Object(object),
					props = keysFunc(object),
					length = props.length;

				while (length--) {
					var key = props[fromRight ? length : ++index];
					if (iteratee(iterable[key], key, iterable) === false) {
						break;
					}
				}
				return object;
			};
		}

		/**
		 * The base implementation of `baseForOwn` which iterates over `object`
		 * properties returned by `keysFunc` and invokes `iteratee` for each property.
		 * Iteratee functions may exit iteration early by explicitly returning `false`.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @param {Function} keysFunc The function to get the keys of `object`.
		 * @returns {Object} Returns `object`.
		 */
		var baseFor = createBaseFor();

		/**
		 * The base implementation of `_.forOwn` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Object} Returns `object`.
		 */
		function baseForOwn(object, iteratee) {
			return object && baseFor(object, iteratee, keys);
		}

		/**
		 * The base implementation of `_.findIndex` and `_.findLastIndex` without
		 * support for iteratee shorthands.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {Function} predicate The function invoked per iteration.
		 * @param {number} fromIndex The index to search from.
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */
		function baseFindIndex(array, predicate, fromIndex, fromRight) {
			var length = array.length,
				index = fromIndex + (fromRight ? 1 : -1);

			while ((fromRight ? index-- : ++index < length)) {
				if (predicate(array[index], index, array)) {
					return index;
				}
			}
			return -1;
		}

		/**
		 * The base implementation of `_.isNaN` without support for number objects.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
		 */
		function baseIsNaN(value) {
			return value !== value;
		}

		/**
		 * A specialized version of `_.indexOf` which performs strict equality
		 * comparisons of values, i.e. `===`.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {*} value The value to search for.
		 * @param {number} fromIndex The index to search from.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */
		function strictIndexOf(array, value, fromIndex) {
			var index = fromIndex - 1,
				length = array.length;

			while (++index < length) {
				if (array[index] === value) {
					return index;
				}
			}
			return -1;
		}

		/**
		 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {*} value The value to search for.
		 * @param {number} fromIndex The index to search from.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */
		function baseIndexOf(array, value, fromIndex) {
			return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
		}

		/**
		 * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
		 * their requirements. Each function can optionally depend on other functions
		 * being completed first, and each function is run as soon as its requirements
		 * are satisfied.
		 *
		 * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
		 * will stop. Further tasks will not execute (so any other functions depending
		 * on it will not run), and the main `callback` is immediately called with the
		 * error.
		 *
		 * {@link AsyncFunction}s also receive an object containing the results of functions which
		 * have completed so far as the first argument, if they have dependencies. If a
		 * task function has no dependencies, it will only be passed a callback.
		 *
		 * @name auto
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {Object} tasks - An object. Each of its properties is either a
		 * function or an array of requirements, with the {@link AsyncFunction} itself the last item
		 * in the array. The object's key of a property serves as the name of the task
		 * defined by that property, i.e. can be used when specifying requirements for
		 * other tasks. The function receives one or two arguments:
		 * * a `results` object, containing the results of the previously executed
		 *   functions, only passed if the task has any dependencies,
		 * * a `callback(err, result)` function, which must be called when finished,
		 *   passing an `error` (which can be `null`) and the result of the function's
		 *   execution.
		 * @param {number} [concurrency=Infinity] - An optional `integer` for
		 * determining the maximum number of tasks that can be run in parallel. By
		 * default, as many as possible.
		 * @param {Function} [callback] - An optional callback which is called when all
		 * the tasks have been completed. It receives the `err` argument if any `tasks`
		 * pass an error to their callback. Results are always returned; however, if an
		 * error occurs, no further `tasks` will be performed, and the results object
		 * will only contain partial results. Invoked with (err, results).
		 * @returns undefined
		 * @example
		 *
		 * async.auto({
		 *     // this function will just be passed a callback
		 *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
		 *     showData: ['readData', function(results, cb) {
		 *         // results.readData is the file's contents
		 *         // ...
		 *     }]
		 * }, callback);
		 *
		 * async.auto({
		 *     get_data: function(callback) {
		 *         console.log('in get_data');
		 *         // async code to get some data
		 *         callback(null, 'data', 'converted to array');
		 *     },
		 *     make_folder: function(callback) {
		 *         console.log('in make_folder');
		 *         // async code to create a directory to store a file in
		 *         // this is run at the same time as getting the data
		 *         callback(null, 'folder');
		 *     },
		 *     write_file: ['get_data', 'make_folder', function(results, callback) {
		 *         console.log('in write_file', JSON.stringify(results));
		 *         // once there is some data and the directory exists,
		 *         // write the data to a file in the directory
		 *         callback(null, 'filename');
		 *     }],
		 *     email_link: ['write_file', function(results, callback) {
		 *         console.log('in email_link', JSON.stringify(results));
		 *         // once the file is written let's email a link to it...
		 *         // results.write_file contains the filename returned by write_file.
		 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
		 *     }]
		 * }, function(err, results) {
		 *     console.log('err = ', err);
		 *     console.log('results = ', results);
		 * });
		 */
		var auto = function(tasks, concurrency, callback) {
			if (typeof concurrency === 'function') {
				// concurrency is optional, shift the args.
				callback = concurrency;
				concurrency = null;
			}
			callback = once(callback || noop);
			var keys$$1 = keys(tasks);
			var numTasks = keys$$1.length;
			if (!numTasks) {
				return callback(null);
			}
			if (!concurrency) {
				concurrency = numTasks;
			}

			var results = {};
			var runningTasks = 0;
			var hasError = false;

			var listeners = Object.create(null);

			var readyTasks = [];

			// for cycle detection:
			var readyToCheck = []; // tasks that have been identified as reachable
			// without the possibility of returning to an ancestor task
			var uncheckedDependencies = {};

			baseForOwn(tasks, function(task, key) {
				if (!isArray(task)) {
					// no dependencies
					enqueueTask(key, [task]);
					readyToCheck.push(key);
					return;
				}

				var dependencies = task.slice(0, task.length - 1);
				var remainingDependencies = dependencies.length;
				if (remainingDependencies === 0) {
					enqueueTask(key, task);
					readyToCheck.push(key);
					return;
				}
				uncheckedDependencies[key] = remainingDependencies;

				arrayEach(dependencies, function(dependencyName) {
					if (!tasks[dependencyName]) {
						throw new Error('async.auto task `' + key +
							'` has a non-existent dependency `' +
							dependencyName + '` in ' +
							dependencies.join(', '));
					}
					addListener(dependencyName, function() {
						remainingDependencies--;
						if (remainingDependencies === 0) {
							enqueueTask(key, task);
						}
					});
				});
			});

			checkForDeadlocks();
			processQueue();

			function enqueueTask(key, task) {
				readyTasks.push(function() {
					runTask(key, task);
				});
			}

			function processQueue() {
				if (readyTasks.length === 0 && runningTasks === 0) {
					return callback(null, results);
				}
				while (readyTasks.length && runningTasks < concurrency) {
					var run = readyTasks.shift();
					run();
				}

			}

			function addListener(taskName, fn) {
				var taskListeners = listeners[taskName];
				if (!taskListeners) {
					taskListeners = listeners[taskName] = [];
				}

				taskListeners.push(fn);
			}

			function taskComplete(taskName) {
				var taskListeners = listeners[taskName] || [];
				arrayEach(taskListeners, function(fn) {
					fn();
				});
				processQueue();
			}


			function runTask(key, task) {
				if (hasError) return;

				var taskCallback = onlyOnce(function(err, result) {
					runningTasks--;
					if (arguments.length > 2) {
						result = slice(arguments, 1);
					}
					if (err) {
						var safeResults = {};
						baseForOwn(results, function(val, rkey) {
							safeResults[rkey] = val;
						});
						safeResults[key] = result;
						hasError = true;
						listeners = Object.create(null);

						callback(err, safeResults);
					} else {
						results[key] = result;
						taskComplete(key);
					}
				});

				runningTasks++;
				var taskFn = wrapAsync(task[task.length - 1]);
				if (task.length > 1) {
					taskFn(results, taskCallback);
				} else {
					taskFn(taskCallback);
				}
			}

			function checkForDeadlocks() {
				// Kahn's algorithm
				// https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
				// http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
				var currentTask;
				var counter = 0;
				while (readyToCheck.length) {
					currentTask = readyToCheck.pop();
					counter++;
					arrayEach(getDependents(currentTask), function(dependent) {
						if (--uncheckedDependencies[dependent] === 0) {
							readyToCheck.push(dependent);
						}
					});
				}

				if (counter !== numTasks) {
					throw new Error(
						'async.auto cannot execute tasks due to a recursive dependency'
					);
				}
			}

			function getDependents(taskName) {
				var result = [];
				baseForOwn(tasks, function(task, key) {
					if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
						result.push(key);
					}
				});
				return result;
			}
		};

		/**
		 * A specialized version of `_.map` for arrays without support for iteratee
		 * shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns the new mapped array.
		 */
		function arrayMap(array, iteratee) {
			var index = -1,
				length = array == null ? 0 : array.length,
				result = Array(length);

			while (++index < length) {
				result[index] = iteratee(array[index], index, array);
			}
			return result;
		}

		/** `Object#toString` result references. */
		var symbolTag = '[object Symbol]';

		/**
		 * Checks if `value` is classified as a `Symbol` primitive or object.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
		 * @example
		 *
		 * _.isSymbol(Symbol.iterator);
		 * // => true
		 *
		 * _.isSymbol('abc');
		 * // => false
		 */
		function isSymbol(value) {
			return typeof value == 'symbol' ||
				(isObjectLike(value) && baseGetTag(value) == symbolTag);
		}

		/** Used as references for various `Number` constants. */
		var INFINITY = 1 / 0;

		/** Used to convert symbols to primitives and strings. */
		var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
		var symbolToString = symbolProto ? symbolProto.toString : undefined;

		/**
		 * The base implementation of `_.toString` which doesn't convert nullish
		 * values to empty strings.
		 *
		 * @private
		 * @param {*} value The value to process.
		 * @returns {string} Returns the string.
		 */
		function baseToString(value) {
			// Exit early for strings to avoid a performance hit in some environments.
			if (typeof value == 'string') {
				return value;
			}
			if (isArray(value)) {
				// Recursively convert values (susceptible to call stack limits).
				return arrayMap(value, baseToString) + '';
			}
			if (isSymbol(value)) {
				return symbolToString ? symbolToString.call(value) : '';
			}
			var result = (value + '');
			return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
		}

		/**
		 * The base implementation of `_.slice` without an iteratee call guard.
		 *
		 * @private
		 * @param {Array} array The array to slice.
		 * @param {number} [start=0] The start position.
		 * @param {number} [end=array.length] The end position.
		 * @returns {Array} Returns the slice of `array`.
		 */
		function baseSlice(array, start, end) {
			var index = -1,
				length = array.length;

			if (start < 0) {
				start = -start > length ? 0 : (length + start);
			}
			end = end > length ? length : end;
			if (end < 0) {
				end += length;
			}
			length = start > end ? 0 : ((end - start) >>> 0);
			start >>>= 0;

			var result = Array(length);
			while (++index < length) {
				result[index] = array[index + start];
			}
			return result;
		}

		/**
		 * Casts `array` to a slice if it's needed.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {number} start The start position.
		 * @param {number} [end=array.length] The end position.
		 * @returns {Array} Returns the cast slice.
		 */
		function castSlice(array, start, end) {
			var length = array.length;
			end = end === undefined ? length : end;
			return (!start && end >= length) ? array : baseSlice(array, start, end);
		}

		/**
		 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
		 * that is not found in the character symbols.
		 *
		 * @private
		 * @param {Array} strSymbols The string symbols to inspect.
		 * @param {Array} chrSymbols The character symbols to find.
		 * @returns {number} Returns the index of the last unmatched string symbol.
		 */
		function charsEndIndex(strSymbols, chrSymbols) {
			var index = strSymbols.length;

			while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
			return index;
		}

		/**
		 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
		 * that is not found in the character symbols.
		 *
		 * @private
		 * @param {Array} strSymbols The string symbols to inspect.
		 * @param {Array} chrSymbols The character symbols to find.
		 * @returns {number} Returns the index of the first unmatched string symbol.
		 */
		function charsStartIndex(strSymbols, chrSymbols) {
			var index = -1,
				length = strSymbols.length;

			while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
			return index;
		}

		/**
		 * Converts an ASCII `string` to an array.
		 *
		 * @private
		 * @param {string} string The string to convert.
		 * @returns {Array} Returns the converted array.
		 */
		function asciiToArray(string) {
			return string.split('');
		}

		/** Used to compose unicode character classes. */
		var rsAstralRange = '\\ud800-\\udfff';
		var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
		var rsComboSymbolsRange = '\\u20d0-\\u20f0';
		var rsVarRange = '\\ufe0e\\ufe0f';

		/** Used to compose unicode capture groups. */
		var rsZWJ = '\\u200d';

		/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
		var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

		/**
		 * Checks if `string` contains Unicode symbols.
		 *
		 * @private
		 * @param {string} string The string to inspect.
		 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
		 */
		function hasUnicode(string) {
			return reHasUnicode.test(string);
		}

		/** Used to compose unicode character classes. */
		var rsAstralRange$1 = '\\ud800-\\udfff';
		var rsComboMarksRange$1 = '\\u0300-\\u036f\\ufe20-\\ufe23';
		var rsComboSymbolsRange$1 = '\\u20d0-\\u20f0';
		var rsVarRange$1 = '\\ufe0e\\ufe0f';

		/** Used to compose unicode capture groups. */
		var rsAstral = '[' + rsAstralRange$1 + ']';
		var rsCombo = '[' + rsComboMarksRange$1 + rsComboSymbolsRange$1 + ']';
		var rsFitz = '\\ud83c[\\udffb-\\udfff]';
		var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
		var rsNonAstral = '[^' + rsAstralRange$1 + ']';
		var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
		var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
		var rsZWJ$1 = '\\u200d';

		/** Used to compose unicode regexes. */
		var reOptMod = rsModifier + '?';
		var rsOptVar = '[' + rsVarRange$1 + ']?';
		var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
		var rsSeq = rsOptVar + reOptMod + rsOptJoin;
		var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

		/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
		var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

		/**
		 * Converts a Unicode `string` to an array.
		 *
		 * @private
		 * @param {string} string The string to convert.
		 * @returns {Array} Returns the converted array.
		 */
		function unicodeToArray(string) {
			return string.match(reUnicode) || [];
		}

		/**
		 * Converts `string` to an array.
		 *
		 * @private
		 * @param {string} string The string to convert.
		 * @returns {Array} Returns the converted array.
		 */
		function stringToArray(string) {
			return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
		}

		/**
		 * Converts `value` to a string. An empty string is returned for `null`
		 * and `undefined` values. The sign of `-0` is preserved.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to convert.
		 * @returns {string} Returns the converted string.
		 * @example
		 *
		 * _.toString(null);
		 * // => ''
		 *
		 * _.toString(-0);
		 * // => '-0'
		 *
		 * _.toString([1, 2, 3]);
		 * // => '1,2,3'
		 */
		function toString(value) {
			return value == null ? '' : baseToString(value);
		}

		/** Used to match leading and trailing whitespace. */
		var reTrim = /^\s+|\s+$/g;

		/**
		 * Removes leading and trailing whitespace or specified characters from `string`.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.0.0
		 * @category String
		 * @param {string} [string=''] The string to trim.
		 * @param {string} [chars=whitespace] The characters to trim.
		 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
		 * @returns {string} Returns the trimmed string.
		 * @example
		 *
		 * _.trim('  abc  ');
		 * // => 'abc'
		 *
		 * _.trim('-_-abc-_-', '_-');
		 * // => 'abc'
		 *
		 * _.map(['  foo  ', '  bar  '], _.trim);
		 * // => ['foo', 'bar']
		 */
		function trim(string, chars, guard) {
			string = toString(string);
			if (string && (guard || chars === undefined)) {
				return string.replace(reTrim, '');
			}
			if (!string || !(chars = baseToString(chars))) {
				return string;
			}
			var strSymbols = stringToArray(string),
				chrSymbols = stringToArray(chars),
				start = charsStartIndex(strSymbols, chrSymbols),
				end = charsEndIndex(strSymbols, chrSymbols) + 1;

			return castSlice(strSymbols, start, end).join('');
		}

		var FN_ARGS = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
		var FN_ARG_SPLIT = /,/;
		var FN_ARG = /(=.+)?(\s*)$/;
		var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

		function parseParams(func) {
			func = func.toString().replace(STRIP_COMMENTS, '');
			func = func.match(FN_ARGS)[2].replace(' ', '');
			func = func ? func.split(FN_ARG_SPLIT) : [];
			func = func.map(function(arg) {
				return trim(arg.replace(FN_ARG, ''));
			});
			return func;
		}

		/**
		 * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
		 * tasks are specified as parameters to the function, after the usual callback
		 * parameter, with the parameter names matching the names of the tasks it
		 * depends on. This can provide even more readable task graphs which can be
		 * easier to maintain.
		 *
		 * If a final callback is specified, the task results are similarly injected,
		 * specified as named parameters after the initial error parameter.
		 *
		 * The autoInject function is purely syntactic sugar and its semantics are
		 * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
		 *
		 * @name autoInject
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.auto]{@link module:ControlFlow.auto}
		 * @category Control Flow
		 * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
		 * the form 'func([dependencies...], callback). The object's key of a property
		 * serves as the name of the task defined by that property, i.e. can be used
		 * when specifying requirements for other tasks.
		 * * The `callback` parameter is a `callback(err, result)` which must be called
		 *   when finished, passing an `error` (which can be `null`) and the result of
		 *   the function's execution. The remaining parameters name other tasks on
		 *   which the task is dependent, and the results from those tasks are the
		 *   arguments of those parameters.
		 * @param {Function} [callback] - An optional callback which is called when all
		 * the tasks have been completed. It receives the `err` argument if any `tasks`
		 * pass an error to their callback, and a `results` object with any completed
		 * task results, similar to `auto`.
		 * @example
		 *
		 * //  The example from `auto` can be rewritten as follows:
		 * async.autoInject({
		 *     get_data: function(callback) {
		 *         // async code to get some data
		 *         callback(null, 'data', 'converted to array');
		 *     },
		 *     make_folder: function(callback) {
		 *         // async code to create a directory to store a file in
		 *         // this is run at the same time as getting the data
		 *         callback(null, 'folder');
		 *     },
		 *     write_file: function(get_data, make_folder, callback) {
		 *         // once there is some data and the directory exists,
		 *         // write the data to a file in the directory
		 *         callback(null, 'filename');
		 *     },
		 *     email_link: function(write_file, callback) {
		 *         // once the file is written let's email a link to it...
		 *         // write_file contains the filename returned by write_file.
		 *         callback(null, {'file':write_file, 'email':'user@example.com'});
		 *     }
		 * }, function(err, results) {
		 *     console.log('err = ', err);
		 *     console.log('email_link = ', results.email_link);
		 * });
		 *
		 * // If you are using a JS minifier that mangles parameter names, `autoInject`
		 * // will not work with plain functions, since the parameter names will be
		 * // collapsed to a single letter identifier.  To work around this, you can
		 * // explicitly specify the names of the parameters your task function needs
		 * // in an array, similar to Angular.js dependency injection.
		 *
		 * // This still has an advantage over plain `auto`, since the results a task
		 * // depends on are still spread into arguments.
		 * async.autoInject({
		 *     //...
		 *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
		 *         callback(null, 'filename');
		 *     }],
		 *     email_link: ['write_file', function(write_file, callback) {
		 *         callback(null, {'file':write_file, 'email':'user@example.com'});
		 *     }]
		 *     //...
		 * }, function(err, results) {
		 *     console.log('err = ', err);
		 *     console.log('email_link = ', results.email_link);
		 * });
		 */
		function autoInject(tasks, callback) {
			var newTasks = {};

			baseForOwn(tasks, function(taskFn, key) {
				var params;
				var fnIsAsync = isAsync(taskFn);
				var hasNoDeps =
					(!fnIsAsync && taskFn.length === 1) ||
					(fnIsAsync && taskFn.length === 0);

				if (isArray(taskFn)) {
					params = taskFn.slice(0, -1);
					taskFn = taskFn[taskFn.length - 1];

					newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
				} else if (hasNoDeps) {
					// no dependencies, use the function as-is
					newTasks[key] = taskFn;
				} else {
					params = parseParams(taskFn);
					if (taskFn.length === 0 && !fnIsAsync && params.length === 0) {
						throw new Error("autoInject task functions require explicit parameters.");
					}

					// remove callback param
					if (!fnIsAsync) params.pop();

					newTasks[key] = params.concat(newTask);
				}

				function newTask(results, taskCb) {
					var newArgs = arrayMap(params, function(name) {
						return results[name];
					});
					newArgs.push(taskCb);
					wrapAsync(taskFn).apply(null, newArgs);
				}
			});

			auto(newTasks, callback);
		}

		// Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
		// used for queues. This implementation assumes that the node provided by the user can be modified
		// to adjust the next and last properties. We implement only the minimal functionality
		// for queue support.
		function DLL() {
			this.head = this.tail = null;
			this.length = 0;
		}

		function setInitial(dll, node) {
			dll.length = 1;
			dll.head = dll.tail = node;
		}

		DLL.prototype.removeLink = function(node) {
			if (node.prev) node.prev.next = node.next;
			else this.head = node.next;
			if (node.next) node.next.prev = node.prev;
			else this.tail = node.prev;

			node.prev = node.next = null;
			this.length -= 1;
			return node;
		};

		DLL.prototype.empty = function() {
			while (this.head) this.shift();
			return this;
		};

		DLL.prototype.insertAfter = function(node, newNode) {
			newNode.prev = node;
			newNode.next = node.next;
			if (node.next) node.next.prev = newNode;
			else this.tail = newNode;
			node.next = newNode;
			this.length += 1;
		};

		DLL.prototype.insertBefore = function(node, newNode) {
			newNode.prev = node.prev;
			newNode.next = node;
			if (node.prev) node.prev.next = newNode;
			else this.head = newNode;
			node.prev = newNode;
			this.length += 1;
		};

		DLL.prototype.unshift = function(node) {
			if (this.head) this.insertBefore(this.head, node);
			else setInitial(this, node);
		};

		DLL.prototype.push = function(node) {
			if (this.tail) this.insertAfter(this.tail, node);
			else setInitial(this, node);
		};

		DLL.prototype.shift = function() {
			return this.head && this.removeLink(this.head);
		};

		DLL.prototype.pop = function() {
			return this.tail && this.removeLink(this.tail);
		};

		DLL.prototype.toArray = function() {
			var arr = Array(this.length);
			var curr = this.head;
			for (var idx = 0; idx < this.length; idx++) {
				arr[idx] = curr.data;
				curr = curr.next;
			}
			return arr;
		};

		DLL.prototype.remove = function(testFn) {
			var curr = this.head;
			while (!!curr) {
				var next = curr.next;
				if (testFn(curr)) {
					this.removeLink(curr);
				}
				curr = next;
			}
			return this;
		};

		function queue(worker, concurrency, payload) {
			if (concurrency == null) {
				concurrency = 1;
			} else if (concurrency === 0) {
				throw new Error('Concurrency must not be zero');
			}

			var _worker = wrapAsync(worker);
			var numRunning = 0;
			var workersList = [];

			function _insert(data, insertAtFront, callback) {
				if (callback != null && typeof callback !== 'function') {
					throw new Error('task callback must be a function');
				}
				q.started = true;
				if (!isArray(data)) {
					data = [data];
				}
				if (data.length === 0 && q.idle()) {
					// call drain immediately if there are no tasks
					return setImmediate$1(function() {
						q.drain();
					});
				}

				for (var i = 0, l = data.length; i < l; i++) {
					var item = {
						data: data[i],
						callback: callback || noop
					};

					if (insertAtFront) {
						q._tasks.unshift(item);
					} else {
						q._tasks.push(item);
					}
				}
				setImmediate$1(q.process);
			}

			function _next(tasks) {
				return function(err) {
					numRunning -= 1;

					for (var i = 0, l = tasks.length; i < l; i++) {
						var task = tasks[i];

						var index = baseIndexOf(workersList, task, 0);
						if (index >= 0) {
							workersList.splice(index, 1);
						}

						task.callback.apply(task, arguments);

						if (err != null) {
							q.error(err, task.data);
						}
					}

					if (numRunning <= (q.concurrency - q.buffer)) {
						q.unsaturated();
					}

					if (q.idle()) {
						q.drain();
					}
					q.process();
				};
			}

			var isProcessing = false;
			var q = {
				_tasks: new DLL(),
				concurrency: concurrency,
				payload: payload,
				saturated: noop,
				unsaturated: noop,
				buffer: concurrency / 4,
				empty: noop,
				drain: noop,
				error: noop,
				started: false,
				paused: false,
				push: function(data, callback) {
					_insert(data, false, callback);
				},
				kill: function() {
					q.drain = noop;
					q._tasks.empty();
				},
				unshift: function(data, callback) {
					_insert(data, true, callback);
				},
				remove: function(testFn) {
					q._tasks.remove(testFn);
				},
				process: function() {
					// Avoid trying to start too many processing operations. This can occur
					// when callbacks resolve synchronously (#1267).
					if (isProcessing) {
						return;
					}
					isProcessing = true;
					while (!q.paused && numRunning < q.concurrency && q._tasks.length) {
						var tasks = [],
							data = [];
						var l = q._tasks.length;
						if (q.payload) l = Math.min(l, q.payload);
						for (var i = 0; i < l; i++) {
							var node = q._tasks.shift();
							tasks.push(node);
							workersList.push(node);
							data.push(node.data);
						}

						numRunning += 1;

						if (q._tasks.length === 0) {
							q.empty();
						}

						if (numRunning === q.concurrency) {
							q.saturated();
						}

						var cb = onlyOnce(_next(tasks));
						_worker(data, cb);
					}
					isProcessing = false;
				},
				length: function() {
					return q._tasks.length;
				},
				running: function() {
					return numRunning;
				},
				workersList: function() {
					return workersList;
				},
				idle: function() {
					return q._tasks.length + numRunning === 0;
				},
				pause: function() {
					q.paused = true;
				},
				resume: function() {
					if (q.paused === false) {
						return;
					}
					q.paused = false;
					setImmediate$1(q.process);
				}
			};
			return q;
		}

		/**
		 * A cargo of tasks for the worker function to complete. Cargo inherits all of
		 * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
		 * @typedef {Object} CargoObject
		 * @memberOf module:ControlFlow
		 * @property {Function} length - A function returning the number of items
		 * waiting to be processed. Invoke like `cargo.length()`.
		 * @property {number} payload - An `integer` for determining how many tasks
		 * should be process per round. This property can be changed after a `cargo` is
		 * created to alter the payload on-the-fly.
		 * @property {Function} push - Adds `task` to the `queue`. The callback is
		 * called once the `worker` has finished processing the task. Instead of a
		 * single task, an array of `tasks` can be submitted. The respective callback is
		 * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
		 * @property {Function} saturated - A callback that is called when the
		 * `queue.length()` hits the concurrency and further tasks will be queued.
		 * @property {Function} empty - A callback that is called when the last item
		 * from the `queue` is given to a `worker`.
		 * @property {Function} drain - A callback that is called when the last item
		 * from the `queue` has returned from the `worker`.
		 * @property {Function} idle - a function returning false if there are items
		 * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
		 * @property {Function} pause - a function that pauses the processing of tasks
		 * until `resume()` is called. Invoke like `cargo.pause()`.
		 * @property {Function} resume - a function that resumes the processing of
		 * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
		 * @property {Function} kill - a function that removes the `drain` callback and
		 * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
		 */

		/**
		 * Creates a `cargo` object with the specified payload. Tasks added to the
		 * cargo will be processed altogether (up to the `payload` limit). If the
		 * `worker` is in progress, the task is queued until it becomes available. Once
		 * the `worker` has completed some tasks, each callback of those tasks is
		 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
		 * for how `cargo` and `queue` work.
		 *
		 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
		 * at a time, cargo passes an array of tasks to a single worker, repeating
		 * when the worker is finished.
		 *
		 * @name cargo
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.queue]{@link module:ControlFlow.queue}
		 * @category Control Flow
		 * @param {AsyncFunction} worker - An asynchronous function for processing an array
		 * of queued tasks. Invoked with `(tasks, callback)`.
		 * @param {number} [payload=Infinity] - An optional `integer` for determining
		 * how many tasks should be processed per round; if omitted, the default is
		 * unlimited.
		 * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
		 * attached as certain properties to listen for specific events during the
		 * lifecycle of the cargo and inner queue.
		 * @example
		 *
		 * // create a cargo object with payload 2
		 * var cargo = async.cargo(function(tasks, callback) {
		 *     for (var i=0; i<tasks.length; i++) {
		 *         console.log('hello ' + tasks[i].name);
		 *     }
		 *     callback();
		 * }, 2);
		 *
		 * // add some items
		 * cargo.push({name: 'foo'}, function(err) {
		 *     console.log('finished processing foo');
		 * });
		 * cargo.push({name: 'bar'}, function(err) {
		 *     console.log('finished processing bar');
		 * });
		 * cargo.push({name: 'baz'}, function(err) {
		 *     console.log('finished processing baz');
		 * });
		 */
		function cargo(worker, payload) {
			return queue(worker, 1, payload);
		}

		/**
		 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
		 *
		 * @name eachOfSeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.eachOf]{@link module:Collections.eachOf}
		 * @alias forEachOfSeries
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async function to apply to each item in
		 * `coll`.
		 * Invoked with (item, key, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. Invoked with (err).
		 */
		var eachOfSeries = doLimit(eachOfLimit, 1);

		/**
		 * Reduces `coll` into a single value using an async `iteratee` to return each
		 * successive step. `memo` is the initial state of the reduction. This function
		 * only operates in series.
		 *
		 * For performance reasons, it may make sense to split a call to this function
		 * into a parallel map, and then use the normal `Array.prototype.reduce` on the
		 * results. This function is for situations where each step in the reduction
		 * needs to be async; if you can get the data before reducing it, then it's
		 * probably a good idea to do so.
		 *
		 * @name reduce
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @alias inject
		 * @alias foldl
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {*} memo - The initial state of the reduction.
		 * @param {AsyncFunction} iteratee - A function applied to each item in the
		 * array to produce the next step in the reduction.
		 * The `iteratee` should complete with the next state of the reduction.
		 * If the iteratee complete with an error, the reduction is stopped and the
		 * main `callback` is immediately called with the error.
		 * Invoked with (memo, item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Result is the reduced value. Invoked with
		 * (err, result).
		 * @example
		 *
		 * async.reduce([1,2,3], 0, function(memo, item, callback) {
		 *     // pointless async:
		 *     process.nextTick(function() {
		 *         callback(null, memo + item)
		 *     });
		 * }, function(err, result) {
		 *     // result is now equal to the last value of memo, which is 6
		 * });
		 */
		function reduce(coll, memo, iteratee, callback) {
			callback = once(callback || noop);
			var _iteratee = wrapAsync(iteratee);
			eachOfSeries(coll, function(x, i, callback) {
				_iteratee(memo, x, function(err, v) {
					memo = v;
					callback(err);
				});
			}, function(err) {
				callback(err, memo);
			});
		}

		/**
		 * Version of the compose function that is more natural to read. Each function
		 * consumes the return value of the previous function. It is the equivalent of
		 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
		 *
		 * Each function is executed with the `this` binding of the composed function.
		 *
		 * @name seq
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.compose]{@link module:ControlFlow.compose}
		 * @category Control Flow
		 * @param {...AsyncFunction} functions - the asynchronous functions to compose
		 * @returns {Function} a function that composes the `functions` in order
		 * @example
		 *
		 * // Requires lodash (or underscore), express3 and dresende's orm2.
		 * // Part of an app, that fetches cats of the logged user.
		 * // This example uses `seq` function to avoid overnesting and error
		 * // handling clutter.
		 * app.get('/cats', function(request, response) {
		 *     var User = request.models.User;
		 *     async.seq(
		 *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
		 *         function(user, fn) {
		 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
		 *         }
		 *     )(req.session.user_id, function (err, cats) {
		 *         if (err) {
		 *             console.error(err);
		 *             response.json({ status: 'error', message: err.message });
		 *         } else {
		 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
		 *         }
		 *     });
		 * });
		 */
		function seq( /*...functions*/ ) {
			var _functions = arrayMap(arguments, wrapAsync);
			return function( /*...args*/ ) {
				var args = slice(arguments);
				var that = this;

				var cb = args[args.length - 1];
				if (typeof cb == 'function') {
					args.pop();
				} else {
					cb = noop;
				}

				reduce(_functions, args, function(newargs, fn, cb) {
						fn.apply(that, newargs.concat(function(err /*, ...nextargs*/ ) {
							var nextargs = slice(arguments, 1);
							cb(err, nextargs);
						}));
					},
					function(err, results) {
						cb.apply(that, [err].concat(results));
					});
			};
		}

		/**
		 * Creates a function which is a composition of the passed asynchronous
		 * functions. Each function consumes the return value of the function that
		 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
		 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
		 *
		 * Each function is executed with the `this` binding of the composed function.
		 *
		 * @name compose
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {...AsyncFunction} functions - the asynchronous functions to compose
		 * @returns {Function} an asynchronous function that is the composed
		 * asynchronous `functions`
		 * @example
		 *
		 * function add1(n, callback) {
		 *     setTimeout(function () {
		 *         callback(null, n + 1);
		 *     }, 10);
		 * }
		 *
		 * function mul3(n, callback) {
		 *     setTimeout(function () {
		 *         callback(null, n * 3);
		 *     }, 10);
		 * }
		 *
		 * var add1mul3 = async.compose(mul3, add1);
		 * add1mul3(4, function (err, result) {
		 *     // result now equals 15
		 * });
		 */
		var compose = function( /*...args*/ ) {
			return seq.apply(null, slice(arguments).reverse());
		};

		var _concat = Array.prototype.concat;

		/**
		 * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
		 *
		 * @name concatLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.concat]{@link module:Collections.concat}
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
		 * which should use an array as its result. Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished, or an error occurs. Results is an array
		 * containing the concatenated results of the `iteratee` function. Invoked with
		 * (err, results).
		 */
		var concatLimit = function(coll, limit, iteratee, callback) {
			callback = callback || noop;
			var _iteratee = wrapAsync(iteratee);
			mapLimit(coll, limit, function(val, callback) {
				_iteratee(val, function(err /*, ...args*/ ) {
					if (err) return callback(err);
					return callback(null, slice(arguments, 1));
				});
			}, function(err, mapResults) {
				var result = [];
				for (var i = 0; i < mapResults.length; i++) {
					if (mapResults[i]) {
						result = _concat.apply(result, mapResults[i]);
					}
				}

				return callback(err, result);
			});
		};

		/**
		 * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
		 * the concatenated list. The `iteratee`s are called in parallel, and the
		 * results are concatenated as they return. There is no guarantee that the
		 * results array will be returned in the original order of `coll` passed to the
		 * `iteratee` function.
		 *
		 * @name concat
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
		 * which should use an array as its result. Invoked with (item, callback).
		 * @param {Function} [callback(err)] - A callback which is called after all the
		 * `iteratee` functions have finished, or an error occurs. Results is an array
		 * containing the concatenated results of the `iteratee` function. Invoked with
		 * (err, results).
		 * @example
		 *
		 * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
		 *     // files is now a list of filenames that exist in the 3 directories
		 * });
		 */
		var concat = doLimit(concatLimit, Infinity);

		/**
		 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
		 *
		 * @name concatSeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.concat]{@link module:Collections.concat}
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
		 * The iteratee should complete with an array an array of results.
		 * Invoked with (item, callback).
		 * @param {Function} [callback(err)] - A callback which is called after all the
		 * `iteratee` functions have finished, or an error occurs. Results is an array
		 * containing the concatenated results of the `iteratee` function. Invoked with
		 * (err, results).
		 */
		var concatSeries = doLimit(concatLimit, 1);

		/**
		 * Returns a function that when called, calls-back with the values provided.
		 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
		 * [`auto`]{@link module:ControlFlow.auto}.
		 *
		 * @name constant
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @category Util
		 * @param {...*} arguments... - Any number of arguments to automatically invoke
		 * callback with.
		 * @returns {AsyncFunction} Returns a function that when invoked, automatically
		 * invokes the callback with the previous given arguments.
		 * @example
		 *
		 * async.waterfall([
		 *     async.constant(42),
		 *     function (value, next) {
		 *         // value === 42
		 *     },
		 *     //...
		 * ], callback);
		 *
		 * async.waterfall([
		 *     async.constant(filename, "utf8"),
		 *     fs.readFile,
		 *     function (fileData, next) {
		 *         //...
		 *     }
		 *     //...
		 * ], callback);
		 *
		 * async.auto({
		 *     hostname: async.constant("https://server.net/"),
		 *     port: findFreePort,
		 *     launchServer: ["hostname", "port", function (options, cb) {
		 *         startServer(options, cb);
		 *     }],
		 *     //...
		 * }, callback);
		 */
		var constant = function( /*...values*/ ) {
			var values = slice(arguments);
			var args = [null].concat(values);
			return function( /*...ignoredArgs, callback*/ ) {
				var callback = arguments[arguments.length - 1];
				return callback.apply(this, args);
			};
		};

		/**
		 * This method returns the first argument it receives.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Util
		 * @param {*} value Any value.
		 * @returns {*} Returns `value`.
		 * @example
		 *
		 * var object = { 'a': 1 };
		 *
		 * console.log(_.identity(object) === object);
		 * // => true
		 */
		function identity(value) {
			return value;
		}

		function _createTester(check, getResult) {
			return function(eachfn, arr, iteratee, cb) {
				cb = cb || noop;
				var testPassed = false;
				var testResult;
				eachfn(arr, function(value, _, callback) {
					iteratee(value, function(err, result) {
						if (err) {
							callback(err);
						} else if (check(result) && !testResult) {
							testPassed = true;
							testResult = getResult(true, value);
							callback(null, breakLoop);
						} else {
							callback();
						}
					});
				}, function(err) {
					if (err) {
						cb(err);
					} else {
						cb(null, testPassed ? testResult : getResult(false));
					}
				});
			};
		}

		function _findGetResult(v, x) {
			return x;
		}

		/**
		 * Returns the first value in `coll` that passes an async truth test. The
		 * `iteratee` is applied in parallel, meaning the first iteratee to return
		 * `true` will fire the detect `callback` with that result. That means the
		 * result might not be the first item in the original `coll` (in terms of order)
		 * that passes the test.
		 
		 * If order within the original `coll` is important, then look at
		 * [`detectSeries`]{@link module:Collections.detectSeries}.
		 *
		 * @name detect
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @alias find
		 * @category Collections
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
		 * The iteratee must complete with a boolean value as its result.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called as soon as any
		 * iteratee returns `true`, or after all the `iteratee` functions have finished.
		 * Result will be the first item in the array that passes the truth test
		 * (iteratee) or the value `undefined` if none passed. Invoked with
		 * (err, result).
		 * @example
		 *
		 * async.detect(['file1','file2','file3'], function(filePath, callback) {
		 *     fs.access(filePath, function(err) {
		 *         callback(null, !err)
		 *     });
		 * }, function(err, result) {
		 *     // result now equals the first file in the list that exists
		 * });
		 */
		var detect = doParallel(_createTester(identity, _findGetResult));

		/**
		 * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
		 * time.
		 *
		 * @name detectLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.detect]{@link module:Collections.detect}
		 * @alias findLimit
		 * @category Collections
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
		 * The iteratee must complete with a boolean value as its result.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called as soon as any
		 * iteratee returns `true`, or after all the `iteratee` functions have finished.
		 * Result will be the first item in the array that passes the truth test
		 * (iteratee) or the value `undefined` if none passed. Invoked with
		 * (err, result).
		 */
		var detectLimit = doParallelLimit(_createTester(identity, _findGetResult));

		/**
		 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
		 *
		 * @name detectSeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.detect]{@link module:Collections.detect}
		 * @alias findSeries
		 * @category Collections
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
		 * The iteratee must complete with a boolean value as its result.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called as soon as any
		 * iteratee returns `true`, or after all the `iteratee` functions have finished.
		 * Result will be the first item in the array that passes the truth test
		 * (iteratee) or the value `undefined` if none passed. Invoked with
		 * (err, result).
		 */
		var detectSeries = doLimit(detectLimit, 1);

		function consoleFunc(name) {
			return function(fn /*, ...args*/ ) {
				var args = slice(arguments, 1);
				args.push(function(err /*, ...args*/ ) {
					var args = slice(arguments, 1);
					if (typeof console === 'object') {
						if (err) {
							if (console.error) {
								console.error(err);
							}
						} else if (console[name]) {
							arrayEach(args, function(x) {
								console[name](x);
							});
						}
					}
				});
				wrapAsync(fn).apply(null, args);
			};
		}

		/**
		 * Logs the result of an [`async` function]{@link AsyncFunction} to the
		 * `console` using `console.dir` to display the properties of the resulting object.
		 * Only works in Node.js or in browsers that support `console.dir` and
		 * `console.error` (such as FF and Chrome).
		 * If multiple arguments are returned from the async function,
		 * `console.dir` is called on each argument in order.
		 *
		 * @name dir
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @category Util
		 * @param {AsyncFunction} function - The function you want to eventually apply
		 * all arguments to.
		 * @param {...*} arguments... - Any number of arguments to apply to the function.
		 * @example
		 *
		 * // in a module
		 * var hello = function(name, callback) {
		 *     setTimeout(function() {
		 *         callback(null, {hello: name});
		 *     }, 1000);
		 * };
		 *
		 * // in the node repl
		 * node> async.dir(hello, 'world');
		 * {hello: 'world'}
		 */
		var dir = consoleFunc('dir');

		/**
		 * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
		 * the order of operations, the arguments `test` and `fn` are switched.
		 *
		 * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
		 * @name doDuring
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.during]{@link module:ControlFlow.during}
		 * @category Control Flow
		 * @param {AsyncFunction} fn - An async function which is called each time
		 * `test` passes. Invoked with (callback).
		 * @param {AsyncFunction} test - asynchronous truth test to perform before each
		 * execution of `fn`. Invoked with (...args, callback), where `...args` are the
		 * non-error args from the previous callback of `fn`.
		 * @param {Function} [callback] - A callback which is called after the test
		 * function has failed and repeated execution of `fn` has stopped. `callback`
		 * will be passed an error if one occurred, otherwise `null`.
		 */
		function doDuring(fn, test, callback) {
			callback = onlyOnce(callback || noop);
			var _fn = wrapAsync(fn);
			var _test = wrapAsync(test);

			function next(err /*, ...args*/ ) {
				if (err) return callback(err);
				var args = slice(arguments, 1);
				args.push(check);
				_test.apply(this, args);
			}

			function check(err, truth) {
				if (err) return callback(err);
				if (!truth) return callback(null);
				_fn(next);
			}

			check(null, true);

		}

		/**
		 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
		 * the order of operations, the arguments `test` and `iteratee` are switched.
		 *
		 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
		 *
		 * @name doWhilst
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.whilst]{@link module:ControlFlow.whilst}
		 * @category Control Flow
		 * @param {AsyncFunction} iteratee - A function which is called each time `test`
		 * passes. Invoked with (callback).
		 * @param {Function} test - synchronous truth test to perform after each
		 * execution of `iteratee`. Invoked with any non-error callback results of
		 * `iteratee`.
		 * @param {Function} [callback] - A callback which is called after the test
		 * function has failed and repeated execution of `iteratee` has stopped.
		 * `callback` will be passed an error and any arguments passed to the final
		 * `iteratee`'s callback. Invoked with (err, [results]);
		 */
		function doWhilst(iteratee, test, callback) {
			callback = onlyOnce(callback || noop);
			var _iteratee = wrapAsync(iteratee);
			var next = function(err /*, ...args*/ ) {
				if (err) return callback(err);
				var args = slice(arguments, 1);
				if (test.apply(this, args)) return _iteratee(next);
				callback.apply(null, [null].concat(args));
			};
			_iteratee(next);
		}

		/**
		 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
		 * argument ordering differs from `until`.
		 *
		 * @name doUntil
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
		 * @category Control Flow
		 * @param {AsyncFunction} iteratee - An async function which is called each time
		 * `test` fails. Invoked with (callback).
		 * @param {Function} test - synchronous truth test to perform after each
		 * execution of `iteratee`. Invoked with any non-error callback results of
		 * `iteratee`.
		 * @param {Function} [callback] - A callback which is called after the test
		 * function has passed and repeated execution of `iteratee` has stopped. `callback`
		 * will be passed an error and any arguments passed to the final `iteratee`'s
		 * callback. Invoked with (err, [results]);
		 */
		function doUntil(iteratee, test, callback) {
			doWhilst(iteratee, function() {
				return !test.apply(this, arguments);
			}, callback);
		}

		/**
		 * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
		 * is passed a callback in the form of `function (err, truth)`. If error is
		 * passed to `test` or `fn`, the main callback is immediately called with the
		 * value of the error.
		 *
		 * @name during
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.whilst]{@link module:ControlFlow.whilst}
		 * @category Control Flow
		 * @param {AsyncFunction} test - asynchronous truth test to perform before each
		 * execution of `fn`. Invoked with (callback).
		 * @param {AsyncFunction} fn - An async function which is called each time
		 * `test` passes. Invoked with (callback).
		 * @param {Function} [callback] - A callback which is called after the test
		 * function has failed and repeated execution of `fn` has stopped. `callback`
		 * will be passed an error, if one occurred, otherwise `null`.
		 * @example
		 *
		 * var count = 0;
		 *
		 * async.during(
		 *     function (callback) {
		 *         return callback(null, count < 5);
		 *     },
		 *     function (callback) {
		 *         count++;
		 *         setTimeout(callback, 1000);
		 *     },
		 *     function (err) {
		 *         // 5 seconds have passed
		 *     }
		 * );
		 */
		function during(test, fn, callback) {
			callback = onlyOnce(callback || noop);
			var _fn = wrapAsync(fn);
			var _test = wrapAsync(test);

			function next(err) {
				if (err) return callback(err);
				_test(check);
			}

			function check(err, truth) {
				if (err) return callback(err);
				if (!truth) return callback(null);
				_fn(next);
			}

			_test(check);
		}

		function _withoutIndex(iteratee) {
			return function(value, index, callback) {
				return iteratee(value, callback);
			};
		}

		/**
		 * Applies the function `iteratee` to each item in `coll`, in parallel.
		 * The `iteratee` is called with an item from the list, and a callback for when
		 * it has finished. If the `iteratee` passes an error to its `callback`, the
		 * main `callback` (for the `each` function) is immediately called with the
		 * error.
		 *
		 * Note, that since this function applies `iteratee` to each item in parallel,
		 * there is no guarantee that the iteratee functions will complete in order.
		 *
		 * @name each
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @alias forEach
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async function to apply to
		 * each item in `coll`. Invoked with (item, callback).
		 * The array index is not passed to the iteratee.
		 * If you need the index, use `eachOf`.
		 * @param {Function} [callback] - A callback which is called when all
		 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
		 * @example
		 *
		 * // assuming openFiles is an array of file names and saveFile is a function
		 * // to save the modified contents of that file:
		 *
		 * async.each(openFiles, saveFile, function(err){
		 *   // if any of the saves produced an error, err would equal that error
		 * });
		 *
		 * // assuming openFiles is an array of file names
		 * async.each(openFiles, function(file, callback) {
		 *
		 *     // Perform operation on file here.
		 *     console.log('Processing file ' + file);
		 *
		 *     if( file.length > 32 ) {
		 *       console.log('This file name is too long');
		 *       callback('File name too long');
		 *     } else {
		 *       // Do work to process file here
		 *       console.log('File processed');
		 *       callback();
		 *     }
		 * }, function(err) {
		 *     // if any of the file processing produced an error, err would equal that error
		 *     if( err ) {
		 *       // One of the iterations produced an error.
		 *       // All processing will now stop.
		 *       console.log('A file failed to process');
		 *     } else {
		 *       console.log('All files have been processed successfully');
		 *     }
		 * });
		 */
		function eachLimit(coll, iteratee, callback) {
			eachOf(coll, _withoutIndex(wrapAsync(iteratee)), callback);
		}

		/**
		 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
		 *
		 * @name eachLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.each]{@link module:Collections.each}
		 * @alias forEachLimit
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - An async function to apply to each item in
		 * `coll`.
		 * The array index is not passed to the iteratee.
		 * If you need the index, use `eachOfLimit`.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called when all
		 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
		 */
		function eachLimit$1(coll, limit, iteratee, callback) {
			_eachOfLimit(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
		}

		/**
		 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
		 *
		 * @name eachSeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.each]{@link module:Collections.each}
		 * @alias forEachSeries
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async function to apply to each
		 * item in `coll`.
		 * The array index is not passed to the iteratee.
		 * If you need the index, use `eachOfSeries`.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called when all
		 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
		 */
		var eachSeries = doLimit(eachLimit$1, 1);

		/**
		 * Wrap an async function and ensure it calls its callback on a later tick of
		 * the event loop.  If the function already calls its callback on a next tick,
		 * no extra deferral is added. This is useful for preventing stack overflows
		 * (`RangeError: Maximum call stack size exceeded`) and generally keeping
		 * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
		 * contained. ES2017 `async` functions are returned as-is -- they are immune
		 * to Zalgo's corrupting influences, as they always resolve on a later tick.
		 *
		 * @name ensureAsync
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @category Util
		 * @param {AsyncFunction} fn - an async function, one that expects a node-style
		 * callback as its last argument.
		 * @returns {AsyncFunction} Returns a wrapped function with the exact same call
		 * signature as the function passed in.
		 * @example
		 *
		 * function sometimesAsync(arg, callback) {
		 *     if (cache[arg]) {
		 *         return callback(null, cache[arg]); // this would be synchronous!!
		 *     } else {
		 *         doSomeIO(arg, callback); // this IO would be asynchronous
		 *     }
		 * }
		 *
		 * // this has a risk of stack overflows if many results are cached in a row
		 * async.mapSeries(args, sometimesAsync, done);
		 *
		 * // this will defer sometimesAsync's callback if necessary,
		 * // preventing stack overflows
		 * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
		 */
		function ensureAsync(fn) {
			if (isAsync(fn)) return fn;
			return initialParams(function(args, callback) {
				var sync = true;
				args.push(function() {
					var innerArgs = arguments;
					if (sync) {
						setImmediate$1(function() {
							callback.apply(null, innerArgs);
						});
					} else {
						callback.apply(null, innerArgs);
					}
				});
				fn.apply(this, args);
				sync = false;
			});
		}

		function notId(v) {
			return !v;
		}

		/**
		 * Returns `true` if every element in `coll` satisfies an async test. If any
		 * iteratee call returns `false`, the main `callback` is immediately called.
		 *
		 * @name every
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @alias all
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
		 * in the collection in parallel.
		 * The iteratee must complete with a boolean result value.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Result will be either `true` or `false`
		 * depending on the values of the async tests. Invoked with (err, result).
		 * @example
		 *
		 * async.every(['file1','file2','file3'], function(filePath, callback) {
		 *     fs.access(filePath, function(err) {
		 *         callback(null, !err)
		 *     });
		 * }, function(err, result) {
		 *     // if result is true then every file exists
		 * });
		 */
		var every = doParallel(_createTester(notId, notId));

		/**
		 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
		 *
		 * @name everyLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.every]{@link module:Collections.every}
		 * @alias allLimit
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
		 * in the collection in parallel.
		 * The iteratee must complete with a boolean result value.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Result will be either `true` or `false`
		 * depending on the values of the async tests. Invoked with (err, result).
		 */
		var everyLimit = doParallelLimit(_createTester(notId, notId));

		/**
		 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
		 *
		 * @name everySeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.every]{@link module:Collections.every}
		 * @alias allSeries
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
		 * in the collection in series.
		 * The iteratee must complete with a boolean result value.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Result will be either `true` or `false`
		 * depending on the values of the async tests. Invoked with (err, result).
		 */
		var everySeries = doLimit(everyLimit, 1);

		/**
		 * The base implementation of `_.property` without support for deep paths.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 */
		function baseProperty(key) {
			return function(object) {
				return object == null ? undefined : object[key];
			};
		}

		function filterArray(eachfn, arr, iteratee, callback) {
			var truthValues = new Array(arr.length);
			eachfn(arr, function(x, index, callback) {
				iteratee(x, function(err, v) {
					truthValues[index] = !!v;
					callback(err);
				});
			}, function(err) {
				if (err) return callback(err);
				var results = [];
				for (var i = 0; i < arr.length; i++) {
					if (truthValues[i]) results.push(arr[i]);
				}
				callback(null, results);
			});
		}

		function filterGeneric(eachfn, coll, iteratee, callback) {
			var results = [];
			eachfn(coll, function(x, index, callback) {
				iteratee(x, function(err, v) {
					if (err) {
						callback(err);
					} else {
						if (v) {
							results.push({
								index: index,
								value: x
							});
						}
						callback();
					}
				});
			}, function(err) {
				if (err) {
					callback(err);
				} else {
					callback(null, arrayMap(results.sort(function(a, b) {
						return a.index - b.index;
					}), baseProperty('value')));
				}
			});
		}

		function _filter(eachfn, coll, iteratee, callback) {
			var filter = isArrayLike(coll) ? filterArray : filterGeneric;
			filter(eachfn, coll, wrapAsync(iteratee), callback || noop);
		}

		/**
		 * Returns a new array of all the values in `coll` which pass an async truth
		 * test. This operation is performed in parallel, but the results array will be
		 * in the same order as the original.
		 *
		 * @name filter
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @alias select
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
		 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
		 * with a boolean argument once it has completed. Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Invoked with (err, results).
		 * @example
		 *
		 * async.filter(['file1','file2','file3'], function(filePath, callback) {
		 *     fs.access(filePath, function(err) {
		 *         callback(null, !err)
		 *     });
		 * }, function(err, results) {
		 *     // results now equals an array of the existing files
		 * });
		 */
		var filter = doParallel(_filter);

		/**
		 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
		 * time.
		 *
		 * @name filterLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.filter]{@link module:Collections.filter}
		 * @alias selectLimit
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
		 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
		 * with a boolean argument once it has completed. Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Invoked with (err, results).
		 */
		var filterLimit = doParallelLimit(_filter);

		/**
		 * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
		 *
		 * @name filterSeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.filter]{@link module:Collections.filter}
		 * @alias selectSeries
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
		 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
		 * with a boolean argument once it has completed. Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Invoked with (err, results)
		 */
		var filterSeries = doLimit(filterLimit, 1);

		/**
		 * Calls the asynchronous function `fn` with a callback parameter that allows it
		 * to call itself again, in series, indefinitely.
		 
		 * If an error is passed to the callback then `errback` is called with the
		 * error, and execution stops, otherwise it will never be called.
		 *
		 * @name forever
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {AsyncFunction} fn - an async function to call repeatedly.
		 * Invoked with (next).
		 * @param {Function} [errback] - when `fn` passes an error to it's callback,
		 * this function will be called, and execution stops. Invoked with (err).
		 * @example
		 *
		 * async.forever(
		 *     function(next) {
		 *         // next is suitable for passing to things that need a callback(err [, whatever]);
		 *         // it will result in this function being called again.
		 *     },
		 *     function(err) {
		 *         // if next is called with a value in its first parameter, it will appear
		 *         // in here as 'err', and execution will stop.
		 *     }
		 * );
		 */
		function forever(fn, errback) {
			var done = onlyOnce(errback || noop);
			var task = wrapAsync(ensureAsync(fn));

			function next(err) {
				if (err) return done(err);
				task(next);
			}
			next();
		}

		/**
		 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
		 *
		 * @name groupByLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.groupBy]{@link module:Collections.groupBy}
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - An async function to apply to each item in
		 * `coll`.
		 * The iteratee should complete with a `key` to group the value under.
		 * Invoked with (value, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. Result is an `Object` whoses
		 * properties are arrays of values which returned the corresponding key.
		 */
		var groupByLimit = function(coll, limit, iteratee, callback) {
			callback = callback || noop;
			var _iteratee = wrapAsync(iteratee);
			mapLimit(coll, limit, function(val, callback) {
				_iteratee(val, function(err, key) {
					if (err) return callback(err);
					return callback(null, {
						key: key,
						val: val
					});
				});
			}, function(err, mapResults) {
				var result = {};
				// from MDN, handle object having an `hasOwnProperty` prop
				var hasOwnProperty = Object.prototype.hasOwnProperty;

				for (var i = 0; i < mapResults.length; i++) {
					if (mapResults[i]) {
						var key = mapResults[i].key;
						var val = mapResults[i].val;

						if (hasOwnProperty.call(result, key)) {
							result[key].push(val);
						} else {
							result[key] = [val];
						}
					}
				}

				return callback(err, result);
			});
		};

		/**
		 * Returns a new object, where each value corresponds to an array of items, from
		 * `coll`, that returned the corresponding key. That is, the keys of the object
		 * correspond to the values passed to the `iteratee` callback.
		 *
		 * Note: Since this function applies the `iteratee` to each item in parallel,
		 * there is no guarantee that the `iteratee` functions will complete in order.
		 * However, the values for each key in the `result` will be in the same order as
		 * the original `coll`. For Objects, the values will roughly be in the order of
		 * the original Objects' keys (but this can vary across JavaScript engines).
		 *
		 * @name groupBy
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async function to apply to each item in
		 * `coll`.
		 * The iteratee should complete with a `key` to group the value under.
		 * Invoked with (value, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. Result is an `Object` whoses
		 * properties are arrays of values which returned the corresponding key.
		 * @example
		 *
		 * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
		 *     db.findById(userId, function(err, user) {
		 *         if (err) return callback(err);
		 *         return callback(null, user.age);
		 *     });
		 * }, function(err, result) {
		 *     // result is object containing the userIds grouped by age
		 *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
		 * });
		 */
		var groupBy = doLimit(groupByLimit, Infinity);

		/**
		 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
		 *
		 * @name groupBySeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.groupBy]{@link module:Collections.groupBy}
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - An async function to apply to each item in
		 * `coll`.
		 * The iteratee should complete with a `key` to group the value under.
		 * Invoked with (value, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. Result is an `Object` whoses
		 * properties are arrays of values which returned the corresponding key.
		 */
		var groupBySeries = doLimit(groupByLimit, 1);

		/**
		 * Logs the result of an `async` function to the `console`. Only works in
		 * Node.js or in browsers that support `console.log` and `console.error` (such
		 * as FF and Chrome). If multiple arguments are returned from the async
		 * function, `console.log` is called on each argument in order.
		 *
		 * @name log
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @category Util
		 * @param {AsyncFunction} function - The function you want to eventually apply
		 * all arguments to.
		 * @param {...*} arguments... - Any number of arguments to apply to the function.
		 * @example
		 *
		 * // in a module
		 * var hello = function(name, callback) {
		 *     setTimeout(function() {
		 *         callback(null, 'hello ' + name);
		 *     }, 1000);
		 * };
		 *
		 * // in the node repl
		 * node> async.log(hello, 'world');
		 * 'hello world'
		 */
		var log = consoleFunc('log');

		/**
		 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
		 * time.
		 *
		 * @name mapValuesLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.mapValues]{@link module:Collections.mapValues}
		 * @category Collection
		 * @param {Object} obj - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - A function to apply to each value and key
		 * in `coll`.
		 * The iteratee should complete with the transformed value as its result.
		 * Invoked with (value, key, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. `result` is a new object consisting
		 * of each key from `obj`, with each transformed value on the right-hand side.
		 * Invoked with (err, result).
		 */
		function mapValuesLimit(obj, limit, iteratee, callback) {
			callback = once(callback || noop);
			var newObj = {};
			var _iteratee = wrapAsync(iteratee);
			eachOfLimit(obj, limit, function(val, key, next) {
				_iteratee(val, key, function(err, result) {
					if (err) return next(err);
					newObj[key] = result;
					next();
				});
			}, function(err) {
				callback(err, newObj);
			});
		}

		/**
		 * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
		 *
		 * Produces a new Object by mapping each value of `obj` through the `iteratee`
		 * function. The `iteratee` is called each `value` and `key` from `obj` and a
		 * callback for when it has finished processing. Each of these callbacks takes
		 * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
		 * passes an error to its callback, the main `callback` (for the `mapValues`
		 * function) is immediately called with the error.
		 *
		 * Note, the order of the keys in the result is not guaranteed.  The keys will
		 * be roughly in the order they complete, (but this is very engine-specific)
		 *
		 * @name mapValues
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @category Collection
		 * @param {Object} obj - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - A function to apply to each value and key
		 * in `coll`.
		 * The iteratee should complete with the transformed value as its result.
		 * Invoked with (value, key, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. `result` is a new object consisting
		 * of each key from `obj`, with each transformed value on the right-hand side.
		 * Invoked with (err, result).
		 * @example
		 *
		 * async.mapValues({
		 *     f1: 'file1',
		 *     f2: 'file2',
		 *     f3: 'file3'
		 * }, function (file, key, callback) {
		 *   fs.stat(file, callback);
		 * }, function(err, result) {
		 *     // result is now a map of stats for each file, e.g.
		 *     // {
		 *     //     f1: [stats for file1],
		 *     //     f2: [stats for file2],
		 *     //     f3: [stats for file3]
		 *     // }
		 * });
		 */

		var mapValues = doLimit(mapValuesLimit, Infinity);

		/**
		 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
		 *
		 * @name mapValuesSeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.mapValues]{@link module:Collections.mapValues}
		 * @category Collection
		 * @param {Object} obj - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - A function to apply to each value and key
		 * in `coll`.
		 * The iteratee should complete with the transformed value as its result.
		 * Invoked with (value, key, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. `result` is a new object consisting
		 * of each key from `obj`, with each transformed value on the right-hand side.
		 * Invoked with (err, result).
		 */
		var mapValuesSeries = doLimit(mapValuesLimit, 1);

		function has(obj, key) {
			return key in obj;
		}

		/**
		 * Caches the results of an async function. When creating a hash to store
		 * function results against, the callback is omitted from the hash and an
		 * optional hash function can be used.
		 *
		 * If no hash function is specified, the first argument is used as a hash key,
		 * which may work reasonably if it is a string or a data type that converts to a
		 * distinct string. Note that objects and arrays will not behave reasonably.
		 * Neither will cases where the other arguments are significant. In such cases,
		 * specify your own hash function.
		 *
		 * The cache of results is exposed as the `memo` property of the function
		 * returned by `memoize`.
		 *
		 * @name memoize
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @category Util
		 * @param {AsyncFunction} fn - The async function to proxy and cache results from.
		 * @param {Function} hasher - An optional function for generating a custom hash
		 * for storing results. It has all the arguments applied to it apart from the
		 * callback, and must be synchronous.
		 * @returns {AsyncFunction} a memoized version of `fn`
		 * @example
		 *
		 * var slow_fn = function(name, callback) {
		 *     // do something
		 *     callback(null, result);
		 * };
		 * var fn = async.memoize(slow_fn);
		 *
		 * // fn can now be used as if it were slow_fn
		 * fn('some name', function() {
		 *     // callback
		 * });
		 */
		function memoize(fn, hasher) {
			var memo = Object.create(null);
			var queues = Object.create(null);
			hasher = hasher || identity;
			var _fn = wrapAsync(fn);
			var memoized = initialParams(function memoized(args, callback) {
				var key = hasher.apply(null, args);
				if (has(memo, key)) {
					setImmediate$1(function() {
						callback.apply(null, memo[key]);
					});
				} else if (has(queues, key)) {
					queues[key].push(callback);
				} else {
					queues[key] = [callback];
					_fn.apply(null, args.concat(function( /*args*/ ) {
						var args = slice(arguments);
						memo[key] = args;
						var q = queues[key];
						delete queues[key];
						for (var i = 0, l = q.length; i < l; i++) {
							q[i].apply(null, args);
						}
					}));
				}
			});
			memoized.memo = memo;
			memoized.unmemoized = fn;
			return memoized;
		}

		/**
		 * Calls `callback` on a later loop around the event loop. In Node.js this just
		 * calls `setImmediate`.  In the browser it will use `setImmediate` if
		 * available, otherwise `setTimeout(callback, 0)`, which means other higher
		 * priority events may precede the execution of `callback`.
		 *
		 * This is used internally for browser-compatibility purposes.
		 *
		 * @name nextTick
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @alias setImmediate
		 * @category Util
		 * @param {Function} callback - The function to call on a later loop around
		 * the event loop. Invoked with (args...).
		 * @param {...*} args... - any number of additional arguments to pass to the
		 * callback on the next tick.
		 * @example
		 *
		 * var call_order = [];
		 * async.nextTick(function() {
		 *     call_order.push('two');
		 *     // call_order now equals ['one','two']
		 * });
		 * call_order.push('one');
		 *
		 * async.setImmediate(function (a, b, c) {
		 *     // a, b, and c equal 1, 2, and 3
		 * }, 1, 2, 3);
		 */
		var _defer$1;

		if (hasNextTick) {
			_defer$1 = process.nextTick;
		} else if (hasSetImmediate) {
			_defer$1 = setImmediate;
		} else {
			_defer$1 = fallback;
		}

		var nextTick = wrap(_defer$1);

		function _parallel(eachfn, tasks, callback) {
			callback = callback || noop;
			var results = isArrayLike(tasks) ? [] : {};

			eachfn(tasks, function(task, key, callback) {
				wrapAsync(task)(function(err, result) {
					if (arguments.length > 2) {
						result = slice(arguments, 1);
					}
					results[key] = result;
					callback(err);
				});
			}, function(err) {
				callback(err, results);
			});
		}

		/**
		 * Run the `tasks` collection of functions in parallel, without waiting until
		 * the previous function has completed. If any of the functions pass an error to
		 * its callback, the main `callback` is immediately called with the value of the
		 * error. Once the `tasks` have completed, the results are passed to the final
		 * `callback` as an array.
		 *
		 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
		 * parallel execution of code.  If your tasks do not use any timers or perform
		 * any I/O, they will actually be executed in series.  Any synchronous setup
		 * sections for each task will happen one after the other.  JavaScript remains
		 * single-threaded.
		 *
		 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
		 * execution of other tasks when a task fails.
		 *
		 * It is also possible to use an object instead of an array. Each property will
		 * be run as a function and the results will be passed to the final `callback`
		 * as an object instead of an array. This can be a more readable way of handling
		 * results from {@link async.parallel}.
		 *
		 * @name parallel
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {Array|Iterable|Object} tasks - A collection of
		 * [async functions]{@link AsyncFunction} to run.
		 * Each async function can complete with any number of optional `result` values.
		 * @param {Function} [callback] - An optional callback to run once all the
		 * functions have completed successfully. This function gets a results array
		 * (or object) containing all the result arguments passed to the task callbacks.
		 * Invoked with (err, results).
		 *
		 * @example
		 * async.parallel([
		 *     function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 'one');
		 *         }, 200);
		 *     },
		 *     function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 'two');
		 *         }, 100);
		 *     }
		 * ],
		 * // optional callback
		 * function(err, results) {
		 *     // the results array will equal ['one','two'] even though
		 *     // the second function had a shorter timeout.
		 * });
		 *
		 * // an example using an object instead of an array
		 * async.parallel({
		 *     one: function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 1);
		 *         }, 200);
		 *     },
		 *     two: function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 2);
		 *         }, 100);
		 *     }
		 * }, function(err, results) {
		 *     // results is now equals to: {one: 1, two: 2}
		 * });
		 */
		function parallelLimit(tasks, callback) {
			_parallel(eachOf, tasks, callback);
		}

		/**
		 * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
		 * time.
		 *
		 * @name parallelLimit
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.parallel]{@link module:ControlFlow.parallel}
		 * @category Control Flow
		 * @param {Array|Iterable|Object} tasks - A collection of
		 * [async functions]{@link AsyncFunction} to run.
		 * Each async function can complete with any number of optional `result` values.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {Function} [callback] - An optional callback to run once all the
		 * functions have completed successfully. This function gets a results array
		 * (or object) containing all the result arguments passed to the task callbacks.
		 * Invoked with (err, results).
		 */
		function parallelLimit$1(tasks, limit, callback) {
			_parallel(_eachOfLimit(limit), tasks, callback);
		}

		/**
		 * A queue of tasks for the worker function to complete.
		 * @typedef {Object} QueueObject
		 * @memberOf module:ControlFlow
		 * @property {Function} length - a function returning the number of items
		 * waiting to be processed. Invoke with `queue.length()`.
		 * @property {boolean} started - a boolean indicating whether or not any
		 * items have been pushed and processed by the queue.
		 * @property {Function} running - a function returning the number of items
		 * currently being processed. Invoke with `queue.running()`.
		 * @property {Function} workersList - a function returning the array of items
		 * currently being processed. Invoke with `queue.workersList()`.
		 * @property {Function} idle - a function returning false if there are items
		 * waiting or being processed, or true if not. Invoke with `queue.idle()`.
		 * @property {number} concurrency - an integer for determining how many `worker`
		 * functions should be run in parallel. This property can be changed after a
		 * `queue` is created to alter the concurrency on-the-fly.
		 * @property {Function} push - add a new task to the `queue`. Calls `callback`
		 * once the `worker` has finished processing the task. Instead of a single task,
		 * a `tasks` array can be submitted. The respective callback is used for every
		 * task in the list. Invoke with `queue.push(task, [callback])`,
		 * @property {Function} unshift - add a new task to the front of the `queue`.
		 * Invoke with `queue.unshift(task, [callback])`.
		 * @property {Function} remove - remove items from the queue that match a test
		 * function.  The test function will be passed an object with a `data` property,
		 * and a `priority` property, if this is a
		 * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
		 * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
		 * `function ({data, priority}) {}` and returns a Boolean.
		 * @property {Function} saturated - a callback that is called when the number of
		 * running workers hits the `concurrency` limit, and further tasks will be
		 * queued.
		 * @property {Function} unsaturated - a callback that is called when the number
		 * of running workers is less than the `concurrency` & `buffer` limits, and
		 * further tasks will not be queued.
		 * @property {number} buffer - A minimum threshold buffer in order to say that
		 * the `queue` is `unsaturated`.
		 * @property {Function} empty - a callback that is called when the last item
		 * from the `queue` is given to a `worker`.
		 * @property {Function} drain - a callback that is called when the last item
		 * from the `queue` has returned from the `worker`.
		 * @property {Function} error - a callback that is called when a task errors.
		 * Has the signature `function(error, task)`.
		 * @property {boolean} paused - a boolean for determining whether the queue is
		 * in a paused state.
		 * @property {Function} pause - a function that pauses the processing of tasks
		 * until `resume()` is called. Invoke with `queue.pause()`.
		 * @property {Function} resume - a function that resumes the processing of
		 * queued tasks when the queue is paused. Invoke with `queue.resume()`.
		 * @property {Function} kill - a function that removes the `drain` callback and
		 * empties remaining tasks from the queue forcing it to go idle. No more tasks
		 * should be pushed to the queue after calling this function. Invoke with `queue.kill()`.
		 */

		/**
		 * Creates a `queue` object with the specified `concurrency`. Tasks added to the
		 * `queue` are processed in parallel (up to the `concurrency` limit). If all
		 * `worker`s are in progress, the task is queued until one becomes available.
		 * Once a `worker` completes a `task`, that `task`'s callback is called.
		 *
		 * @name queue
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {AsyncFunction} worker - An async function for processing a queued task.
		 * If you want to handle errors from an individual task, pass a callback to
		 * `q.push()`. Invoked with (task, callback).
		 * @param {number} [concurrency=1] - An `integer` for determining how many
		 * `worker` functions should be run in parallel.  If omitted, the concurrency
		 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
		 * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
		 * attached as certain properties to listen for specific events during the
		 * lifecycle of the queue.
		 * @example
		 *
		 * // create a queue object with concurrency 2
		 * var q = async.queue(function(task, callback) {
		 *     console.log('hello ' + task.name);
		 *     callback();
		 * }, 2);
		 *
		 * // assign a callback
		 * q.drain = function() {
		 *     console.log('all items have been processed');
		 * };
		 *
		 * // add some items to the queue
		 * q.push({name: 'foo'}, function(err) {
		 *     console.log('finished processing foo');
		 * });
		 * q.push({name: 'bar'}, function (err) {
		 *     console.log('finished processing bar');
		 * });
		 *
		 * // add some items to the queue (batch-wise)
		 * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
		 *     console.log('finished processing item');
		 * });
		 *
		 * // add some items to the front of the queue
		 * q.unshift({name: 'bar'}, function (err) {
		 *     console.log('finished processing bar');
		 * });
		 */
		var queue$1 = function(worker, concurrency) {
			var _worker = wrapAsync(worker);
			return queue(function(items, cb) {
				_worker(items[0], cb);
			}, concurrency, 1);
		};

		/**
		 * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
		 * completed in ascending priority order.
		 *
		 * @name priorityQueue
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.queue]{@link module:ControlFlow.queue}
		 * @category Control Flow
		 * @param {AsyncFunction} worker - An async function for processing a queued task.
		 * If you want to handle errors from an individual task, pass a callback to
		 * `q.push()`.
		 * Invoked with (task, callback).
		 * @param {number} concurrency - An `integer` for determining how many `worker`
		 * functions should be run in parallel.  If omitted, the concurrency defaults to
		 * `1`.  If the concurrency is `0`, an error is thrown.
		 * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
		 * differences between `queue` and `priorityQueue` objects:
		 * * `push(task, priority, [callback])` - `priority` should be a number. If an
		 *   array of `tasks` is given, all tasks will be assigned the same priority.
		 * * The `unshift` method was removed.
		 */
		var priorityQueue = function(worker, concurrency) {
			// Start with a normal queue
			var q = queue$1(worker, concurrency);

			// Override push to accept second parameter representing priority
			q.push = function(data, priority, callback) {
				if (callback == null) callback = noop;
				if (typeof callback !== 'function') {
					throw new Error('task callback must be a function');
				}
				q.started = true;
				if (!isArray(data)) {
					data = [data];
				}
				if (data.length === 0) {
					// call drain immediately if there are no tasks
					return setImmediate$1(function() {
						q.drain();
					});
				}

				priority = priority || 0;
				var nextNode = q._tasks.head;
				while (nextNode && priority >= nextNode.priority) {
					nextNode = nextNode.next;
				}

				for (var i = 0, l = data.length; i < l; i++) {
					var item = {
						data: data[i],
						priority: priority,
						callback: callback
					};

					if (nextNode) {
						q._tasks.insertBefore(nextNode, item);
					} else {
						q._tasks.push(item);
					}
				}
				setImmediate$1(q.process);
			};

			// Remove unshift function
			delete q.unshift;

			return q;
		};

		/**
		 * Runs the `tasks` array of functions in parallel, without waiting until the
		 * previous function has completed. Once any of the `tasks` complete or pass an
		 * error to its callback, the main `callback` is immediately called. It's
		 * equivalent to `Promise.race()`.
		 *
		 * @name race
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
		 * to run. Each function can complete with an optional `result` value.
		 * @param {Function} callback - A callback to run once any of the functions have
		 * completed. This function gets an error or result from the first function that
		 * completed. Invoked with (err, result).
		 * @returns undefined
		 * @example
		 *
		 * async.race([
		 *     function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 'one');
		 *         }, 200);
		 *     },
		 *     function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 'two');
		 *         }, 100);
		 *     }
		 * ],
		 * // main callback
		 * function(err, result) {
		 *     // the result will be equal to 'two' as it finishes earlier
		 * });
		 */
		function race(tasks, callback) {
			callback = once(callback || noop);
			if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
			if (!tasks.length) return callback();
			for (var i = 0, l = tasks.length; i < l; i++) {
				wrapAsync(tasks[i])(callback);
			}
		}

		/**
		 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
		 *
		 * @name reduceRight
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.reduce]{@link module:Collections.reduce}
		 * @alias foldr
		 * @category Collection
		 * @param {Array} array - A collection to iterate over.
		 * @param {*} memo - The initial state of the reduction.
		 * @param {AsyncFunction} iteratee - A function applied to each item in the
		 * array to produce the next step in the reduction.
		 * The `iteratee` should complete with the next state of the reduction.
		 * If the iteratee complete with an error, the reduction is stopped and the
		 * main `callback` is immediately called with the error.
		 * Invoked with (memo, item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Result is the reduced value. Invoked with
		 * (err, result).
		 */
		function reduceRight(array, memo, iteratee, callback) {
			var reversed = slice(array).reverse();
			reduce(reversed, memo, iteratee, callback);
		}

		/**
		 * Wraps the async function in another function that always completes with a
		 * result object, even when it errors.
		 *
		 * The result object has either the property `error` or `value`.
		 *
		 * @name reflect
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @category Util
		 * @param {AsyncFunction} fn - The async function you want to wrap
		 * @returns {Function} - A function that always passes null to it's callback as
		 * the error. The second argument to the callback will be an `object` with
		 * either an `error` or a `value` property.
		 * @example
		 *
		 * async.parallel([
		 *     async.reflect(function(callback) {
		 *         // do some stuff ...
		 *         callback(null, 'one');
		 *     }),
		 *     async.reflect(function(callback) {
		 *         // do some more stuff but error ...
		 *         callback('bad stuff happened');
		 *     }),
		 *     async.reflect(function(callback) {
		 *         // do some more stuff ...
		 *         callback(null, 'two');
		 *     })
		 * ],
		 * // optional callback
		 * function(err, results) {
		 *     // values
		 *     // results[0].value = 'one'
		 *     // results[1].error = 'bad stuff happened'
		 *     // results[2].value = 'two'
		 * });
		 */
		function reflect(fn) {
			var _fn = wrapAsync(fn);
			return initialParams(function reflectOn(args, reflectCallback) {
				args.push(function callback(error, cbArg) {
					if (error) {
						reflectCallback(null, {
							error: error
						});
					} else {
						var value;
						if (arguments.length <= 2) {
							value = cbArg;
						} else {
							value = slice(arguments, 1);
						}
						reflectCallback(null, {
							value: value
						});
					}
				});

				return _fn.apply(this, args);
			});
		}

		function reject$1(eachfn, arr, iteratee, callback) {
			_filter(eachfn, arr, function(value, cb) {
				iteratee(value, function(err, v) {
					cb(err, !v);
				});
			}, callback);
		}

		/**
		 * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
		 *
		 * @name reject
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.filter]{@link module:Collections.filter}
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {Function} iteratee - An async truth test to apply to each item in
		 * `coll`.
		 * The should complete with a boolean value as its `result`.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Invoked with (err, results).
		 * @example
		 *
		 * async.reject(['file1','file2','file3'], function(filePath, callback) {
		 *     fs.access(filePath, function(err) {
		 *         callback(null, !err)
		 *     });
		 * }, function(err, results) {
		 *     // results now equals an array of missing files
		 *     createFiles(results);
		 * });
		 */
		var reject = doParallel(reject$1);

		/**
		 * A helper function that wraps an array or an object of functions with `reflect`.
		 *
		 * @name reflectAll
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @see [async.reflect]{@link module:Utils.reflect}
		 * @category Util
		 * @param {Array|Object|Iterable} tasks - The collection of
		 * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
		 * @returns {Array} Returns an array of async functions, each wrapped in
		 * `async.reflect`
		 * @example
		 *
		 * let tasks = [
		 *     function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 'one');
		 *         }, 200);
		 *     },
		 *     function(callback) {
		 *         // do some more stuff but error ...
		 *         callback(new Error('bad stuff happened'));
		 *     },
		 *     function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 'two');
		 *         }, 100);
		 *     }
		 * ];
		 *
		 * async.parallel(async.reflectAll(tasks),
		 * // optional callback
		 * function(err, results) {
		 *     // values
		 *     // results[0].value = 'one'
		 *     // results[1].error = Error('bad stuff happened')
		 *     // results[2].value = 'two'
		 * });
		 *
		 * // an example using an object instead of an array
		 * let tasks = {
		 *     one: function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 'one');
		 *         }, 200);
		 *     },
		 *     two: function(callback) {
		 *         callback('two');
		 *     },
		 *     three: function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 'three');
		 *         }, 100);
		 *     }
		 * };
		 *
		 * async.parallel(async.reflectAll(tasks),
		 * // optional callback
		 * function(err, results) {
		 *     // values
		 *     // results.one.value = 'one'
		 *     // results.two.error = 'two'
		 *     // results.three.value = 'three'
		 * });
		 */
		function reflectAll(tasks) {
			var results;
			if (isArray(tasks)) {
				results = arrayMap(tasks, reflect);
			} else {
				results = {};
				baseForOwn(tasks, function(task, key) {
					results[key] = reflect.call(this, task);
				});
			}
			return results;
		}

		/**
		 * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
		 * time.
		 *
		 * @name rejectLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.reject]{@link module:Collections.reject}
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {Function} iteratee - An async truth test to apply to each item in
		 * `coll`.
		 * The should complete with a boolean value as its `result`.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Invoked with (err, results).
		 */
		var rejectLimit = doParallelLimit(reject$1);

		/**
		 * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
		 *
		 * @name rejectSeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.reject]{@link module:Collections.reject}
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {Function} iteratee - An async truth test to apply to each item in
		 * `coll`.
		 * The should complete with a boolean value as its `result`.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Invoked with (err, results).
		 */
		var rejectSeries = doLimit(rejectLimit, 1);

		/**
		 * Creates a function that returns `value`.
		 *
		 * @static
		 * @memberOf _
		 * @since 2.4.0
		 * @category Util
		 * @param {*} value The value to return from the new function.
		 * @returns {Function} Returns the new constant function.
		 * @example
		 *
		 * var objects = _.times(2, _.constant({ 'a': 1 }));
		 *
		 * console.log(objects);
		 * // => [{ 'a': 1 }, { 'a': 1 }]
		 *
		 * console.log(objects[0] === objects[1]);
		 * // => true
		 */
		function constant$1(value) {
			return function() {
				return value;
			};
		}

		/**
		 * Attempts to get a successful response from `task` no more than `times` times
		 * before returning an error. If the task is successful, the `callback` will be
		 * passed the result of the successful task. If all attempts fail, the callback
		 * will be passed the error and result (if any) of the final attempt.
		 *
		 * @name retry
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @see [async.retryable]{@link module:ControlFlow.retryable}
		 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
		 * object with `times` and `interval` or a number.
		 * * `times` - The number of attempts to make before giving up.  The default
		 *   is `5`.
		 * * `interval` - The time to wait between retries, in milliseconds.  The
		 *   default is `0`. The interval may also be specified as a function of the
		 *   retry count (see example).
		 * * `errorFilter` - An optional synchronous function that is invoked on
		 *   erroneous result. If it returns `true` the retry attempts will continue;
		 *   if the function returns `false` the retry flow is aborted with the current
		 *   attempt's error and result being returned to the final callback.
		 *   Invoked with (err).
		 * * If `opts` is a number, the number specifies the number of times to retry,
		 *   with the default interval of `0`.
		 * @param {AsyncFunction} task - An async function to retry.
		 * Invoked with (callback).
		 * @param {Function} [callback] - An optional callback which is called when the
		 * task has succeeded, or after the final failed attempt. It receives the `err`
		 * and `result` arguments of the last attempt at completing the `task`. Invoked
		 * with (err, results).
		 *
		 * @example
		 *
		 * // The `retry` function can be used as a stand-alone control flow by passing
		 * // a callback, as shown below:
		 *
		 * // try calling apiMethod 3 times
		 * async.retry(3, apiMethod, function(err, result) {
		 *     // do something with the result
		 * });
		 *
		 * // try calling apiMethod 3 times, waiting 200 ms between each retry
		 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
		 *     // do something with the result
		 * });
		 *
		 * // try calling apiMethod 10 times with exponential backoff
		 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
		 * async.retry({
		 *   times: 10,
		 *   interval: function(retryCount) {
		 *     return 50 * Math.pow(2, retryCount);
		 *   }
		 * }, apiMethod, function(err, result) {
		 *     // do something with the result
		 * });
		 *
		 * // try calling apiMethod the default 5 times no delay between each retry
		 * async.retry(apiMethod, function(err, result) {
		 *     // do something with the result
		 * });
		 *
		 * // try calling apiMethod only when error condition satisfies, all other
		 * // errors will abort the retry control flow and return to final callback
		 * async.retry({
		 *   errorFilter: function(err) {
		 *     return err.message === 'Temporary error'; // only retry on a specific error
		 *   }
		 * }, apiMethod, function(err, result) {
		 *     // do something with the result
		 * });
		 *
		 * // It can also be embedded within other control flow functions to retry
		 * // individual methods that are not as reliable, like this:
		 * async.auto({
		 *     users: api.getUsers.bind(api),
		 *     payments: async.retryable(3, api.getPayments.bind(api))
		 * }, function(err, results) {
		 *     // do something with the results
		 * });
		 *
		 */
		function retry(opts, task, callback) {
			var DEFAULT_TIMES = 5;
			var DEFAULT_INTERVAL = 0;

			var options = {
				times: DEFAULT_TIMES,
				intervalFunc: constant$1(DEFAULT_INTERVAL)
			};

			function parseTimes(acc, t) {
				if (typeof t === 'object') {
					acc.times = +t.times || DEFAULT_TIMES;

					acc.intervalFunc = typeof t.interval === 'function' ?
						t.interval :
						constant$1(+t.interval || DEFAULT_INTERVAL);

					acc.errorFilter = t.errorFilter;
				} else if (typeof t === 'number' || typeof t === 'string') {
					acc.times = +t || DEFAULT_TIMES;
				} else {
					throw new Error("Invalid arguments for async.retry");
				}
			}

			if (arguments.length < 3 && typeof opts === 'function') {
				callback = task || noop;
				task = opts;
			} else {
				parseTimes(options, opts);
				callback = callback || noop;
			}

			if (typeof task !== 'function') {
				throw new Error("Invalid arguments for async.retry");
			}

			var _task = wrapAsync(task);

			var attempt = 1;

			function retryAttempt() {
				_task(function(err) {
					if (err && attempt++ < options.times &&
						(typeof options.errorFilter != 'function' ||
							options.errorFilter(err))) {
						setTimeout(retryAttempt, options.intervalFunc(attempt));
					} else {
						callback.apply(null, arguments);
					}
				});
			}

			retryAttempt();
		}

		/**
		 * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
		 * wraps a task and makes it retryable, rather than immediately calling it
		 * with retries.
		 *
		 * @name retryable
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.retry]{@link module:ControlFlow.retry}
		 * @category Control Flow
		 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
		 * options, exactly the same as from `retry`
		 * @param {AsyncFunction} task - the asynchronous function to wrap.
		 * This function will be passed any arguments passed to the returned wrapper.
		 * Invoked with (...args, callback).
		 * @returns {AsyncFunction} The wrapped function, which when invoked, will
		 * retry on an error, based on the parameters specified in `opts`.
		 * This function will accept the same parameters as `task`.
		 * @example
		 *
		 * async.auto({
		 *     dep1: async.retryable(3, getFromFlakyService),
		 *     process: ["dep1", async.retryable(3, function (results, cb) {
		 *         maybeProcessData(results.dep1, cb);
		 *     })]
		 * }, callback);
		 */
		var retryable = function(opts, task) {
			if (!task) {
				task = opts;
				opts = null;
			}
			var _task = wrapAsync(task);
			return initialParams(function(args, callback) {
				function taskFn(cb) {
					_task.apply(null, args.concat(cb));
				}

				if (opts) retry(opts, taskFn, callback);
				else retry(taskFn, callback);

			});
		};

		/**
		 * Run the functions in the `tasks` collection in series, each one running once
		 * the previous function has completed. If any functions in the series pass an
		 * error to its callback, no more functions are run, and `callback` is
		 * immediately called with the value of the error. Otherwise, `callback`
		 * receives an array of results when `tasks` have completed.
		 *
		 * It is also possible to use an object instead of an array. Each property will
		 * be run as a function, and the results will be passed to the final `callback`
		 * as an object instead of an array. This can be a more readable way of handling
		 *  results from {@link async.series}.
		 *
		 * **Note** that while many implementations preserve the order of object
		 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
		 * explicitly states that
		 *
		 * > The mechanics and order of enumerating the properties is not specified.
		 *
		 * So if you rely on the order in which your series of functions are executed,
		 * and want this to work on all platforms, consider using an array.
		 *
		 * @name series
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {Array|Iterable|Object} tasks - A collection containing
		 * [async functions]{@link AsyncFunction} to run in series.
		 * Each function can complete with any number of optional `result` values.
		 * @param {Function} [callback] - An optional callback to run once all the
		 * functions have completed. This function gets a results array (or object)
		 * containing all the result arguments passed to the `task` callbacks. Invoked
		 * with (err, result).
		 * @example
		 * async.series([
		 *     function(callback) {
		 *         // do some stuff ...
		 *         callback(null, 'one');
		 *     },
		 *     function(callback) {
		 *         // do some more stuff ...
		 *         callback(null, 'two');
		 *     }
		 * ],
		 * // optional callback
		 * function(err, results) {
		 *     // results is now equal to ['one', 'two']
		 * });
		 *
		 * async.series({
		 *     one: function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 1);
		 *         }, 200);
		 *     },
		 *     two: function(callback){
		 *         setTimeout(function() {
		 *             callback(null, 2);
		 *         }, 100);
		 *     }
		 * }, function(err, results) {
		 *     // results is now equal to: {one: 1, two: 2}
		 * });
		 */
		function series(tasks, callback) {
			_parallel(eachOfSeries, tasks, callback);
		}

		/**
		 * Returns `true` if at least one element in the `coll` satisfies an async test.
		 * If any iteratee call returns `true`, the main `callback` is immediately
		 * called.
		 *
		 * @name some
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @alias any
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
		 * in the collections in parallel.
		 * The iteratee should complete with a boolean `result` value.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called as soon as any
		 * iteratee returns `true`, or after all the iteratee functions have finished.
		 * Result will be either `true` or `false` depending on the values of the async
		 * tests. Invoked with (err, result).
		 * @example
		 *
		 * async.some(['file1','file2','file3'], function(filePath, callback) {
		 *     fs.access(filePath, function(err) {
		 *         callback(null, !err)
		 *     });
		 * }, function(err, result) {
		 *     // if result is true then at least one of the files exists
		 * });
		 */
		var some = doParallel(_createTester(Boolean, identity));

		/**
		 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
		 *
		 * @name someLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.some]{@link module:Collections.some}
		 * @alias anyLimit
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
		 * in the collections in parallel.
		 * The iteratee should complete with a boolean `result` value.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called as soon as any
		 * iteratee returns `true`, or after all the iteratee functions have finished.
		 * Result will be either `true` or `false` depending on the values of the async
		 * tests. Invoked with (err, result).
		 */
		var someLimit = doParallelLimit(_createTester(Boolean, identity));

		/**
		 * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
		 *
		 * @name someSeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.some]{@link module:Collections.some}
		 * @alias anySeries
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
		 * in the collections in series.
		 * The iteratee should complete with a boolean `result` value.
		 * Invoked with (item, callback).
		 * @param {Function} [callback] - A callback which is called as soon as any
		 * iteratee returns `true`, or after all the iteratee functions have finished.
		 * Result will be either `true` or `false` depending on the values of the async
		 * tests. Invoked with (err, result).
		 */
		var someSeries = doLimit(someLimit, 1);

		/**
		 * Sorts a list by the results of running each `coll` value through an async
		 * `iteratee`.
		 *
		 * @name sortBy
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async function to apply to each item in
		 * `coll`.
		 * The iteratee should complete with a value to use as the sort criteria as
		 * its `result`.
		 * Invoked with (item, callback).
		 * @param {Function} callback - A callback which is called after all the
		 * `iteratee` functions have finished, or an error occurs. Results is the items
		 * from the original `coll` sorted by the values returned by the `iteratee`
		 * calls. Invoked with (err, results).
		 * @example
		 *
		 * async.sortBy(['file1','file2','file3'], function(file, callback) {
		 *     fs.stat(file, function(err, stats) {
		 *         callback(err, stats.mtime);
		 *     });
		 * }, function(err, results) {
		 *     // results is now the original array of files sorted by
		 *     // modified date
		 * });
		 *
		 * // By modifying the callback parameter the
		 * // sorting order can be influenced:
		 *
		 * // ascending order
		 * async.sortBy([1,9,3,5], function(x, callback) {
		 *     callback(null, x);
		 * }, function(err,result) {
		 *     // result callback
		 * });
		 *
		 * // descending order
		 * async.sortBy([1,9,3,5], function(x, callback) {
		 *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
		 * }, function(err,result) {
		 *     // result callback
		 * });
		 */
		function sortBy(coll, iteratee, callback) {
			var _iteratee = wrapAsync(iteratee);
			map(coll, function(x, callback) {
				_iteratee(x, function(err, criteria) {
					if (err) return callback(err);
					callback(null, {
						value: x,
						criteria: criteria
					});
				});
			}, function(err, results) {
				if (err) return callback(err);
				callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
			});

			function comparator(left, right) {
				var a = left.criteria,
					b = right.criteria;
				return a < b ? -1 : a > b ? 1 : 0;
			}
		}

		/**
		 * Sets a time limit on an asynchronous function. If the function does not call
		 * its callback within the specified milliseconds, it will be called with a
		 * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
		 *
		 * @name timeout
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @category Util
		 * @param {AsyncFunction} asyncFn - The async function to limit in time.
		 * @param {number} milliseconds - The specified time limit.
		 * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
		 * to timeout Error for more information..
		 * @returns {AsyncFunction} Returns a wrapped function that can be used with any
		 * of the control flow functions.
		 * Invoke this function with the same parameters as you would `asyncFunc`.
		 * @example
		 *
		 * function myFunction(foo, callback) {
		 *     doAsyncTask(foo, function(err, data) {
		 *         // handle errors
		 *         if (err) return callback(err);
		 *
		 *         // do some stuff ...
		 *
		 *         // return processed data
		 *         return callback(null, data);
		 *     });
		 * }
		 *
		 * var wrapped = async.timeout(myFunction, 1000);
		 *
		 * // call `wrapped` as you would `myFunction`
		 * wrapped({ bar: 'bar' }, function(err, data) {
		 *     // if `myFunction` takes < 1000 ms to execute, `err`
		 *     // and `data` will have their expected values
		 *
		 *     // else `err` will be an Error with the code 'ETIMEDOUT'
		 * });
		 */
		function timeout(asyncFn, milliseconds, info) {
			var fn = wrapAsync(asyncFn);

			return initialParams(function(args, callback) {
				var timedOut = false;
				var timer;

				function timeoutCallback() {
					var name = asyncFn.name || 'anonymous';
					var error = new Error('Callback function "' + name + '" timed out.');
					error.code = 'ETIMEDOUT';
					if (info) {
						error.info = info;
					}
					timedOut = true;
					callback(error);
				}

				args.push(function() {
					if (!timedOut) {
						callback.apply(null, arguments);
						clearTimeout(timer);
					}
				});

				// setup timer and call original function
				timer = setTimeout(timeoutCallback, milliseconds);
				fn.apply(null, args);
			});
		}

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeCeil = Math.ceil;
		var nativeMax = Math.max;

		/**
		 * The base implementation of `_.range` and `_.rangeRight` which doesn't
		 * coerce arguments.
		 *
		 * @private
		 * @param {number} start The start of the range.
		 * @param {number} end The end of the range.
		 * @param {number} step The value to increment or decrement by.
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {Array} Returns the range of numbers.
		 */
		function baseRange(start, end, step, fromRight) {
			var index = -1,
				length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
				result = Array(length);

			while (length--) {
				result[fromRight ? length : ++index] = start;
				start += step;
			}
			return result;
		}

		/**
		 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
		 * time.
		 *
		 * @name timesLimit
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.times]{@link module:ControlFlow.times}
		 * @category Control Flow
		 * @param {number} count - The number of times to run the function.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - The async function to call `n` times.
		 * Invoked with the iteration index and a callback: (n, next).
		 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
		 */
		function timeLimit(count, limit, iteratee, callback) {
			var _iteratee = wrapAsync(iteratee);
			mapLimit(baseRange(0, count, 1), limit, _iteratee, callback);
		}

		/**
		 * Calls the `iteratee` function `n` times, and accumulates results in the same
		 * manner you would use with [map]{@link module:Collections.map}.
		 *
		 * @name times
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.map]{@link module:Collections.map}
		 * @category Control Flow
		 * @param {number} n - The number of times to run the function.
		 * @param {AsyncFunction} iteratee - The async function to call `n` times.
		 * Invoked with the iteration index and a callback: (n, next).
		 * @param {Function} callback - see {@link module:Collections.map}.
		 * @example
		 *
		 * // Pretend this is some complicated async factory
		 * var createUser = function(id, callback) {
		 *     callback(null, {
		 *         id: 'user' + id
		 *     });
		 * };
		 *
		 * // generate 5 users
		 * async.times(5, function(n, next) {
		 *     createUser(n, function(err, user) {
		 *         next(err, user);
		 *     });
		 * }, function(err, users) {
		 *     // we should now have 5 users
		 * });
		 */
		var times = doLimit(timeLimit, Infinity);

		/**
		 * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
		 *
		 * @name timesSeries
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.times]{@link module:ControlFlow.times}
		 * @category Control Flow
		 * @param {number} n - The number of times to run the function.
		 * @param {AsyncFunction} iteratee - The async function to call `n` times.
		 * Invoked with the iteration index and a callback: (n, next).
		 * @param {Function} callback - see {@link module:Collections.map}.
		 */
		var timesSeries = doLimit(timeLimit, 1);

		/**
		 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
		 * element in series, each step potentially mutating an `accumulator` value.
		 * The type of the accumulator defaults to the type of collection passed in.
		 *
		 * @name transform
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @category Collection
		 * @param {Array|Iterable|Object} coll - A collection to iterate over.
		 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
		 * it will default to an empty Object or Array, depending on the type of `coll`
		 * @param {AsyncFunction} iteratee - A function applied to each item in the
		 * collection that potentially modifies the accumulator.
		 * Invoked with (accumulator, item, key, callback).
		 * @param {Function} [callback] - A callback which is called after all the
		 * `iteratee` functions have finished. Result is the transformed accumulator.
		 * Invoked with (err, result).
		 * @example
		 *
		 * async.transform([1,2,3], function(acc, item, index, callback) {
		 *     // pointless async:
		 *     process.nextTick(function() {
		 *         acc.push(item * 2)
		 *         callback(null)
		 *     });
		 * }, function(err, result) {
		 *     // result is now equal to [2, 4, 6]
		 * });
		 *
		 * @example
		 *
		 * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
		 *     setImmediate(function () {
		 *         obj[key] = val * 2;
		 *         callback();
		 *     })
		 * }, function (err, result) {
		 *     // result is equal to {a: 2, b: 4, c: 6}
		 * })
		 */
		function transform(coll, accumulator, iteratee, callback) {
			if (arguments.length <= 3) {
				callback = iteratee;
				iteratee = accumulator;
				accumulator = isArray(coll) ? [] : {};
			}
			callback = once(callback || noop);
			var _iteratee = wrapAsync(iteratee);

			eachOf(coll, function(v, k, cb) {
				_iteratee(accumulator, v, k, cb);
			}, function(err) {
				callback(err, accumulator);
			});
		}

		/**
		 * It runs each task in series but stops whenever any of the functions were
		 * successful. If one of the tasks were successful, the `callback` will be
		 * passed the result of the successful task. If all tasks fail, the callback
		 * will be passed the error and result (if any) of the final attempt.
		 *
		 * @name tryEach
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {Array|Iterable|Object} tasks - A collection containing functions to
		 * run, each function is passed a `callback(err, result)` it must call on
		 * completion with an error `err` (which can be `null`) and an optional `result`
		 * value.
		 * @param {Function} [callback] - An optional callback which is called when one
		 * of the tasks has succeeded, or all have failed. It receives the `err` and
		 * `result` arguments of the last attempt at completing the `task`. Invoked with
		 * (err, results).
		 * @example
		 * async.try([
		 *     function getDataFromFirstWebsite(callback) {
		 *         // Try getting the data from the first website
		 *         callback(err, data);
		 *     },
		 *     function getDataFromSecondWebsite(callback) {
		 *         // First website failed,
		 *         // Try getting the data from the backup website
		 *         callback(err, data);
		 *     }
		 * ],
		 * // optional callback
		 * function(err, results) {
		 *     Now do something with the data.
		 * });
		 *
		 */
		function tryEach(tasks, callback) {
			var error = null;
			var result;
			callback = callback || noop;
			eachSeries(tasks, function(task, callback) {
				wrapAsync(task)(function(err, res /*, ...args*/ ) {
					if (arguments.length > 2) {
						result = slice(arguments, 1);
					} else {
						result = res;
					}
					error = err;
					callback(!err);
				});
			}, function() {
				callback(error, result);
			});
		}

		/**
		 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
		 * unmemoized form. Handy for testing.
		 *
		 * @name unmemoize
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @see [async.memoize]{@link module:Utils.memoize}
		 * @category Util
		 * @param {AsyncFunction} fn - the memoized function
		 * @returns {AsyncFunction} a function that calls the original unmemoized function
		 */
		function unmemoize(fn) {
			return function() {
				return (fn.unmemoized || fn).apply(null, arguments);
			};
		}

		/**
		 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
		 * stopped, or an error occurs.
		 *
		 * @name whilst
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {Function} test - synchronous truth test to perform before each
		 * execution of `iteratee`. Invoked with ().
		 * @param {AsyncFunction} iteratee - An async function which is called each time
		 * `test` passes. Invoked with (callback).
		 * @param {Function} [callback] - A callback which is called after the test
		 * function has failed and repeated execution of `iteratee` has stopped. `callback`
		 * will be passed an error and any arguments passed to the final `iteratee`'s
		 * callback. Invoked with (err, [results]);
		 * @returns undefined
		 * @example
		 *
		 * var count = 0;
		 * async.whilst(
		 *     function() { return count < 5; },
		 *     function(callback) {
		 *         count++;
		 *         setTimeout(function() {
		 *             callback(null, count);
		 *         }, 1000);
		 *     },
		 *     function (err, n) {
		 *         // 5 seconds have passed, n = 5
		 *     }
		 * );
		 */
		function whilst(test, iteratee, callback) {
			callback = onlyOnce(callback || noop);
			var _iteratee = wrapAsync(iteratee);
			if (!test()) return callback(null);
			var next = function(err /*, ...args*/ ) {
				if (err) return callback(err);
				if (test()) return _iteratee(next);
				var args = slice(arguments, 1);
				callback.apply(null, [null].concat(args));
			};
			_iteratee(next);
		}

		/**
		 * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
		 * stopped, or an error occurs. `callback` will be passed an error and any
		 * arguments passed to the final `iteratee`'s callback.
		 *
		 * The inverse of [whilst]{@link module:ControlFlow.whilst}.
		 *
		 * @name until
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @see [async.whilst]{@link module:ControlFlow.whilst}
		 * @category Control Flow
		 * @param {Function} test - synchronous truth test to perform before each
		 * execution of `iteratee`. Invoked with ().
		 * @param {AsyncFunction} iteratee - An async function which is called each time
		 * `test` fails. Invoked with (callback).
		 * @param {Function} [callback] - A callback which is called after the test
		 * function has passed and repeated execution of `iteratee` has stopped. `callback`
		 * will be passed an error and any arguments passed to the final `iteratee`'s
		 * callback. Invoked with (err, [results]);
		 */
		function until(test, iteratee, callback) {
			whilst(function() {
				return !test.apply(this, arguments);
			}, iteratee, callback);
		}

		/**
		 * Runs the `tasks` array of functions in series, each passing their results to
		 * the next in the array. However, if any of the `tasks` pass an error to their
		 * own callback, the next function is not executed, and the main `callback` is
		 * immediately called with the error.
		 *
		 * @name waterfall
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
		 * to run.
		 * Each function should complete with any number of `result` values.
		 * The `result` values will be passed as arguments, in order, to the next task.
		 * @param {Function} [callback] - An optional callback to run once all the
		 * functions have completed. This will be passed the results of the last task's
		 * callback. Invoked with (err, [results]).
		 * @returns undefined
		 * @example
		 *
		 * async.waterfall([
		 *     function(callback) {
		 *         callback(null, 'one', 'two');
		 *     },
		 *     function(arg1, arg2, callback) {
		 *         // arg1 now equals 'one' and arg2 now equals 'two'
		 *         callback(null, 'three');
		 *     },
		 *     function(arg1, callback) {
		 *         // arg1 now equals 'three'
		 *         callback(null, 'done');
		 *     }
		 * ], function (err, result) {
		 *     // result now equals 'done'
		 * });
		 *
		 * // Or, with named functions:
		 * async.waterfall([
		 *     myFirstFunction,
		 *     mySecondFunction,
		 *     myLastFunction,
		 * ], function (err, result) {
		 *     // result now equals 'done'
		 * });
		 * function myFirstFunction(callback) {
		 *     callback(null, 'one', 'two');
		 * }
		 * function mySecondFunction(arg1, arg2, callback) {
		 *     // arg1 now equals 'one' and arg2 now equals 'two'
		 *     callback(null, 'three');
		 * }
		 * function myLastFunction(arg1, callback) {
		 *     // arg1 now equals 'three'
		 *     callback(null, 'done');
		 * }
		 */
		var waterfall = function(tasks, callback) {
			callback = once(callback || noop);
			if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
			if (!tasks.length) return callback();
			var taskIndex = 0;

			function nextTask(args) {
				var task = wrapAsync(tasks[taskIndex++]);
				args.push(onlyOnce(next));
				task.apply(null, args);
			}

			function next(err /*, ...args*/ ) {
				if (err || taskIndex === tasks.length) {
					return callback.apply(null, arguments);
				}
				nextTask(slice(arguments, 1));
			}

			nextTask([]);
		};

		/**
		 * An "async function" in the context of Async is an asynchronous function with
		 * a variable number of parameters, with the final parameter being a callback.
		 * (`function (arg1, arg2, ..., callback) {}`)
		 * The final callback is of the form `callback(err, results...)`, which must be
		 * called once the function is completed.  The callback should be called with a
		 * Error as its first argument to signal that an error occurred.
		 * Otherwise, if no error occurred, it should be called with `null` as the first
		 * argument, and any additional `result` arguments that may apply, to signal
		 * successful completion.
		 * The callback must be called exactly once, ideally on a later tick of the
		 * JavaScript event loop.
		 *
		 * This type of function is also referred to as a "Node-style async function",
		 * or a "continuation passing-style function" (CPS). Most of the methods of this
		 * library are themselves CPS/Node-style async functions, or functions that
		 * return CPS/Node-style async functions.
		 *
		 * Wherever we accept a Node-style async function, we also directly accept an
		 * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
		 * In this case, the `async` function will not be passed a final callback
		 * argument, and any thrown error will be used as the `err` argument of the
		 * implicit callback, and the return value will be used as the `result` value.
		 * (i.e. a `rejected` of the returned Promise becomes the `err` callback
		 * argument, and a `resolved` value becomes the `result`.)
		 *
		 * Note, due to JavaScript limitations, we can only detect native `async`
		 * functions and not transpilied implementations.
		 * Your environment must have `async`/`await` support for this to work.
		 * (e.g. Node > v7.6, or a recent version of a modern browser).
		 * If you are using `async` functions through a transpiler (e.g. Babel), you
		 * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
		 * because the `async function` will be compiled to an ordinary function that
		 * returns a promise.
		 *
		 * @typedef {Function} AsyncFunction
		 * @static
		 */

		/**
		 * Async is a utility module which provides straight-forward, powerful functions
		 * for working with asynchronous JavaScript. Although originally designed for
		 * use with [Node.js](http://nodejs.org) and installable via
		 * `npm install --save async`, it can also be used directly in the browser.
		 * @module async
		 * @see AsyncFunction
		 */


		/**
		 * A collection of `async` functions for manipulating collections, such as
		 * arrays and objects.
		 * @module Collections
		 */

		/**
		 * A collection of `async` functions for controlling the flow through a script.
		 * @module ControlFlow
		 */

		/**
		 * A collection of `async` utility functions.
		 * @module Utils
		 */

		var index = {
			applyEach: applyEach,
			applyEachSeries: applyEachSeries,
			apply: apply,
			asyncify: asyncify,
			auto: auto,
			autoInject: autoInject,
			cargo: cargo,
			compose: compose,
			concat: concat,
			concatLimit: concatLimit,
			concatSeries: concatSeries,
			constant: constant,
			detect: detect,
			detectLimit: detectLimit,
			detectSeries: detectSeries,
			dir: dir,
			doDuring: doDuring,
			doUntil: doUntil,
			doWhilst: doWhilst,
			during: during,
			each: eachLimit,
			eachLimit: eachLimit$1,
			eachOf: eachOf,
			eachOfLimit: eachOfLimit,
			eachOfSeries: eachOfSeries,
			eachSeries: eachSeries,
			ensureAsync: ensureAsync,
			every: every,
			everyLimit: everyLimit,
			everySeries: everySeries,
			filter: filter,
			filterLimit: filterLimit,
			filterSeries: filterSeries,
			forever: forever,
			groupBy: groupBy,
			groupByLimit: groupByLimit,
			groupBySeries: groupBySeries,
			log: log,
			map: map,
			mapLimit: mapLimit,
			mapSeries: mapSeries,
			mapValues: mapValues,
			mapValuesLimit: mapValuesLimit,
			mapValuesSeries: mapValuesSeries,
			memoize: memoize,
			nextTick: nextTick,
			parallel: parallelLimit,
			parallelLimit: parallelLimit$1,
			priorityQueue: priorityQueue,
			queue: queue$1,
			race: race,
			reduce: reduce,
			reduceRight: reduceRight,
			reflect: reflect,
			reflectAll: reflectAll,
			reject: reject,
			rejectLimit: rejectLimit,
			rejectSeries: rejectSeries,
			retry: retry,
			retryable: retryable,
			seq: seq,
			series: series,
			setImmediate: setImmediate$1,
			some: some,
			someLimit: someLimit,
			someSeries: someSeries,
			sortBy: sortBy,
			timeout: timeout,
			times: times,
			timesLimit: timeLimit,
			timesSeries: timesSeries,
			transform: transform,
			tryEach: tryEach,
			unmemoize: unmemoize,
			until: until,
			waterfall: waterfall,
			whilst: whilst,

			// aliases
			all: every,
			any: some,
			forEach: eachLimit,
			forEachSeries: eachSeries,
			forEachLimit: eachLimit$1,
			forEachOf: eachOf,
			forEachOfSeries: eachOfSeries,
			forEachOfLimit: eachOfLimit,
			inject: reduce,
			foldl: reduce,
			foldr: reduceRight,
			select: filter,
			selectLimit: filterLimit,
			selectSeries: filterSeries,
			wrapSync: asyncify
		};

		exports['default'] = index;
		exports.applyEach = applyEach;
		exports.applyEachSeries = applyEachSeries;
		exports.apply = apply;
		exports.asyncify = asyncify;
		exports.auto = auto;
		exports.autoInject = autoInject;
		exports.cargo = cargo;
		exports.compose = compose;
		exports.concat = concat;
		exports.concatLimit = concatLimit;
		exports.concatSeries = concatSeries;
		exports.constant = constant;
		exports.detect = detect;
		exports.detectLimit = detectLimit;
		exports.detectSeries = detectSeries;
		exports.dir = dir;
		exports.doDuring = doDuring;
		exports.doUntil = doUntil;
		exports.doWhilst = doWhilst;
		exports.during = during;
		exports.each = eachLimit;
		exports.eachLimit = eachLimit$1;
		exports.eachOf = eachOf;
		exports.eachOfLimit = eachOfLimit;
		exports.eachOfSeries = eachOfSeries;
		exports.eachSeries = eachSeries;
		exports.ensureAsync = ensureAsync;
		exports.every = every;
		exports.everyLimit = everyLimit;
		exports.everySeries = everySeries;
		exports.filter = filter;
		exports.filterLimit = filterLimit;
		exports.filterSeries = filterSeries;
		exports.forever = forever;
		exports.groupBy = groupBy;
		exports.groupByLimit = groupByLimit;
		exports.groupBySeries = groupBySeries;
		exports.log = log;
		exports.map = map;
		exports.mapLimit = mapLimit;
		exports.mapSeries = mapSeries;
		exports.mapValues = mapValues;
		exports.mapValuesLimit = mapValuesLimit;
		exports.mapValuesSeries = mapValuesSeries;
		exports.memoize = memoize;
		exports.nextTick = nextTick;
		exports.parallel = parallelLimit;
		exports.parallelLimit = parallelLimit$1;
		exports.priorityQueue = priorityQueue;
		exports.queue = queue$1;
		exports.race = race;
		exports.reduce = reduce;
		exports.reduceRight = reduceRight;
		exports.reflect = reflect;
		exports.reflectAll = reflectAll;
		exports.reject = reject;
		exports.rejectLimit = rejectLimit;
		exports.rejectSeries = rejectSeries;
		exports.retry = retry;
		exports.retryable = retryable;
		exports.seq = seq;
		exports.series = series;
		exports.setImmediate = setImmediate$1;
		exports.some = some;
		exports.someLimit = someLimit;
		exports.someSeries = someSeries;
		exports.sortBy = sortBy;
		exports.timeout = timeout;
		exports.times = times;
		exports.timesLimit = timeLimit;
		exports.timesSeries = timesSeries;
		exports.transform = transform;
		exports.tryEach = tryEach;
		exports.unmemoize = unmemoize;
		exports.until = until;
		exports.waterfall = waterfall;
		exports.whilst = whilst;
		exports.all = every;
		exports.allLimit = everyLimit;
		exports.allSeries = everySeries;
		exports.any = some;
		exports.anyLimit = someLimit;
		exports.anySeries = someSeries;
		exports.find = detect;
		exports.findLimit = detectLimit;
		exports.findSeries = detectSeries;
		exports.forEach = eachLimit;
		exports.forEachSeries = eachSeries;
		exports.forEachLimit = eachLimit$1;
		exports.forEachOf = eachOf;
		exports.forEachOfSeries = eachOfSeries;
		exports.forEachOfLimit = eachOfLimit;
		exports.inject = reduce;
		exports.foldl = reduce;
		exports.foldr = reduceRight;
		exports.select = filter;
		exports.selectLimit = filterLimit;
		exports.selectSeries = filterSeries;
		exports.wrapSync = asyncify;

		Object.defineProperty(exports, '__esModule', {
			value: true
		});

	})));

	//synaptic
	//============================================================
	//
	//
	//
	//
	//
	/*!
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2017 Juan Cazala - juancazala.com
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE
	 * 
	 * 
	 * 
	 * ********************************************************************************************
	 *                                   SYNAPTIC (v1.0.12)
	 * ********************************************************************************************
	 * 
	 * Synaptic is a javascript neural network library for node.js and the browser, its generalized
	 * algorithm is architecture-free, so you can build and train basically any type of first order
	 * or even second order neural network architectures.
	 * 
	 * http://en.wikipedia.org/wiki/Recurrent_neural_network#Second_Order_Recurrent_Neural_Network
	 * 
	 * The library includes a few built-in architectures like multilayer perceptrons, multilayer
	 * long-short term memory networks (LSTM) or liquid state machines, and a trainer capable of
	 * training any given network, and includes built-in training tasks/tests like solving an XOR,
	 * passing a Distracted Sequence Recall test or an Embeded Reber Grammar test.
	 * 
	 * The algorithm implemented by this library has been taken from Derek D. Monner's paper:
	 * 
	 * 
	 * A generalized LSTM-like training algorithm for second-order recurrent neural networks
	 * http://www.overcomplete.net/papers/nn2012.pdf
	 * 
	 * There are references to the equations in that paper commented through the source code.
	 * 
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if (typeof exports === 'object' && typeof module === 'object')
			module.exports = factory();
		else if (typeof define === 'function' && define.amd)
			define([], factory);
		else if (typeof exports === 'object')
			exports["synaptic"] = factory();
		else
			root["synaptic"] = factory();
	})(window, function() {
		return /******/ (function(modules) { // webpackBootstrap
				/******/ // The module cache
				/******/
				var installedModules = {};

				/******/ // The require function
				/******/
				function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/
					if (installedModules[moduleId])
					/******/
						return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/
					var module = installedModules[moduleId] = {
						/******/
						exports: {},
						/******/
						id: moduleId,
						/******/
						loaded: false
							/******/
					};

					/******/ // Execute the module function
					/******/
					modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/
					module.loaded = true;

					/******/ // Return the exports of the module
					/******/
					return module.exports;
					/******/
				}


				/******/ // expose the modules object (__webpack_modules__)
				/******/
				__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/
				__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/
				__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/
				return __webpack_require__(0);
				/******/
			})
			/************************************************************************/
			/******/
			([
				/* 0 */
				/***/
				(function(module, exports, __webpack_require__) {

					var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
					var Synaptic = {
						Neuron: __webpack_require__(1),
						Layer: __webpack_require__(3),
						Network: __webpack_require__(4),
						Trainer: __webpack_require__(5),
						Architect: __webpack_require__(6)
					};

					// CommonJS & AMD
					if (true) {
						!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
							return Synaptic
						}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					}

					// Node.js
					if (typeof module !== 'undefined' && module.exports) {
						module.exports = Synaptic;
					}

					// Browser
					if (typeof window == 'object') {
						(function() {
							var oldSynaptic = window['synaptic'];
							Synaptic.ninja = function() {
								window['synaptic'] = oldSynaptic;
								return Synaptic;
							};
						})();

						window['synaptic'] = Synaptic;
					}


					/***/
				}),
				/* 1 */
				/***/
				(function(module, exports, __webpack_require__) {

					/* WEBPACK VAR INJECTION */
					(function(module) { // export
						if (module) module.exports = Neuron;

						/******************************************************************************************
						                                         NEURON
						*******************************************************************************************/

						function Neuron() {
							this.ID = Neuron.uid();

							this.connections = {
								inputs: {},
								projected: {},
								gated: {}
							};
							this.error = {
								responsibility: 0,
								projected: 0,
								gated: 0
							};
							this.trace = {
								elegibility: {},
								extended: {},
								influences: {}
							};
							this.state = 0;
							this.old = 0;
							this.activation = 0;
							this.selfconnection = new Neuron.connection(this, this, 0); // weight = 0 -> not connected
							this.squash = Neuron.squash.LOGISTIC;
							this.neighboors = {};
							this.bias = Math.random() * .2 - .1;
						}

						Neuron.prototype = {

							// activate the neuron
							activate: function(input) {
								// activation from enviroment (for input neurons)
								if (typeof input != 'undefined') {
									this.activation = input;
									this.derivative = 0;
									this.bias = 0;
									return this.activation;
								}

								// old state
								this.old = this.state;

								// eq. 15
								this.state = this.selfconnection.gain * this.selfconnection.weight *
									this.state + this.bias;

								for (var i in this.connections.inputs) {
									var input = this.connections.inputs[i];
									this.state += input.from.activation * input.weight * input.gain;
								}

								// eq. 16
								this.activation = this.squash(this.state);

								// f'(s)
								this.derivative = this.squash(this.state, true);

								// update traces
								var influences = [];
								for (var id in this.trace.extended) {
									// extended elegibility trace
									var neuron = this.neighboors[id];

									// if gated neuron's selfconnection is gated by this unit, the influence keeps track of the neuron's old state
									var influence = neuron.selfconnection.gater == this ? neuron.old : 0;

									// index runs over all the incoming connections to the gated neuron that are gated by this unit
									for (var incoming in this.trace.influences[neuron.ID]) { // captures the effect that has an input connection to this unit, on a neuron that is gated by this unit
										influence += this.trace.influences[neuron.ID][incoming].weight *
											this.trace.influences[neuron.ID][incoming].from.activation;
									}
									influences[neuron.ID] = influence;
								}

								for (var i in this.connections.inputs) {
									var input = this.connections.inputs[i];

									// elegibility trace - Eq. 17
									this.trace.elegibility[input.ID] = this.selfconnection.gain * this.selfconnection
										.weight * this.trace.elegibility[input.ID] + input.gain * input.from
										.activation;

									for (var id in this.trace.extended) {
										// extended elegibility trace
										var xtrace = this.trace.extended[id];
										var neuron = this.neighboors[id];
										var influence = influences[neuron.ID];

										// eq. 18
										xtrace[input.ID] = neuron.selfconnection.gain * neuron.selfconnection
											.weight * xtrace[input.ID] + this.derivative * this.trace.elegibility[
												input.ID] * influence;
									}
								}

								//  update gated connection's gains
								for (var connection in this.connections.gated) {
									this.connections.gated[connection].gain = this.activation;
								}

								return this.activation;
							},

							// back-propagate the error
							propagate: function(rate, target) {
								// error accumulator
								var error = 0;

								// whether or not this neuron is in the output layer
								var isOutput = typeof target != 'undefined';

								// output neurons get their error from the enviroment
								if (isOutput)
									this.error.responsibility = this.error.projected = target - this.activation; // Eq. 10

								else // the rest of the neuron compute their error responsibilities by backpropagation
								{
									// error responsibilities from all the connections projected from this neuron
									for (var id in this.connections.projected) {
										var connection = this.connections.projected[id];
										var neuron = connection.to;
										// Eq. 21
										error += neuron.error.responsibility * connection.gain * connection.weight;
									}

									// projected error responsibility
									this.error.projected = this.derivative * error;

									error = 0;
									// error responsibilities from all the connections gated by this neuron
									for (var id in this.trace.extended) {
										var neuron = this.neighboors[id]; // gated neuron
										var influence = neuron.selfconnection.gater == this ? neuron.old : 0; // if gated neuron's selfconnection is gated by this neuron

										// index runs over all the connections to the gated neuron that are gated by this neuron
										for (var input in this.trace.influences[id]) { // captures the effect that the input connection of this neuron have, on a neuron which its input/s is/are gated by this neuron
											influence += this.trace.influences[id][input].weight * this.trace.influences[
												neuron.ID][input].from.activation;
										}
										// eq. 22
										error += neuron.error.responsibility * influence;
									}

									// gated error responsibility
									this.error.gated = this.derivative * error;

									// error responsibility - Eq. 23
									this.error.responsibility = this.error.projected + this.error.gated;
								}

								// learning rate
								rate = rate || .1;

								// adjust all the neuron's incoming connections
								for (var id in this.connections.inputs) {
									var input = this.connections.inputs[id];

									// Eq. 24
									var gradient = this.error.projected * this.trace.elegibility[input.ID];
									for (var id in this.trace.extended) {
										var neuron = this.neighboors[id];
										gradient += neuron.error.responsibility * this.trace.extended[
											neuron.ID][input.ID];
									}
									input.weight += rate * gradient; // adjust weights - aka learn
								}

								// adjust bias
								this.bias += rate * this.error.responsibility;
							},

							project: function(neuron, weight) {
								// self-connection
								if (neuron == this) {
									this.selfconnection.weight = 1;
									return this.selfconnection;
								}

								// check if connection already exists
								var connected = this.connected(neuron);
								if (connected && connected.type == "projected") {
									// update connection
									if (typeof weight != 'undefined')
										connected.connection.weight = weight;
									// return existing connection
									return connected.connection;
								} else {
									// create a new connection
									var connection = new Neuron.connection(this, neuron, weight);
								}

								// reference all the connections and traces
								this.connections.projected[connection.ID] = connection;
								this.neighboors[neuron.ID] = neuron;
								neuron.connections.inputs[connection.ID] = connection;
								neuron.trace.elegibility[connection.ID] = 0;

								for (var id in neuron.trace.extended) {
									var trace = neuron.trace.extended[id];
									trace[connection.ID] = 0;
								}

								return connection;
							},

							gate: function(connection) {
								// add connection to gated list
								this.connections.gated[connection.ID] = connection;

								var neuron = connection.to;
								if (!(neuron.ID in this.trace.extended)) {
									// extended trace
									this.neighboors[neuron.ID] = neuron;
									var xtrace = this.trace.extended[neuron.ID] = {};
									for (var id in this.connections.inputs) {
										var input = this.connections.inputs[id];
										xtrace[input.ID] = 0;
									}
								}

								// keep track
								if (neuron.ID in this.trace.influences)
									this.trace.influences[neuron.ID].push(connection);
								else
									this.trace.influences[neuron.ID] = [connection];

								// set gater
								connection.gater = this;
							},

							// returns true or false whether the neuron is self-connected or not
							selfconnected: function() {
								return this.selfconnection.weight !== 0;
							},

							// returns true or false whether the neuron is connected to another neuron (parameter)
							connected: function(neuron) {
								var result = {
									type: null,
									connection: false
								};

								if (this == neuron) {
									if (this.selfconnected()) {
										result.type = 'selfconnection';
										result.connection = this.selfconnection;
										return result;
									} else
										return false;
								}

								for (var type in this.connections) {
									for (var connection in this.connections[type]) {
										var connection = this.connections[type][connection];
										if (connection.to == neuron) {
											result.type = type;
											result.connection = connection;
											return result;
										} else if (connection.from == neuron) {
											result.type = type;
											result.connection = connection;
											return result;
										}
									}
								}

								return false;
							},

							// clears all the traces (the neuron forgets it's context, but the connections remain intact)
							clear: function() {
								for (var trace in this.trace.elegibility) {
									this.trace.elegibility[trace] = 0;
								}

								for (var trace in this.trace.extended) {
									for (var extended in this.trace.extended[trace]) {
										this.trace.extended[trace][extended] = 0;
									}
								}

								this.error.responsibility = this.error.projected = this.error.gated = 0;
							},

							// all the connections are randomized and the traces are cleared
							reset: function() {
								this.clear();

								for (var type in this.connections) {
									for (var connection in this.connections[type]) {
										this.connections[type][connection].weight = Math.random() * .2 - .1;
									}
								}

								this.bias = Math.random() * .2 - .1;
								this.old = this.state = this.activation = 0;
							},

							// hardcodes the behaviour of the neuron into an optimized function
							optimize: function(optimized, layer) {

								optimized = optimized || {};
								var store_activation = [];
								var store_trace = [];
								var store_propagation = [];
								var varID = optimized.memory || 0;
								var neurons = optimized.neurons || 1;
								var inputs = optimized.inputs || [];
								var targets = optimized.targets || [];
								var outputs = optimized.outputs || [];
								var variables = optimized.variables || {};
								var activation_sentences = optimized.activation_sentences || [];
								var trace_sentences = optimized.trace_sentences || [];
								var propagation_sentences = optimized.propagation_sentences || [];
								var layers = optimized.layers || {
									__count: 0,
									__neuron: 0
								};

								// allocate sentences
								var allocate = function(store) {
									var allocated = layer in layers && store[layers.__count];
									if (!allocated) {
										layers.__count = store.push([]) - 1;
										layers[layer] = layers.__count;
									}
								};
								allocate(activation_sentences);
								allocate(trace_sentences);
								allocate(propagation_sentences);
								var currentLayer = layers.__count;

								// get/reserve space in memory by creating a unique ID for a variablel
								var getVar = function() {
									var args = Array.prototype.slice.call(arguments);

									if (args.length == 1) {
										if (args[0] == 'target') {
											var id = 'target_' + targets.length;
											targets.push(varID);
										} else
											var id = args[0];
										if (id in variables)
											return variables[id];
										return variables[id] = {
											value: 0,
											id: varID++
										};
									} else {
										var extended = args.length > 2;
										if (extended)
											var value = args.pop();

										var unit = args.shift();
										var prop = args.pop();

										if (!extended)
											var value = unit[prop];

										var id = prop + '_';
										for (var i = 0; i < args.length; i++)
											id += args[i] + '_';
										id += unit.ID;
										if (id in variables)
											return variables[id];

										return variables[id] = {
											value: value,
											id: varID++
										};
									}
								};

								// build sentence
								var buildSentence = function() {
									var args = Array.prototype.slice.call(arguments);
									var store = args.pop();
									var sentence = "";
									for (var i = 0; i < args.length; i++)
										if (typeof args[i] == 'string')
											sentence += args[i];
										else
											sentence += 'F[' + args[i].id + ']';

									store.push(sentence + ';');
								};

								// helper to check if an object is empty
								var isEmpty = function(obj) {
									for (var prop in obj) {
										if (obj.hasOwnProperty(prop))
											return false;
									}
									return true;
								};

								// characteristics of the neuron
								var noProjections = isEmpty(this.connections.projected);
								var noGates = isEmpty(this.connections.gated);
								var isInput = layer == 'input' ? true : isEmpty(this.connections.inputs);
								var isOutput = layer == 'output' ? true : noProjections && noGates;

								// optimize neuron's behaviour
								var rate = getVar('rate');
								var activation = getVar(this, 'activation');
								if (isInput)
									inputs.push(activation.id);
								else {
									activation_sentences[currentLayer].push(store_activation);
									trace_sentences[currentLayer].push(store_trace);
									propagation_sentences[currentLayer].push(store_propagation);
									var old = getVar(this, 'old');
									var state = getVar(this, 'state');
									var bias = getVar(this, 'bias');
									if (this.selfconnection.gater)
										var self_gain = getVar(this.selfconnection, 'gain');
									if (this.selfconnected())
										var self_weight = getVar(this.selfconnection, 'weight');
									buildSentence(old, ' = ', state, store_activation);
									if (this.selfconnected())
										if (this.selfconnection.gater)
											buildSentence(state, ' = ', self_gain, ' * ', self_weight, ' * ',
												state, ' + ', bias, store_activation);
										else
											buildSentence(state, ' = ', self_weight, ' * ', state, ' + ',
												bias, store_activation);
									else
										buildSentence(state, ' = ', bias, store_activation);
									for (var i in this.connections.inputs) {
										var input = this.connections.inputs[i];
										var input_activation = getVar(input.from, 'activation');
										var input_weight = getVar(input, 'weight');
										if (input.gater)
											var input_gain = getVar(input, 'gain');
										if (this.connections.inputs[i].gater)
											buildSentence(state, ' += ', input_activation, ' * ',
												input_weight, ' * ', input_gain, store_activation);
										else
											buildSentence(state, ' += ', input_activation, ' * ',
												input_weight, store_activation);
									}
									var derivative = getVar(this, 'derivative');
									switch (this.squash) {
										case Neuron.squash.LOGISTIC:
											buildSentence(activation, ' = (1 / (1 + Math.exp(-', state, ')))',
												store_activation);
											buildSentence(derivative, ' = ', activation, ' * (1 - ',
												activation, ')', store_activation);
											break;
										case Neuron.squash.TANH:
											var eP = getVar('aux');
											var eN = getVar('aux_2');
											buildSentence(eP, ' = Math.exp(', state, ')', store_activation);
											buildSentence(eN, ' = 1 / ', eP, store_activation);
											buildSentence(activation, ' = (', eP, ' - ', eN, ') / (', eP, ' + ', eN, ')', store_activation);
											buildSentence(derivative, ' = 1 - (', activation, ' * ', activation, ')', store_activation);
											break;
										case Neuron.squash.IDENTITY:
											buildSentence(activation, ' = ', state, store_activation);
											buildSentence(derivative, ' = 1', store_activation);
											break;
										case Neuron.squash.HLIM:
											buildSentence(activation, ' = +(', state, ' > 0)', store_activation);
											buildSentence(derivative, ' = 1', store_activation);
										case Neuron.squash.RELU:
											buildSentence(activation, ' = ', state, ' > 0 ? ', state, ' : 0', store_activation);
											buildSentence(derivative, ' = ', state, ' > 0 ? 1 : 0', store_activation);
											break;
									}

									for (var id in this.trace.extended) {
										// calculate extended elegibility traces in advance
										var neuron = this.neighboors[id];
										var influence = getVar('influences[' + neuron.ID + ']');
										var neuron_old = getVar(neuron, 'old');
										var initialized = false;
										if (neuron.selfconnection.gater == this) {
											buildSentence(influence, ' = ', neuron_old, store_trace);
											initialized = true;
										}
										for (var incoming in this.trace.influences[neuron.ID]) {
											var incoming_weight = getVar(this.trace.influences[neuron.ID]
												[incoming], 'weight');
											var incoming_activation = getVar(this.trace.influences[neuron.ID]
												[incoming].from, 'activation');

											if (initialized)
												buildSentence(influence, ' += ', incoming_weight, ' * ', incoming_activation, store_trace);
											else {
												buildSentence(influence, ' = ', incoming_weight, ' * ', incoming_activation, store_trace);
												initialized = true;
											}
										}
									}

									for (var i in this.connections.inputs) {
										var input = this.connections.inputs[i];
										if (input.gater)
											var input_gain = getVar(input, 'gain');
										var input_activation = getVar(input.from, 'activation');
										var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace
											.elegibility[input.ID]);
										if (this.selfconnected()) {
											if (this.selfconnection.gater) {
												if (input.gater)
													buildSentence(trace, ' = ', self_gain, ' * ', self_weight,
														' * ', trace, ' + ', input_gain, ' * ', input_activation,
														store_trace);
												else
													buildSentence(trace, ' = ', self_gain, ' * ', self_weight,
														' * ', trace, ' + ', input_activation, store_trace);
											} else {
												if (input.gater)
													buildSentence(trace, ' = ', self_weight, ' * ', trace, ' + ',
														input_gain, ' * ', input_activation, store_trace);
												else
													buildSentence(trace, ' = ', self_weight, ' * ', trace, ' + ',
														input_activation, store_trace);
											}
										} else {
											if (input.gater)
												buildSentence(trace, ' = ', input_gain, ' * ', input_activation,
													store_trace);
											else
												buildSentence(trace, ' = ', input_activation, store_trace);
										}
										for (var id in this.trace.extended) {
											// extended elegibility trace
											var neuron = this.neighboors[id];
											var influence = getVar('influences[' + neuron.ID + ']');

											var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace
												.elegibility[input.ID]);
											var xtrace = getVar(this, 'trace', 'extended', neuron.ID, input.ID,
												this.trace.extended[neuron.ID][input.ID]);
											if (neuron.selfconnected())
												var neuron_self_weight = getVar(neuron.selfconnection, 'weight');
											if (neuron.selfconnection.gater)
												var neuron_self_gain = getVar(neuron.selfconnection, 'gain');
											if (neuron.selfconnected())
												if (neuron.selfconnection.gater)
													buildSentence(xtrace, ' = ', neuron_self_gain, ' * ',
														neuron_self_weight, ' * ', xtrace, ' + ', derivative, ' * ',
														trace, ' * ', influence, store_trace);
												else
													buildSentence(xtrace, ' = ', neuron_self_weight, ' * ',
														xtrace, ' + ', derivative, ' * ', trace, ' * ',
														influence, store_trace);
											else
												buildSentence(xtrace, ' = ', derivative, ' * ', trace, ' * ',
													influence, store_trace);
										}
									}
									for (var connection in this.connections.gated) {
										var gated_gain = getVar(this.connections.gated[connection], 'gain');
										buildSentence(gated_gain, ' = ', activation, store_activation);
									}
								}
								if (!isInput) {
									var responsibility = getVar(this, 'error', 'responsibility', this.error
										.responsibility);
									if (isOutput) {
										var target = getVar('target');
										buildSentence(responsibility, ' = ', target, ' - ', activation,
											store_propagation);
										for (var id in this.connections.inputs) {
											var input = this.connections.inputs[id];
											var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace
												.elegibility[input.ID]);
											var input_weight = getVar(input, 'weight');
											buildSentence(input_weight, ' += ', rate, ' * (', responsibility,
												' * ', trace, ')', store_propagation);
										}
										outputs.push(activation.id);
									} else {
										if (!noProjections && !noGates) {
											var error = getVar('aux');
											for (var id in this.connections.projected) {
												var connection = this.connections.projected[id];
												var neuron = connection.to;
												var connection_weight = getVar(connection, 'weight');
												var neuron_responsibility = getVar(neuron, 'error',
													'responsibility', neuron.error.responsibility);
												if (connection.gater) {
													var connection_gain = getVar(connection, 'gain');
													buildSentence(error, ' += ', neuron_responsibility, ' * ',
														connection_gain, ' * ', connection_weight,
														store_propagation);
												} else
													buildSentence(error, ' += ', neuron_responsibility, ' * ',
														connection_weight, store_propagation);
											}
											var projected = getVar(this, 'error', 'projected', this.error.projected);
											buildSentence(projected, ' = ', derivative, ' * ', error,
												store_propagation);
											buildSentence(error, ' = 0', store_propagation);
											for (var id in this.trace.extended) {
												var neuron = this.neighboors[id];
												var influence = getVar('aux_2');
												var neuron_old = getVar(neuron, 'old');
												if (neuron.selfconnection.gater == this)
													buildSentence(influence, ' = ', neuron_old, store_propagation);
												else
													buildSentence(influence, ' = 0', store_propagation);
												for (var input in this.trace.influences[neuron.ID]) {
													var connection = this.trace.influences[neuron.ID][input];
													var connection_weight = getVar(connection, 'weight');
													var neuron_activation = getVar(connection.from, 'activation');
													buildSentence(influence, ' += ', connection_weight, ' * ',
														neuron_activation, store_propagation);
												}
												var neuron_responsibility = getVar(neuron, 'error',
													'responsibility', neuron.error.responsibility);
												buildSentence(error, ' += ', neuron_responsibility, ' * ',
													influence, store_propagation);
											}
											var gated = getVar(this, 'error', 'gated', this.error.gated);
											buildSentence(gated, ' = ', derivative, ' * ', error,
												store_propagation);
											buildSentence(responsibility, ' = ', projected, ' + ', gated,
												store_propagation);
											for (var id in this.connections.inputs) {
												var input = this.connections.inputs[id];
												var gradient = getVar('aux');
												var trace = getVar(this, 'trace', 'elegibility', input.ID, this
													.trace.elegibility[input.ID]);
												buildSentence(gradient, ' = ', projected, ' * ', trace,
													store_propagation);
												for (var id in this.trace.extended) {
													var neuron = this.neighboors[id];
													var neuron_responsibility = getVar(neuron, 'error',
														'responsibility', neuron.error.responsibility);
													var xtrace = getVar(this, 'trace', 'extended', neuron.ID,
														input.ID, this.trace.extended[neuron.ID][input.ID]);
													buildSentence(gradient, ' += ', neuron_responsibility, ' * ',
														xtrace, store_propagation);
												}
												var input_weight = getVar(input, 'weight');
												buildSentence(input_weight, ' += ', rate, ' * ', gradient,
													store_propagation);
											}

										} else if (noGates) {
											buildSentence(responsibility, ' = 0', store_propagation);
											for (var id in this.connections.projected) {
												var connection = this.connections.projected[id];
												var neuron = connection.to;
												var connection_weight = getVar(connection, 'weight');
												var neuron_responsibility = getVar(neuron, 'error',
													'responsibility', neuron.error.responsibility);
												if (connection.gater) {
													var connection_gain = getVar(connection, 'gain');
													buildSentence(responsibility, ' += ', neuron_responsibility,
														' * ', connection_gain, ' * ', connection_weight,
														store_propagation);
												} else
													buildSentence(responsibility, ' += ', neuron_responsibility,
														' * ', connection_weight, store_propagation);
											}
											buildSentence(responsibility, ' *= ', derivative,
												store_propagation);
											for (var id in this.connections.inputs) {
												var input = this.connections.inputs[id];
												var trace = getVar(this, 'trace', 'elegibility', input.ID, this
													.trace.elegibility[input.ID]);
												var input_weight = getVar(input, 'weight');
												buildSentence(input_weight, ' += ', rate, ' * (',
													responsibility, ' * ', trace, ')', store_propagation);
											}
										} else if (noProjections) {
											buildSentence(responsibility, ' = 0', store_propagation);
											for (var id in this.trace.extended) {
												var neuron = this.neighboors[id];
												var influence = getVar('aux');
												var neuron_old = getVar(neuron, 'old');
												if (neuron.selfconnection.gater == this)
													buildSentence(influence, ' = ', neuron_old, store_propagation);
												else
													buildSentence(influence, ' = 0', store_propagation);
												for (var input in this.trace.influences[neuron.ID]) {
													var connection = this.trace.influences[neuron.ID][input];
													var connection_weight = getVar(connection, 'weight');
													var neuron_activation = getVar(connection.from, 'activation');
													buildSentence(influence, ' += ', connection_weight, ' * ',
														neuron_activation, store_propagation);
												}
												var neuron_responsibility = getVar(neuron, 'error',
													'responsibility', neuron.error.responsibility);
												buildSentence(responsibility, ' += ', neuron_responsibility,
													' * ', influence, store_propagation);
											}
											buildSentence(responsibility, ' *= ', derivative,
												store_propagation);
											for (var id in this.connections.inputs) {
												var input = this.connections.inputs[id];
												var gradient = getVar('aux');
												buildSentence(gradient, ' = 0', store_propagation);
												for (var id in this.trace.extended) {
													var neuron = this.neighboors[id];
													var neuron_responsibility = getVar(neuron, 'error',
														'responsibility', neuron.error.responsibility);
													var xtrace = getVar(this, 'trace', 'extended', neuron.ID,
														input.ID, this.trace.extended[neuron.ID][input.ID]);
													buildSentence(gradient, ' += ', neuron_responsibility, ' * ',
														xtrace, store_propagation);
												}
												var input_weight = getVar(input, 'weight');
												buildSentence(input_weight, ' += ', rate, ' * ', gradient,
													store_propagation);
											}
										}
									}
									buildSentence(bias, ' += ', rate, ' * ', responsibility,
										store_propagation);
								}
								return {
									memory: varID,
									neurons: neurons + 1,
									inputs: inputs,
									outputs: outputs,
									targets: targets,
									variables: variables,
									activation_sentences: activation_sentences,
									trace_sentences: trace_sentences,
									propagation_sentences: propagation_sentences,
									layers: layers
								}
							}
						}

						// represents a connection between two neurons
						Neuron.connection = function Connection(from, to, weight) {
							if (!from || !to)
								throw new Error("Connection Error: Invalid neurons");

							this.ID = Neuron.connection.uid();
							this.from = from;
							this.to = to;
							this.weight = typeof weight == 'undefined' ? Math.random() * .2 - .1 : weight;
							this.gain = 1;
							this.gater = null;
						}

						// squashing functions
						Neuron.squash = {};

						// eq. 5 & 5'
						Neuron.squash.LOGISTIC = function(x, derivate) {
							var fx = 1 / (1 + Math.exp(-x));
							if (!derivate)
								return fx;
							return fx * (1 - fx);
						};
						Neuron.squash.TANH = function(x, derivate) {
							if (derivate)
								return 1 - Math.pow(Math.tanh(x), 2);
							return Math.tanh(x);
						};
						Neuron.squash.IDENTITY = function(x, derivate) {
							return derivate ? 1 : x;
						};
						Neuron.squash.HLIM = function(x, derivate) {
							return derivate ? 1 : x > 0 ? 1 : 0;
						};
						Neuron.squash.RELU = function(x, derivate) {
							if (derivate)
								return x > 0 ? 1 : 0;
							return x > 0 ? x : 0;
						};

						// unique ID's
						(function() {
							var neurons = 0;
							var connections = 0;
							Neuron.uid = function() {
								return neurons++;
							}
							Neuron.connection.uid = function() {
								return connections++;
							}
							Neuron.quantity = function() {
								return {
									neurons: neurons,
									connections: connections
								}
							}
						})();

						/* WEBPACK VAR INJECTION */
					}.call(exports, __webpack_require__(2)(module)))

					/***/
				}),
				/* 2 */
				/***/
				(function(module, exports) {

					module.exports = function(module) {
						if (!module.webpackPolyfill) {
							module.deprecate = function() {};
							module.paths = [];
							// module.parent = undefined by default
							module.children = [];
							module.webpackPolyfill = 1;
						}
						return module;
					}


					/***/
				}),
				/* 3 */
				/***/
				(function(module, exports, __webpack_require__) {

					/* WEBPACK VAR INJECTION */
					(function(module) { // export
						if (module) module.exports = Layer;

						// import
						var Neuron = __webpack_require__(1),
							Network = __webpack_require__(4)

						/*******************************************************************************************
						                                            LAYER
						*******************************************************************************************/

						function Layer(size) {
							this.size = size | 0;
							this.list = [];

							this.connectedTo = [];

							while (size--) {
								var neuron = new Neuron();
								this.list.push(neuron);
							}
						}

						Layer.prototype = {

							// activates all the neurons in the layer
							activate: function(input) {

								var activations = [];

								if (typeof input != 'undefined') {
									if (input.length != this.size)
										throw new Error("INPUT size and LAYER size must be the same to activate!");

									for (var id in this.list) {
										var neuron = this.list[id];
										var activation = neuron.activate(input[id]);
										activations.push(activation);
									}
								} else {
									for (var id in this.list) {
										var neuron = this.list[id];
										var activation = neuron.activate();
										activations.push(activation);
									}
								}
								return activations;
							},

							// propagates the error on all the neurons of the layer
							propagate: function(rate, target) {

								if (typeof target != 'undefined') {
									if (target.length != this.size)
										throw new Error("TARGET size and LAYER size must be the same to propagate!");

									for (var id = this.list.length - 1; id >= 0; id--) {
										var neuron = this.list[id];
										neuron.propagate(rate, target[id]);
									}
								} else {
									for (var id = this.list.length - 1; id >= 0; id--) {
										var neuron = this.list[id];
										neuron.propagate(rate);
									}
								}
							},

							// projects a connection from this layer to another one
							project: function(layer, type, weights) {

								if (layer instanceof Network)
									layer = layer.layers.input;

								if (layer instanceof Layer) {
									if (!this.connected(layer))
										return new Layer.connection(this, layer, type, weights);
								} else
									throw new Error("Invalid argument, you can only project connections to LAYERS and NETWORKS!");


							},

							// gates a connection betwenn two layers
							gate: function(connection, type) {

								if (type == Layer.gateType.INPUT) {
									if (connection.to.size != this.size)
										throw new Error("GATER layer and CONNECTION.TO layer must be the same size in order to gate!");

									for (var id in connection.to.list) {
										var neuron = connection.to.list[id];
										var gater = this.list[id];
										for (var input in neuron.connections.inputs) {
											var gated = neuron.connections.inputs[input];
											if (gated.ID in connection.connections)
												gater.gate(gated);
										}
									}
								} else if (type == Layer.gateType.OUTPUT) {
									if (connection.from.size != this.size)
										throw new Error("GATER layer and CONNECTION.FROM layer must be the same size in order to gate!");

									for (var id in connection.from.list) {
										var neuron = connection.from.list[id];
										var gater = this.list[id];
										for (var projected in neuron.connections.projected) {
											var gated = neuron.connections.projected[projected];
											if (gated.ID in connection.connections)
												gater.gate(gated);
										}
									}
								} else if (type == Layer.gateType.ONE_TO_ONE) {
									if (connection.size != this.size)
										throw new Error("The number of GATER UNITS must be the same as the number of CONNECTIONS to gate!");

									for (var id in connection.list) {
										var gater = this.list[id];
										var gated = connection.list[id];
										gater.gate(gated);
									}
								}
								connection.gatedfrom.push({
									layer: this,
									type: type
								});
							},

							// true or false whether the whole layer is self-connected or not
							selfconnected: function() {

								for (var id in this.list) {
									var neuron = this.list[id];
									if (!neuron.selfconnected())
										return false;
								}
								return true;
							},

							// true of false whether the layer is connected to another layer (parameter) or not
							connected: function(layer) {
								// Check if ALL to ALL connection
								var connections = 0;
								for (var here in this.list) {
									for (var there in layer.list) {
										var from = this.list[here];
										var to = layer.list[there];
										var connected = from.connected(to);
										if (connected.type == 'projected')
											connections++;
									}
								}
								if (connections == this.size * layer.size)
									return Layer.connectionType.ALL_TO_ALL;

								// Check if ONE to ONE connection
								connections = 0;
								for (var neuron in this.list) {
									var from = this.list[neuron];
									var to = layer.list[neuron];
									var connected = from.connected(to);
									if (connected.type == 'projected')
										connections++;
								}
								if (connections == this.size)
									return Layer.connectionType.ONE_TO_ONE;
							},

							// clears all the neuorns in the layer
							clear: function() {
								for (var id in this.list) {
									var neuron = this.list[id];
									neuron.clear();
								}
							},

							// resets all the neurons in the layer
							reset: function() {
								for (var id in this.list) {
									var neuron = this.list[id];
									neuron.reset();
								}
							},

							// returns all the neurons in the layer (array)
							neurons: function() {
								return this.list;
							},

							// adds a neuron to the layer
							add: function(neuron) {
								this.neurons[neuron.ID] = neuron || new Neuron();
								this.list.push(neuron);
								this.size++;
							},

							set: function(options) {
								options = options || {};

								for (var i in this.list) {
									var neuron = this.list[i];
									if (options.label)
										neuron.label = options.label + '_' + neuron.ID;
									if (options.squash)
										neuron.squash = options.squash;
									if (options.bias)
										neuron.bias = options.bias;
								}
								return this;
							}
						}

						// represents a connection from one layer to another, and keeps track of its weight and gain
						Layer.connection = function LayerConnection(fromLayer, toLayer, type, weights) {
							this.ID = Layer.connection.uid();
							this.from = fromLayer;
							this.to = toLayer;
							this.selfconnection = toLayer == fromLayer;
							this.type = type;
							this.connections = {};
							this.list = [];
							this.size = 0;
							this.gatedfrom = [];

							if (typeof this.type == 'undefined') {
								if (fromLayer == toLayer)
									this.type = Layer.connectionType.ONE_TO_ONE;
								else
									this.type = Layer.connectionType.ALL_TO_ALL;
							}

							if (this.type == Layer.connectionType.ALL_TO_ALL ||
								this.type == Layer.connectionType.ALL_TO_ELSE) {
								for (var here in this.from.list) {
									for (var there in this.to.list) {
										var from = this.from.list[here];
										var to = this.to.list[there];
										if (this.type == Layer.connectionType.ALL_TO_ELSE && from == to)
											continue;
										var connection = from.project(to, weights);

										this.connections[connection.ID] = connection;
										this.size = this.list.push(connection);
									}
								}
							} else if (this.type == Layer.connectionType.ONE_TO_ONE) {

								for (var neuron in this.from.list) {
									var from = this.from.list[neuron];
									var to = this.to.list[neuron];
									var connection = from.project(to, weights);

									this.connections[connection.ID] = connection;
									this.size = this.list.push(connection);
								}
							}

							fromLayer.connectedTo.push(this);
						}

						// types of connections
						Layer.connectionType = {};
						Layer.connectionType.ALL_TO_ALL = "ALL TO ALL";
						Layer.connectionType.ONE_TO_ONE = "ONE TO ONE";
						Layer.connectionType.ALL_TO_ELSE = "ALL TO ELSE";

						// types of gates
						Layer.gateType = {};
						Layer.gateType.INPUT = "INPUT";
						Layer.gateType.OUTPUT = "OUTPUT";
						Layer.gateType.ONE_TO_ONE = "ONE TO ONE";

						(function() {
							var connections = 0;
							Layer.connection.uid = function() {
								return connections++;
							}
						})();

						/* WEBPACK VAR INJECTION */
					}.call(exports, __webpack_require__(2)(module)))

					/***/
				}),
				/* 4 */
				/***/
				(function(module, exports, __webpack_require__) {

					/* WEBPACK VAR INJECTION */
					(function(module) { // export
						if (module) module.exports = Network;

						// import
						var Neuron = __webpack_require__(1),
							Layer = __webpack_require__(3),
							Trainer = __webpack_require__(5)

						/*******************************************************************************************
						                                         NETWORK
						*******************************************************************************************/

						function Network(layers) {
							if (typeof layers != 'undefined') {
								this.layers = {
									input: layers.input || null,
									hidden: layers.hidden || [],
									output: layers.output || null
								};
								this.optimized = null;
							}
						}
						Network.prototype = {

							// feed-forward activation of all the layers to produce an ouput
							activate: function(input) {
								if (this.optimized === false) {
									this.layers.input.activate(input);
									for (var i = 0; i < this.layers.hidden.length; i++)
										this.layers.hidden[i].activate();
									return this.layers.output.activate();
								} else {
									if (this.optimized == null)
										this.optimize();
									return this.optimized.activate(input);
								}
							},

							// back-propagate the error thru the network
							propagate: function(rate, target) {
								if (this.optimized === false) {
									this.layers.output.propagate(rate, target);
									for (var i = this.layers.hidden.length - 1; i >= 0; i--)
										this.layers.hidden[i].propagate(rate);
								} else {
									if (this.optimized == null)
										this.optimize();
									this.optimized.propagate(rate, target);
								}
							},

							// project a connection to another unit (either a network or a layer)
							project: function(unit, type, weights) {
								if (this.optimized)
									this.optimized.reset();

								if (unit instanceof Network)
									return this.layers.output.project(unit.layers.input, type, weights);

								if (unit instanceof Layer)
									return this.layers.output.project(unit, type, weights);

								throw new Error("Invalid argument, you can only project connections to LAYERS and NETWORKS!");
							},

							// let this network gate a connection
							gate: function(connection, type) {
								if (this.optimized)
									this.optimized.reset();
								this.layers.output.gate(connection, type);
							},

							// clear all elegibility traces and extended elegibility traces (the network forgets its context, but not what was trained)
							clear: function() {
								this.restore();

								var inputLayer = this.layers.input,
									outputLayer = this.layers.output;

								inputLayer.clear();
								for (var i = 0; i < this.layers.hidden.length; i++) {
									this.layers.hidden[i].clear();
								}
								outputLayer.clear();

								if (this.optimized)
									this.optimized.reset();
							},

							// reset all weights and clear all traces (ends up like a new network)
							reset: function() {
								this.restore();

								var inputLayer = this.layers.input,
									outputLayer = this.layers.output;

								inputLayer.reset();
								for (var i = 0; i < this.layers.hidden.length; i++) {
									this.layers.hidden[i].reset();
								}
								outputLayer.reset();

								if (this.optimized)
									this.optimized.reset();
							},

							// hardcodes the behaviour of the whole network into a single optimized function
							optimize: function() {
								var that = this;
								var optimized = {};
								var neurons = this.neurons();

								for (var i = 0; i < neurons.length; i++) {
									var neuron = neurons[i].neuron;
									var layer = neurons[i].layer;
									while (neuron.neuron)
										neuron = neuron.neuron;
									optimized = neuron.optimize(optimized, layer);
								}

								for (var i = 0; i < optimized.propagation_sentences.length; i++)
									optimized.propagation_sentences[i].reverse();
								optimized.propagation_sentences.reverse();

								var hardcode = "";
								hardcode += "var F = Float64Array ? new Float64Array(" + optimized.memory +
									") : []; ";
								for (var i in optimized.variables)
									hardcode += "F[" + optimized.variables[i].id + "] = " + (optimized.variables[
										i].value || 0) + "; ";
								hardcode += "var activate = function(input){\n";
								for (var i = 0; i < optimized.inputs.length; i++)
									hardcode += "F[" + optimized.inputs[i] + "] = input[" + i + "]; ";
								for (var i = 0; i < optimized.activation_sentences.length; i++) {
									if (optimized.activation_sentences[i].length > 0) {
										for (var j = 0; j < optimized.activation_sentences[i].length; j++) {
											hardcode += optimized.activation_sentences[i][j].join(" ");
											hardcode += optimized.trace_sentences[i][j].join(" ");
										}
									}
								}
								hardcode += " var output = []; "
								for (var i = 0; i < optimized.outputs.length; i++)
									hardcode += "output[" + i + "] = F[" + optimized.outputs[i] + "]; ";
								hardcode += "return output; }; "
								hardcode += "var propagate = function(rate, target){\n";
								hardcode += "F[" + optimized.variables.rate.id + "] = rate; ";
								for (var i = 0; i < optimized.targets.length; i++)
									hardcode += "F[" + optimized.targets[i] + "] = target[" + i + "]; ";
								for (var i = 0; i < optimized.propagation_sentences.length; i++)
									for (var j = 0; j < optimized.propagation_sentences[i].length; j++)
										hardcode += optimized.propagation_sentences[i][j].join(" ") + " ";
								hardcode += " };\n";
								hardcode +=
									"var ownership = function(memoryBuffer){\nF = memoryBuffer;\nthis.memory = F;\n};\n";
								hardcode +=
									"return {\nmemory: F,\nactivate: activate,\npropagate: propagate,\nownership: ownership\n};";
								hardcode = hardcode.split(";").join(";\n");

								var constructor = new Function(hardcode);

								var network = constructor();
								network.data = {
									variables: optimized.variables,
									activate: optimized.activation_sentences,
									propagate: optimized.propagation_sentences,
									trace: optimized.trace_sentences,
									inputs: optimized.inputs,
									outputs: optimized.outputs,
									check_activation: this.activate,
									check_propagation: this.propagate
								}

								network.reset = function() {
									if (that.optimized) {
										that.optimized = null;
										that.activate = network.data.check_activation;
										that.propagate = network.data.check_propagation;
									}
								}

								this.optimized = network;
								this.activate = network.activate;
								this.propagate = network.propagate;
							},

							// restores all the values from the optimized network the their respective objects in order to manipulate the network
							restore: function() {
								if (!this.optimized)
									return;

								var optimized = this.optimized;

								var getValue = function() {
									var args = Array.prototype.slice.call(arguments);

									var unit = args.shift();
									var prop = args.pop();

									var id = prop + '_';
									for (var property in args)
										id += args[property] + '_';
									id += unit.ID;

									var memory = optimized.memory;
									var variables = optimized.data.variables;

									if (id in variables)
										return memory[variables[id].id];
									return 0;
								}

								var list = this.neurons();

								// link id's to positions in the array
								for (var i = 0; i < list.length; i++) {
									var neuron = list[i].neuron;
									while (neuron.neuron)
										neuron = neuron.neuron;

									neuron.state = getValue(neuron, 'state');
									neuron.old = getValue(neuron, 'old');
									neuron.activation = getValue(neuron, 'activation');
									neuron.bias = getValue(neuron, 'bias');

									for (var input in neuron.trace.elegibility)
										neuron.trace.elegibility[input] = getValue(neuron, 'trace',
											'elegibility', input);

									for (var gated in neuron.trace.extended)
										for (var input in neuron.trace.extended[gated])
											neuron.trace.extended[gated][input] = getValue(neuron, 'trace',
												'extended', gated, input);

									// get connections
									for (var j in neuron.connections.projected) {
										var connection = neuron.connections.projected[j];
										connection.weight = getValue(connection, 'weight');
										connection.gain = getValue(connection, 'gain');
									}
								}
							},

							// returns all the neurons in the network
							neurons: function() {
								var neurons = [];

								var inputLayer = this.layers.input.neurons(),
									outputLayer = this.layers.output.neurons();

								for (var i = 0; i < inputLayer.length; i++) {
									neurons.push({
										neuron: inputLayer[i],
										layer: 'input'
									});
								}

								for (var i = 0; i < this.layers.hidden.length; i++) {
									var hiddenLayer = this.layers.hidden[i].neurons();
									for (var j = 0; j < hiddenLayer.length; j++)
										neurons.push({
											neuron: hiddenLayer[j],
											layer: i
										});
								}

								for (var i = 0; i < outputLayer.length; i++) {
									neurons.push({
										neuron: outputLayer[i],
										layer: 'output'
									});
								}

								return neurons;
							},

							// returns number of inputs of the network
							inputs: function() {
								return this.layers.input.size;
							},

							// returns number of outputs of hte network
							outputs: function() {
								return this.layers.output.size;
							},

							// sets the layers of the network
							set: function(layers) {
								this.layers = {
									input: layers.input || null,
									hidden: layers.hidden || [],
									output: layers.output || null
								};
								if (this.optimized)
									this.optimized.reset();
							},

							setOptimize: function(bool) {
								this.restore();
								if (this.optimized)
									this.optimized.reset();
								this.optimized = bool ? null : false;
							},

							// returns a json that represents all the neurons and connections of the network
							toJSON: function(ignoreTraces) {
								this.restore();

								var list = this.neurons();
								var neurons = [];
								var connections = [];

								// link id's to positions in the array
								var ids = {};
								for (var i = 0; i < list.length; i++) {
									var neuron = list[i].neuron;
									while (neuron.neuron)
										neuron = neuron.neuron;
									ids[neuron.ID] = i;

									var copy = {
										trace: {
											elegibility: {},
											extended: {}
										},
										state: neuron.state,
										old: neuron.old,
										activation: neuron.activation,
										bias: neuron.bias,
										layer: list[i].layer
									};

									copy.squash = neuron.squash == Neuron.squash.LOGISTIC ? "LOGISTIC" :
										neuron.squash == Neuron.squash.TANH ? "TANH" :
										neuron.squash == Neuron.squash.IDENTITY ? "IDENTITY" :
										neuron.squash == Neuron.squash.HLIM ? "HLIM" :
										neuron.squash == Neuron.squash.RELU ? "RELU" :
										null;

									neurons.push(copy);
								}

								for (var i = 0; i < list.length; i++) {
									var neuron = list[i].neuron;
									while (neuron.neuron)
										neuron = neuron.neuron;

									for (var j in neuron.connections.projected) {
										var connection = neuron.connections.projected[j];
										connections.push({
											from: ids[connection.from.ID],
											to: ids[connection.to.ID],
											weight: connection.weight,
											gater: connection.gater ? ids[connection.gater.ID] : null,
										});
									}
									if (neuron.selfconnected()) {
										connections.push({
											from: ids[neuron.ID],
											to: ids[neuron.ID],
											weight: neuron.selfconnection.weight,
											gater: neuron.selfconnection.gater ? ids[neuron.selfconnection.gater.ID] : null,
										});
									}
								}

								return {
									neurons: neurons,
									connections: connections
								}
							},

							// export the topology into dot language which can be visualized as graphs using dot
							/* example: ... console.log(net.toDotLang());
							            $ node example.js > example.dot
							            $ dot example.dot -Tpng > out.png
							*/
							toDot: function(edgeConnection) {
								if (!typeof edgeConnection)
									edgeConnection = false;
								var code = "digraph nn {\n    rankdir = BT\n";
								var layers = [this.layers.input].concat(this.layers.hidden, this.layers.output);
								for (var i = 0; i < layers.length; i++) {
									for (var j = 0; j < layers[i].connectedTo.length; j++) { // projections
										var connection = layers[i].connectedTo[j];
										var layerTo = connection.to;
										var size = connection.size;
										var layerID = layers.indexOf(layers[i]);
										var layerToID = layers.indexOf(layerTo);
										/* http://stackoverflow.com/questions/26845540/connect-edges-with-graph-dot
										 * DOT does not support edge-to-edge connections
										 * This workaround produces somewhat weird graphs ...
										 */
										if (edgeConnection) {
											if (connection.gatedfrom.length) {
												var fakeNode = "fake" + layerID + "_" + layerToID;
												code += "    " + fakeNode +
													" [label = \"\", shape = point, width = 0.01, height = 0.01]\n";
												code += "    " + layerID + " -> " + fakeNode + " [label = " + size + ", arrowhead = none]\n";
												code += "    " + fakeNode + " -> " + layerToID + "\n";
											} else
												code += "    " + layerID + " -> " + layerToID + " [label = " + size + "]\n";
											for (var from in connection.gatedfrom) { // gatings
												var layerfrom = connection.gatedfrom[from].layer;
												var layerfromID = layers.indexOf(layerfrom);
												code += "    " + layerfromID + " -> " + fakeNode + " [color = blue]\n";
											}
										} else {
											code += "    " + layerID + " -> " + layerToID + " [label = " + size + "]\n";
											for (var from in connection.gatedfrom) { // gatings
												var layerfrom = connection.gatedfrom[from].layer;
												var layerfromID = layers.indexOf(layerfrom);
												code += "    " + layerfromID + " -> " + layerToID + " [color = blue]\n";
											}
										}
									}
								}
								code += "}\n";
								return {
									code: code,
									link: "https://chart.googleapis.com/chart?chl=" + escape(code.replace("/ /g", "+")) + "&cht=gv"
								}
							},

							// returns a function that works as the activation of the network and can be used without depending on the library
							standalone: function() {
								if (!this.optimized)
									this.optimize();

								var data = this.optimized.data;

								// build activation function
								var activation = "function (input) {\n";

								// build inputs
								for (var i = 0; i < data.inputs; i++)
									activation += "F[" + data.inputs[i] + "] = input[" + i + "];\n";

								// build network activation
								for (var i = 0; i < data.activate.length; i++) { // shouldn't this be layer?
									for (var j = 0; j < data.activate[i].length; j++)
										activation += data.activate[i][j].join('') + "\n";
								}

								// build outputs
								activation += "var output = [];\n";
								for (var i = 0; i < data.outputs.length; i++)
									activation += "output[" + i + "] = F[" + data.outputs[i] + "];\n";
								activation += "return output;\n}";

								// reference all the positions in memory
								var memory = activation.match(/F\[(\d+)\]/g);
								var dimension = 0;
								var ids = {};

								for (var i = 0; i < memory.length; i++) {
									var tmp = memory[i].match(/\d+/)[0];
									if (!(tmp in ids)) {
										ids[tmp] = dimension++;
									}
								}
								var hardcode = "F = {\n";

								for (var i in ids)
									hardcode += ids[i] + ": " + this.optimized.memory[i] + ",\n";
								hardcode = hardcode.substring(0, hardcode.length - 2) + "\n};\n";
								hardcode = "var run = " + activation.replace(/F\[(\d+)]/g, function(
									index) {
									return 'F[' + ids[index.match(/\d+/)[0]] + ']'
								}).replace("{\n", "{\n" + hardcode + "") + ";\n";
								hardcode += "return run";

								// return standalone function
								return new Function(hardcode)();
							},


							// Return a HTML5 WebWorker specialized on training the network stored in `memory`.
							// Train based on the given dataSet and options.
							// The worker returns the updated `memory` when done.
							worker: function(memory, set, options) {

								// Copy the options and set defaults (options might be different for each worker)
								var workerOptions = {};
								if (options) workerOptions = options;
								workerOptions.rate = options.rate || .2;
								workerOptions.iterations = options.iterations || 100000;
								workerOptions.error = options.error || .005;
								workerOptions.cost = options.cost || null;
								workerOptions.crossValidate = options.crossValidate || null;

								// Cost function might be different for each worker
								costFunction = "var cost = " + (options && options.cost || this.cost || Trainer.cost.MSE) + ";\n";
								var workerFunction = Network.getWorkerSharedFunctions();
								workerFunction = workerFunction.replace(/var cost = options && options\.cost \|\| this\.cost \|\| Trainer\.cost\.MSE;/g, costFunction);

								// Set what we do when training is finished
								workerFunction = workerFunction.replace('return results;',
									'postMessage({action: "done", message: results, memoryBuffer: F}, [F.buffer]);');

								// Replace log with postmessage
								workerFunction = workerFunction.replace("console.log('iterations', iterations, 'error', error, 'rate', currentRate)",
									"postMessage({action: 'log', message: {\n" +
									"iterations: iterations,\n" +
									"error: error,\n" +
									"rate: currentRate\n" +
									"}\n" +
									"})");

								// Replace schedule with postmessage
								workerFunction = workerFunction.replace("abort = this.schedule.do({ error: error, iterations: iterations, rate: currentRate })",
									"postMessage({action: 'schedule', message: {\n" +
									"iterations: iterations,\n" +
									"error: error,\n" +
									"rate: currentRate\n" +
									"}\n" +
									"})");

								if (!this.optimized)
									this.optimize();

								var hardcode = "var inputs = " + this.optimized.data.inputs.length + ";\n";
								hardcode += "var outputs = " + this.optimized.data.outputs.length + ";\n";
								hardcode += "var F =  new Float64Array([" + this.optimized.memory.toString() + "]);\n";
								hardcode += "var activate = " + this.optimized.activate.toString() + ";\n";
								hardcode += "var propagate = " + this.optimized.propagate.toString() + ";\n";
								hardcode +=
									"onmessage = function(e) {\n" +
									"if (e.data.action == 'startTraining') {\n" +
									"train(" + JSON.stringify(set) + "," + JSON.stringify(workerOptions) + ");\n" +
									"}\n" +
									"}";

								var workerSourceCode = workerFunction + '\n' + hardcode;
								var blob = new Blob([workerSourceCode]);
								var blobURL = window.URL.createObjectURL(blob);

								return new Worker(blobURL);
							},

							// returns a copy of the network
							clone: function() {
								return Network.fromJSON(this.toJSON());
							}
						};

						/**
						 * Creates a static String to store the source code of the functions
						 *  that are identical for all the workers (train, _trainSet, test)
						 *
						 * @return {String} Source code that can train a network inside a worker.
						 * @static
						 */
						Network.getWorkerSharedFunctions = function() {
							// If we already computed the source code for the shared functions
							if (typeof Network._SHARED_WORKER_FUNCTIONS !== 'undefined')
								return Network._SHARED_WORKER_FUNCTIONS;

							// Otherwise compute and return the source code
							// We compute them by simply copying the source code of the train, _trainSet and test functions
							//  using the .toString() method

							// Load and name the train function
							var train_f = Trainer.prototype.train.toString();
							train_f = train_f.replace('function (set', 'function train(set') + '\n';

							// Load and name the _trainSet function
							var _trainSet_f = Trainer.prototype._trainSet.toString().replace(/this.network./g, '');
							_trainSet_f = _trainSet_f.replace('function (set', 'function _trainSet(set') + '\n';
							_trainSet_f = _trainSet_f.replace('this.crossValidate', 'crossValidate');
							_trainSet_f = _trainSet_f.replace('crossValidate = true', 'crossValidate = { }');

							// Load and name the test function
							var test_f = Trainer.prototype.test.toString().replace(/this.network./g, '');
							test_f = test_f.replace('function (set', 'function test(set') + '\n';

							return Network._SHARED_WORKER_FUNCTIONS = train_f + _trainSet_f + test_f;
						};

						// rebuild a network that has been stored in a json using the method toJSON()
						Network.fromJSON = function(json) {
							var neurons = [];

							var layers = {
								input: new Layer(),
								hidden: [],
								output: new Layer()
							};

							for (var i = 0; i < json.neurons.length; i++) {
								var config = json.neurons[i];

								var neuron = new Neuron();
								neuron.trace.elegibility = {};
								neuron.trace.extended = {};
								neuron.state = config.state;
								neuron.old = config.old;
								neuron.activation = config.activation;
								neuron.bias = config.bias;
								neuron.squash = config.squash in Neuron.squash ? Neuron.squash[config.squash] : Neuron.squash.LOGISTIC;
								neurons.push(neuron);

								if (config.layer == 'input')
									layers.input.add(neuron);
								else if (config.layer == 'output')
									layers.output.add(neuron);
								else {
									if (typeof layers.hidden[config.layer] == 'undefined')
										layers.hidden[config.layer] = new Layer();
									layers.hidden[config.layer].add(neuron);
								}
							}

							for (var i = 0; i < json.connections.length; i++) {
								var config = json.connections[i];
								var from = neurons[config.from];
								var to = neurons[config.to];
								var weight = config.weight;
								var gater = neurons[config.gater];

								var connection = from.project(to, weight);
								if (gater)
									gater.gate(connection);
							}

							return new Network(layers);
						};

						/* WEBPACK VAR INJECTION */
					}.call(exports, __webpack_require__(2)(module)))

					/***/
				}),
				/* 5 */
				/***/
				(function(module, exports, __webpack_require__) {

					/* WEBPACK VAR INJECTION */
					(function(module) { // export
						if (module) module.exports = Trainer;

						/*******************************************************************************************
						                                        TRAINER
						*******************************************************************************************/

						//+ Jonas Raoni Soares Silva
						//@ http://jsfromhell.com/array/shuffle [v1.0]
						function shuffleInplace(o) { //v1.0
							for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
							return o;
						};

						function Trainer(network, options) {
							options = options || {};
							this.network = network;
							this.rate = options.rate || .2;
							this.iterations = options.iterations || 100000;
							this.error = options.error || .005;
							this.cost = options.cost || null;
							this.crossValidate = options.crossValidate || null;
						}

						Trainer.prototype = {

							// trains any given set to a network
							train: function(set, options) {
								var error = 1;
								var iterations = bucketSize = 0;
								var abort = false;
								var currentRate;
								var cost = options && options.cost || this.cost || Trainer.cost.MSE;
								var crossValidate = false,
									testSet, trainSet;

								var start = Date.now();

								if (options) {
									if (options.iterations)
										this.iterations = options.iterations;
									if (options.error)
										this.error = options.error;
									if (options.rate)
										this.rate = options.rate;
									if (options.cost)
										this.cost = options.cost;
									if (options.schedule)
										this.schedule = options.schedule;
									if (options.customLog) {
										// for backward compatibility with code that used customLog
										console.log('Deprecated: use schedule instead of customLog')
										this.schedule = options.customLog;
									}
									if (this.crossValidate || options.crossValidate) {
										if (!this.crossValidate) this.crossValidate = {};
										crossValidate = true;
										if (options.crossValidate.testSize)
											this.crossValidate.testSize = options.crossValidate.testSize;
										if (options.crossValidate.testError)
											this.crossValidate.testError = options.crossValidate.testError;
									}
								}

								currentRate = this.rate;
								if (Array.isArray(this.rate)) {
									var bucketSize = Math.floor(this.iterations / this.rate.length);
								}

								if (crossValidate) {
									var numTrain = Math.ceil((1 - this.crossValidate.testSize) * set.length);
									trainSet = set.slice(0, numTrain);
									testSet = set.slice(numTrain);
								}

								var lastError = 0;
								while ((!abort && iterations < this.iterations && error > this.error)) {
									if (crossValidate && error <= this.crossValidate.testError) {
										break;
									}

									var currentSetSize = set.length;
									error = 0;
									iterations++;

									if (bucketSize > 0) {
										var currentBucket = Math.floor(iterations / bucketSize);
										currentRate = this.rate[currentBucket] || currentRate;
									}

									if (typeof this.rate === 'function') {
										currentRate = this.rate(iterations, lastError);
									}

									if (crossValidate) {
										this._trainSet(trainSet, currentRate, cost);
										error += this.test(testSet).error;
										currentSetSize = 1;
									} else {
										error += this._trainSet(set, currentRate, cost);
										currentSetSize = set.length;
									}

									// check error
									error /= currentSetSize;
									lastError = error;

									if (options) {
										if (this.schedule && this.schedule.every && iterations %
											this.schedule.every == 0)
											abort = this.schedule.do({
												error: error,
												iterations: iterations,
												rate: currentRate
											});
										else if (options.log && iterations % options.log == 0) {
											console.log('iterations', iterations, 'error', error, 'rate', currentRate);
										};
										if (options.shuffle)
											shuffleInplace(set);
									}
								}

								var results = {
									error: error,
									iterations: iterations,
									time: Date.now() - start
								};

								return results;
							},

							// trains any given set to a network, using a WebWorker (only for the browser). Returns a Promise of the results.
							trainAsync: function(set, options) {
								var train = this.workerTrain.bind(this);
								return new Promise(function(resolve, reject) {
									try {
										train(set, resolve, options, true)
									} catch (e) {
										reject(e)
									}
								})
							},

							// preforms one training epoch and returns the error (private function used in this.train)
							_trainSet: function(set, currentRate, costFunction) {
								var errorSum = 0;
								for (var i = 0; i < set.length; i++) {
									var input = set[i].input;
									var target = set[i].output;

									var output = this.network.activate(input);
									this.network.propagate(currentRate, target);

									errorSum += costFunction(target, output);
								}
								return errorSum;
							},

							// tests a set and returns the error and elapsed time
							test: function(set, options) {
								var error = 0;
								var input, output, target;
								var cost = options && options.cost || this.cost || Trainer.cost.MSE;

								var start = Date.now();

								for (var i = 0; i < set.length; i++) {
									input = set[i].input;
									target = set[i].output;
									output = this.network.activate(input);
									error += cost(target, output);
								}

								error /= set.length;

								var results = {
									error: error,
									time: Date.now() - start
								};

								return results;
							},

							// trains any given set to a network using a WebWorker [deprecated: use trainAsync instead]
							workerTrain: function(set, callback, options, suppressWarning) {
								if (!suppressWarning) {
									console.warn('Deprecated: do not use `workerTrain`, use `trainAsync` instead.')
								}
								var that = this;

								if (!this.network.optimized)
									this.network.optimize();

								// Create a new worker
								var worker = this.network.worker(this.network.optimized.memory, set, options);

								// train the worker
								worker.onmessage = function(e) {
									switch (e.data.action) {
										case 'done':
											var iterations = e.data.message.iterations;
											var error = e.data.message.error;
											var time = e.data.message.time;

											that.network.optimized.ownership(e.data.memoryBuffer);

											// Done callback
											callback({
												error: error,
												iterations: iterations,
												time: time
											});

											// Delete the worker and all its associated memory
											worker.terminate();
											break;

										case 'log':
											console.log(e.data.message);

										case 'schedule':
											if (options && options.schedule && typeof options.schedule.do === 'function') {
												var scheduled = options.schedule.do
												scheduled(e.data.message)
											}
											break;
									}
								};

								// Start the worker
								worker.postMessage({
									action: 'startTraining'
								});
							},

							// trains an XOR to the network
							XOR: function(options) {
								if (this.network.inputs() != 2 || this.network.outputs() != 1)
									throw new Error("Incompatible network (2 inputs, 1 output)");

								var defaults = {
									iterations: 100000,
									log: false,
									shuffle: true,
									cost: Trainer.cost.MSE
								};

								if (options)
									for (var i in options)
										defaults[i] = options[i];

								return this.train([{
									input: [0, 0],
									output: [0]
								}, {
									input: [1, 0],
									output: [1]
								}, {
									input: [0, 1],
									output: [1]
								}, {
									input: [1, 1],
									output: [0]
								}], defaults);
							},

							// trains the network to pass a Distracted Sequence Recall test
							DSR: function(options) {
								options = options || {};

								var targets = options.targets || [2, 4, 7, 8];
								var distractors = options.distractors || [3, 5, 6, 9];
								var prompts = options.prompts || [0, 1];
								var length = options.length || 24;
								var criterion = options.success || 0.95;
								var iterations = options.iterations || 100000;
								var rate = options.rate || .1;
								var log = options.log || 0;
								var schedule = options.schedule || {};
								var cost = options.cost || this.cost || Trainer.cost.CROSS_ENTROPY;

								var trial, correct, i, j, success;
								trial = correct = i = j = success = 0;
								var error = 1,
									symbols = targets.length + distractors.length + prompts.length;

								var noRepeat = function(range, avoid) {
									var number = Math.random() * range | 0;
									var used = false;
									for (var i in avoid)
										if (number == avoid[i])
											used = true;
									return used ? noRepeat(range, avoid) : number;
								};

								var equal = function(prediction, output) {
									for (var i in prediction)
										if (Math.round(prediction[i]) != output[i])
											return false;
									return true;
								};

								var start = Date.now();

								while (trial < iterations && (success < criterion || trial % 1000 != 0)) {
									// generate sequence
									var sequence = [],
										sequenceLength = length - prompts.length;
									for (i = 0; i < sequenceLength; i++) {
										var any = Math.random() * distractors.length | 0;
										sequence.push(distractors[any]);
									}
									var indexes = [],
										positions = [];
									for (i = 0; i < prompts.length; i++) {
										indexes.push(Math.random() * targets.length | 0);
										positions.push(noRepeat(sequenceLength, positions));
									}
									positions = positions.sort();
									for (i = 0; i < prompts.length; i++) {
										sequence[positions[i]] = targets[indexes[i]];
										sequence.push(prompts[i]);
									}

									//train sequence
									var distractorsCorrect;
									var targetsCorrect = distractorsCorrect = 0;
									error = 0;
									for (i = 0; i < length; i++) {
										// generate input from sequence
										var input = [];
										for (j = 0; j < symbols; j++)
											input[j] = 0;
										input[sequence[i]] = 1;

										// generate target output
										var output = [];
										for (j = 0; j < targets.length; j++)
											output[j] = 0;

										if (i >= sequenceLength) {
											var index = i - sequenceLength;
											output[indexes[index]] = 1;
										}

										// check result
										var prediction = this.network.activate(input);

										if (equal(prediction, output))
											if (i < sequenceLength)
												distractorsCorrect++;
											else
												targetsCorrect++;
										else {
											this.network.propagate(rate, output);
										}

										error += cost(output, prediction);

										if (distractorsCorrect + targetsCorrect == length)
											correct++;
									}

									// calculate error
									if (trial % 1000 == 0)
										correct = 0;
									trial++;
									var divideError = trial % 1000;
									divideError = divideError == 0 ? 1000 : divideError;
									success = correct / divideError;
									error /= length;

									// log
									if (log && trial % log == 0)
										console.log("iterations:", trial, " success:", success, " correct:",
											correct, " time:", Date.now() - start, " error:", error);
									if (schedule.do && schedule.every && trial % schedule.every == 0)
										schedule.do({
											iterations: trial,
											success: success,
											error: error,
											time: Date.now() - start,
											correct: correct
										});
								}

								return {
									iterations: trial,
									success: success,
									error: error,
									time: Date.now() - start
								}
							},

							// train the network to learn an Embeded Reber Grammar
							ERG: function(options) {

								options = options || {};
								var iterations = options.iterations || 150000;
								var criterion = options.error || .05;
								var rate = options.rate || .1;
								var log = options.log || 500;
								var cost = options.cost || this.cost || Trainer.cost.CROSS_ENTROPY;

								// gramar node
								var Node = function() {
									this.paths = [];
								};
								Node.prototype = {
									connect: function(node, value) {
										this.paths.push({
											node: node,
											value: value
										});
										return this;
									},
									any: function() {
										if (this.paths.length == 0)
											return false;
										var index = Math.random() * this.paths.length | 0;
										return this.paths[index];
									},
									test: function(value) {
										for (var i in this.paths)
											if (this.paths[i].value == value)
												return this.paths[i];
										return false;
									}
								};

								var reberGrammar = function() {

									// build a reber grammar
									var output = new Node();
									var n1 = (new Node()).connect(output, "E");
									var n2 = (new Node()).connect(n1, "S");
									var n3 = (new Node()).connect(n1, "V").connect(n2, "P");
									var n4 = (new Node()).connect(n2, "X");
									n4.connect(n4, "S");
									var n5 = (new Node()).connect(n3, "V");
									n5.connect(n5, "T");
									n2.connect(n5, "X");
									var n6 = (new Node()).connect(n4, "T").connect(n5, "P");
									var input = (new Node()).connect(n6, "B");

									return {
										input: input,
										output: output
									}
								};

								// build an embeded reber grammar
								var embededReberGrammar = function() {
									var reber1 = reberGrammar();
									var reber2 = reberGrammar();

									var output = new Node();
									var n1 = (new Node).connect(output, "E");
									reber1.output.connect(n1, "T");
									reber2.output.connect(n1, "P");
									var n2 = (new Node).connect(reber1.input, "P").connect(reber2.input,
										"T");
									var input = (new Node).connect(n2, "B");

									return {
										input: input,
										output: output
									}

								};

								// generate an ERG sequence
								var generate = function() {
									var node = embededReberGrammar().input;
									var next = node.any();
									var str = "";
									while (next) {
										str += next.value;
										next = next.node.any();
									}
									return str;
								};

								// test if a string matches an embeded reber grammar
								var test = function(str) {
									var node = embededReberGrammar().input;
									var i = 0;
									var ch = str.charAt(i);
									while (i < str.length) {
										var next = node.test(ch);
										if (!next)
											return false;
										node = next.node;
										ch = str.charAt(++i);
									}
									return true;
								};

								// helper to check if the output and the target vectors match
								var different = function(array1, array2) {
									var max1 = 0;
									var i1 = -1;
									var max2 = 0;
									var i2 = -1;
									for (var i in array1) {
										if (array1[i] > max1) {
											max1 = array1[i];
											i1 = i;
										}
										if (array2[i] > max2) {
											max2 = array2[i];
											i2 = i;
										}
									}

									return i1 != i2;
								};

								var iteration = 0;
								var error = 1;
								var table = {
									"B": 0,
									"P": 1,
									"T": 2,
									"X": 3,
									"S": 4,
									"E": 5
								};

								var start = Date.now();
								while (iteration < iterations && error > criterion) {
									var i = 0;
									error = 0;

									// ERG sequence to learn
									var sequence = generate();

									// input
									var read = sequence.charAt(i);
									// target
									var predict = sequence.charAt(i + 1);

									// train
									while (i < sequence.length - 1) {
										var input = [];
										var target = [];
										for (var j = 0; j < 6; j++) {
											input[j] = 0;
											target[j] = 0;
										}
										input[table[read]] = 1;
										target[table[predict]] = 1;

										var output = this.network.activate(input);

										if (different(output, target))
											this.network.propagate(rate, target);

										read = sequence.charAt(++i);
										predict = sequence.charAt(i + 1);

										error += cost(target, output);
									}
									error /= sequence.length;
									iteration++;
									if (iteration % log == 0) {
										console.log("iterations:", iteration, " time:", Date.now() - start,
											" error:", error);
									}
								}

								return {
									iterations: iteration,
									error: error,
									time: Date.now() - start,
									test: test,
									generate: generate
								}
							},

							timingTask: function(options) {

								if (this.network.inputs() != 2 || this.network.outputs() != 1)
									throw new Error("Invalid Network: must have 2 inputs and one output");

								if (typeof options == 'undefined')
									options = {};

								// helper
								function getSamples(trainingSize, testSize) {

									// sample size
									var size = trainingSize + testSize;

									// generate samples
									var t = 0;
									var set = [];
									for (var i = 0; i < size; i++) {
										set.push({
											input: [0, 0],
											output: [0]
										});
									}
									while (t < size - 20) {
										var n = Math.round(Math.random() * 20);
										set[t].input[0] = 1;
										for (var j = t; j <= t + n; j++) {
											set[j].input[1] = n / 20;
											set[j].output[0] = 0.5;
										}
										t += n;
										n = Math.round(Math.random() * 20);
										for (var k = t + 1; k <= (t + n) && k < size; k++)
											set[k].input[1] = set[t].input[1];
										t += n;
									}

									// separate samples between train and test sets
									var trainingSet = [];
									var testSet = [];
									for (var l = 0; l < size; l++)
										(l < trainingSize ? trainingSet : testSet).push(set[l]);

									// return samples
									return {
										train: trainingSet,
										test: testSet
									}
								}

								var iterations = options.iterations || 200;
								var error = options.error || .005;
								var rate = options.rate || [.03, .02];
								var log = options.log === false ? false : options.log || 10;
								var cost = options.cost || this.cost || Trainer.cost.MSE;
								var trainingSamples = options.trainSamples || 7000;
								var testSamples = options.trainSamples || 1000;

								// samples for training and testing
								var samples = getSamples(trainingSamples, testSamples);

								// train
								var result = this.train(samples.train, {
									rate: rate,
									log: log,
									iterations: iterations,
									error: error,
									cost: cost
								});

								return {
									train: result,
									test: this.test(samples.test)
								}
							}
						};

						// Built-in cost functions
						Trainer.cost = {
							// Eq. 9
							CROSS_ENTROPY: function(target, output) {
								var crossentropy = 0;
								for (var i in output)
									crossentropy -= (target[i] * Math.log(output[i] + 1e-15)) + ((1 - target[i]) * Math.log((1 + 1e-15) - output[i])); // +1e-15 is a tiny push away to avoid Math.log(0)
								return crossentropy;
							},
							MSE: function(target, output) {
								var mse = 0;
								for (var i = 0; i < output.length; i++)
									mse += Math.pow(target[i] - output[i], 2);
								return mse / output.length;
							},
							BINARY: function(target, output) {
								var misses = 0;
								for (var i = 0; i < output.length; i++)
									misses += Math.round(target[i] * 2) != Math.round(output[i] * 2);
								return misses;
							}
						}

						/* WEBPACK VAR INJECTION */
					}.call(exports, __webpack_require__(2)(module)))

					/***/
				}),
				/* 6 */
				/***/
				(function(module, exports, __webpack_require__) {

					/* WEBPACK VAR INJECTION */
					(function(module) { // import
						var Layer = __webpack_require__(3),
							Network = __webpack_require__(4),
							Trainer = __webpack_require__(5)

						/*******************************************************************************************
						                                        ARCHITECT
						*******************************************************************************************/

						// Collection of useful built-in architectures
						var Architect = {

							// Multilayer Perceptron
							Perceptron: function Perceptron() {
								var args = Array.prototype.slice.call(arguments); // convert arguments to Array
								if (args.length < 3)
									throw new Error("not enough layers (minimum 3) !!");

								var inputs = args.shift(); // first argument
								var outputs = args.pop(); // last argument
								var layers = args; // all the arguments in the middle

								var input = new Layer(inputs);
								var hidden = [];
								var output = new Layer(outputs);

								var previous = input;

								// generate hidden layers
								for (var i = 0; i < layers.length; i++) {
									var size = layers[i];
									var layer = new Layer(size);
									hidden.push(layer);
									previous.project(layer);
									previous = layer;
								}
								previous.project(output);

								// set layers of the neural network
								this.set({
									input: input,
									hidden: hidden,
									output: output
								});
							},

							// Multilayer Long Short-Term Memory
							LSTM: function LSTM() {
								var args = Array.prototype.slice.call(arguments); // convert arguments to array
								if (args.length < 3)
									throw new Error("not enough layers (minimum 3) !!");

								var last = args.pop();
								var option = {
									peepholes: Layer.connectionType.ALL_TO_ALL,
									hiddenToHidden: false,
									outputToHidden: false,
									outputToGates: false,
									inputToOutput: true,
								};
								if (typeof last != 'number') {
									var outputs = args.pop();
									if (last.hasOwnProperty('peepholes'))
										option.peepholes = last.peepholes;
									if (last.hasOwnProperty('hiddenToHidden'))
										option.hiddenToHidden = last.hiddenToHidden;
									if (last.hasOwnProperty('outputToHidden'))
										option.outputToHidden = last.outputToHidden;
									if (last.hasOwnProperty('outputToGates'))
										option.outputToGates = last.outputToGates;
									if (last.hasOwnProperty('inputToOutput'))
										option.inputToOutput = last.inputToOutput;
								} else {
									var outputs = last;
								}

								var inputs = args.shift();
								var layers = args;

								var inputLayer = new Layer(inputs);
								var hiddenLayers = [];
								var outputLayer = new Layer(outputs);

								var previous = null;

								// generate layers
								for (var i = 0; i < layers.length; i++) {
									// generate memory blocks (memory cell and respective gates)
									var size = layers[i];

									var inputGate = new Layer(size).set({
										bias: 1
									});
									var forgetGate = new Layer(size).set({
										bias: 1
									});
									var memoryCell = new Layer(size);
									var outputGate = new Layer(size).set({
										bias: 1
									});

									hiddenLayers.push(inputGate);
									hiddenLayers.push(forgetGate);
									hiddenLayers.push(memoryCell);
									hiddenLayers.push(outputGate);

									// connections from input layer
									var input = inputLayer.project(memoryCell);
									inputLayer.project(inputGate);
									inputLayer.project(forgetGate);
									inputLayer.project(outputGate);

									// connections from previous memory-block layer to this one
									if (previous != null) {
										var cell = previous.project(memoryCell);
										previous.project(inputGate);
										previous.project(forgetGate);
										previous.project(outputGate);
									}

									// connections from memory cell
									var output = memoryCell.project(outputLayer);

									// self-connection
									var self = memoryCell.project(memoryCell);

									// hidden to hidden recurrent connection
									if (option.hiddenToHidden)
										memoryCell.project(memoryCell, Layer.connectionType.ALL_TO_ELSE);

									// out to hidden recurrent connection
									if (option.outputToHidden)
										outputLayer.project(memoryCell);

									// out to gates recurrent connection
									if (option.outputToGates) {
										outputLayer.project(inputGate);
										outputLayer.project(outputGate);
										outputLayer.project(forgetGate);
									}

									// peepholes
									memoryCell.project(inputGate, option.peepholes);
									memoryCell.project(forgetGate, option.peepholes);
									memoryCell.project(outputGate, option.peepholes);

									// gates
									inputGate.gate(input, Layer.gateType.INPUT);
									forgetGate.gate(self, Layer.gateType.ONE_TO_ONE);
									outputGate.gate(output, Layer.gateType.OUTPUT);
									if (previous != null)
										inputGate.gate(cell, Layer.gateType.INPUT);

									previous = memoryCell;
								}

								// input to output direct connection
								if (option.inputToOutput)
									inputLayer.project(outputLayer);

								// set the layers of the neural network
								this.set({
									input: inputLayer,
									hidden: hiddenLayers,
									output: outputLayer
								});
							},

							// Liquid State Machine
							Liquid: function Liquid(inputs, hidden, outputs, connections, gates) {
								// create layers
								var inputLayer = new Layer(inputs);
								var hiddenLayer = new Layer(hidden);
								var outputLayer = new Layer(outputs);

								// make connections and gates randomly among the neurons
								var neurons = hiddenLayer.neurons();
								var connectionList = [];

								for (var i = 0; i < connections; i++) {
									// connect two random neurons
									var from = Math.random() * neurons.length | 0;
									var to = Math.random() * neurons.length | 0;
									var connection = neurons[from].project(neurons[to]);
									connectionList.push(connection);
								}

								for (var j = 0; j < gates; j++) {
									// pick a random gater neuron
									var gater = Math.random() * neurons.length | 0;
									// pick a random connection to gate
									var connection = Math.random() * connectionList.length | 0;
									// let the gater gate the connection
									neurons[gater].gate(connectionList[connection]);
								}

								// connect the layers
								inputLayer.project(hiddenLayer);
								hiddenLayer.project(outputLayer);

								// set the layers of the network
								this.set({
									input: inputLayer,
									hidden: [hiddenLayer],
									output: outputLayer
								});
							},

							Hopfield: function Hopfield(size) {
								var inputLayer = new Layer(size);
								var outputLayer = new Layer(size);

								inputLayer.project(outputLayer, Layer.connectionType.ALL_TO_ALL);

								this.set({
									input: inputLayer,
									hidden: [],
									output: outputLayer
								});

								var trainer = new Trainer(this);

								var proto = Architect.Hopfield.prototype;

								proto.learn = proto.learn || function(patterns) {
									var set = [];
									for (var p in patterns)
										set.push({
											input: patterns[p],
											output: patterns[p]
										});

									return trainer.train(set, {
										iterations: 500000,
										error: .00005,
										rate: 1
									});
								};

								proto.feed = proto.feed || function(pattern) {
									var output = this.activate(pattern);

									var pattern = [];
									for (var i in output)
										pattern[i] = output[i] > .5 ? 1 : 0;

									return pattern;
								}
							}
						}

						// Extend prototype chain (so every architectures is an instance of Network)
						for (var architecture in Architect) {
							Architect[architecture].prototype = new Network();
							Architect[architecture].prototype.constructor = Architect[architecture];
						}

						// export
						if (module) module.exports = Architect;

						/* WEBPACK VAR INJECTION */
					}.call(exports, __webpack_require__(2)(module)))

					/***/
				})
				/******/
			])
	});


	//======================================
	//======================================

	var Architect = synaptic.Architect;
	var Network = synaptic.Network;


	var Learn = {

		// Array of networks for current Genomes
		// (Genomes will be added the key `fitness`)
		genomes: [],

		// Current state of learning [STOP, LEARNING]
		state: 'STOP',

		// Current genome/generation tryout
		genome: 0,
		generation: 0,

		// Set this, to verify genome experience BEFORE running it
		shouldCheckExperience: false,

	};


	// Initialize the Learner
	Learn.init = function(gameManip, ui, genomeUnits, selection, mutationProb) {
		Learn.gm = gameManip;
		Learn.ui = ui;

		Learn.genome = 0;
		Learn.generation = 0;

		Learn.genomeUnits = genomeUnits;
		Learn.selection = selection;
		Learn.mutationProb = mutationProb;
	}


	// Build genomes before calling executeGeneration.
	Learn.startLearning = function() {

		// Build genomes if needed
		while (Learn.genomes.length < Learn.genomeUnits) {
			Learn.genomes.push(Learn.buildGenome(3, 1));
		}

		Learn.executeGeneration();

	}


	// Given the entire generation of genomes (An array),
	// applyes method `executeGenome` for each element.
	// After all elements have completed executing:
	// 
	// 1) Select best genomes
	// 2) Does cross over (except for 2 genomes)
	// 3) Does Mutation-only on remaining genomes
	// 4) Execute generation (recursivelly)
	Learn.executeGeneration = function() {

		if (Learn.state == 'STOP') {
			return;
		}

		Learn.generation++;
		Learn.ui.logger.log('Executing generation ' + Learn.generation);

		Learn.genome = 0;

		async.mapSeries(Learn.genomes, Learn.executeGenome, function(argument) {

			// Kill worst genomes
			Learn.genomes = Learn.selectBestGenomes(Learn.selection);

			// Copy best genomes
			var bestGenomes = _.clone(Learn.genomes);

			// Cross Over ()
			while (Learn.genomes.length < Learn.genomeUnits - 2) {
				// Get two random Genomes
				var genA = _.sample(bestGenomes).toJSON();
				var genB = _.sample(bestGenomes).toJSON();

				// Cross over and Mutate
				var newGenome = Learn.mutate(Learn.crossOver(genA, genB));

				// Add to generation
				Learn.genomes.push(Network.fromJSON(newGenome));
			}

			// Mutation-only
			while (Learn.genomes.length < Learn.genomeUnits) {
				// Get two random Genomes
				var gen = _.sample(bestGenomes).toJSON();

				// Cross over and Mutate
				var newGenome = Learn.mutate(gen);

				// Add to generation
				Learn.genomes.push(Network.fromJSON(newGenome));
			}

			Learn.ui.logger.log('Completed generation ' + Learn.generation);

			// Execute next generation
			Learn.executeGeneration();
		})
	}


	// Sort all the genomes, and delete the worst one
	// untill the genome list has selectN elements.
	Learn.selectBestGenomes = function(selectN) {
		var selected = _.sortBy(Learn.genomes, 'fitness').reverse();

		while (selected.length > selectN) {
			selected.pop();
		}

		Learn.ui.logger.log('Fitness: ' + _.map(selected, 'fitness', function(n) {
			return n;
		}).join(','));

		return selected;
	}


	// Waits the game to end, and start a new one, then:
	// 1) Set's listener for sensorData
	// 2) On data read, applyes the neural network, and
	//    set it's output
	// 3) When the game has ended and compute the fitness
	Learn.executeGenome = function(genome, next) {
		if (Learn.state == 'STOP') {
			return;
		}

		Learn.genome = Learn.genomes.indexOf(genome) + 1;
		// Learn.ui.logger.log('Executing genome '+Learn.genome);

		// Check if genome has AT LEAST some experience
		if (Learn.shouldCheckExperience) {
			if (!Learn.checkExperience(genome)) {
				genome.fitness = 0;
				// Learn.ui.logger.log('Genome '+Learn.genome+' has no min. experience');
				return next();
			}
		}

		Learn.gm.startNewGame(function() {

			// Reads sensor data, and apply network
			Learn.gm.onSensorData = function() {
				var inputs = [
					Learn.gm.sensors[0].value,
					Learn.gm.sensors[0].size,
					Learn.gm.sensors[0].speed,
				];

				// console.log(inputs);
				// Apply to network
				var outputs = genome.activate(inputs);

				Learn.gm.setGameOutput(outputs[0]);
			}

			// Wait game end, and compute fitness
			Learn.gm.onGameEnd = function(points) {
				Learn.ui.logger.log('Genome ' + Learn.genome + ' ended. Fitness: ' + points);

				// Save Genome fitness
				genome.fitness = points;

				// Go to next genome
				next();
			}
		});

	}


	// Validate if any acction occur uppon a given input (in this case, distance).
	// If genome only keeps a single activation value for any given input,
	// it will return false
	Learn.checkExperience = function(genome) {

		var step = 0.1,
			start = 0.0,
			stop = 1;

		// Inputs are default. We only want to test the first index
		var inputs = [0.0, 0.3, 0.2];
		var activation, state, outputs = {};

		for (var k = start; k < stop; k += step) {
			inputs[0] = k;

			activation = genome.activate(inputs);
			state = Learn.gm.getDiscreteState(activation);

			outputs[state] = true;
		}

		// Count states, and return true if greater than 1
		return _.keys(outputs).length > 1;
	}


	// Load genomes saved from JSON file
	Learn.loadGenomes = function(genomes, deleteOthers) {
		if (deleteOthers) {
			Learn.genomes = [];
		}

		var loaded = 0;
		for (var k in genomes) {
			Learn.genomes.push(Network.fromJSON(genomes[k]));
			loaded++;
		}

		Learn.ui.logger.log('Loaded ' + loaded + ' genomes!');
	}


	// Builds a new genome based on the 
	// expected number of inputs and outputs
	Learn.buildGenome = function(inputs, outputs) {
		Learn.ui.logger.log('Build genome ' + (Learn.genomes.length + 1));

		var network = new Architect.Perceptron(inputs, 4, 4, outputs);

		return network;
	}


	// SPECIFIC to Neural Network.
	// Those two methods convert from JSON to Array, and from Array to JSON
	Learn.crossOver = function(netA, netB) {
		// Swap (50% prob.)
		if (Math.random() > 0.5) {
			var tmp = netA;
			netA = netB;
			netB = tmp;
		}

		// Clone network
		netA = _.cloneDeep(netA);
		netB = _.cloneDeep(netB);

		// Cross over data keys
		Learn.crossOverDataKey(netA.neurons, netB.neurons, 'bias');

		return netA;
	}


	// Does random mutations across all
	// the biases and weights of the Networks
	// (This must be done in the JSON to
	// prevent modifying the current one)
	Learn.mutate = function(net) {
		// Mutate
		Learn.mutateDataKeys(net.neurons, 'bias', Learn.mutationProb);

		Learn.mutateDataKeys(net.connections, 'weight', Learn.mutationProb);

		return net;
	}


	// Given an Object A and an object B, both Arrays
	// of Objects:
	// 
	// 1) Select a cross over point (cutLocation)
	//    randomly (going from 0 to A.length)
	// 2) Swap values from `key` one to another,
	//    starting by cutLocation
	Learn.crossOverDataKey = function(a, b, key) {
		var cutLocation = Math.round(a.length * Math.random());

		var tmp;
		for (var k = cutLocation; k < a.length; k++) {
			// Swap
			tmp = a[k][key];
			a[k][key] = b[k][key];
			b[k][key] = tmp;
		}
	}


	// Given an Array of objects with key `key`,
	// and also a `mutationRate`, randomly Mutate
	// the value of each key, if random value is
	// lower than mutationRate for each element.
	Learn.mutateDataKeys = function(a, key, mutationRate) {
		for (var k = 0; k < a.length; k++) {
			// Should mutate?
			if (Math.random() > mutationRate) {
				continue;
			}

			a[k][key] += a[k][key] * (Math.random() - 0.5) * 3 + (Math.random() - 0.5);
		}
	}

	window.Learn = Learn;

	//=vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv===
	//==vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv======
	var r = new Runner(".interstitial-wrapper");
	window.r = r;
	window.robot = {
		keyToggle: function(s1, s2) {

			var keycode = 32;
			if (s1 === 'up') {
				keycode = 32; //Runner.keycodes.JUMP[0];
			} else {
				keycode = 40; //Runner.keycodes.DUCK;
			}
			if (s2 === 'down') {
				r.onKeyDown({
					preventDefault: function() {

					},
					keyCode: keycode
				});
			} else {
				r.onKeyUp({
					preventDefault: function() {

					},
					keyCode: keycode
				});
			}

		}
	}

	var bestFitnesses = 0;
	var oldbestFitnesses = 0;
	window.inGameDone = function inGameDone() {

		robot.keyToggle('up', 'down');
		robot.keyToggle('up', 'up');

		GameManipulator.points = r.tRex.obstaclesJumped;
		GameManipulator.onGameEnd && GameManipulator.onGameEnd(GameManipulator.points);
		r.tRex.obstaclesJumped = 0;

		if (bestFitnesses > oldbestFitnesses)
			GameManipulator.saveBestGenome(true);

		oldbestFitnesses = bestFitnesses;
	}



	var GameManipulator = {


	};
	window.GameManipulator = GameManipulator;
	var UI = {
		logger: {
			log: function(l) {
				console.log(l);
			}
		}
	}
	window.UI = UI;
	GameManipulator.startProgram = function() {
		// Init Learner
		Learn.init(this, UI, 12, 4, 0.2);
		Learn.state = "PLAY";
		Learn.startLearning();

		robot.keyToggle('up', 'down');
		robot.keyToggle('up', 'up');
	};


	// Find out dinosaur (fast)
	GameManipulator.findGamePosition = function() {

	};


	// Read Game state
	// (If game is ended or is playing)
	GameManipulator.readGameState = function() {

	}


	// Call this to start a fresh new game
	// Will wait untill game has ended,
	// and call the `next` callback
	var _startKeyInterval;
	GameManipulator.startNewGame = function(next) {

		// Set start callback
		// GameManipulator.onGameStart = function(argument) {
		next && next();
		// };


	}

	// reload the page
	GameManipulator.reloadPage = function() {

	}


	// Compute points based on sensors
	//
	// Basicaly, checks if an object has
	// passed trough the sensor and the
	// value is now higher than before
	GameManipulator.computePoints = function() {

	}


	// Read sensors
	//
	// Sensors are like ray-traces:
	//   They have a starting point,
	//   and a limit to search for.
	//
	// Each sensor can gatter data about
	// the DISTANCE of the object, it's
	// SIZE and it's speed
	//
	// Note: We currently only have a sensor.
	GameManipulator.sensors = [];
	GameManipulator.sensors[0] = {};
	GameManipulator.readSensors = function() {
		GameManipulator.sensors[0].value = r.horizon.obstacles[0] && (Math.abs(r.horizon.obstacles[0].xPos - r.tRex.xPos)) || 0;

		// check if a bird
		var type = 0;
		if (r.horizon.obstacles[0]) {
			if (r.horizon.obstacles[0].yPos === 105 || r.horizon.obstacles[0].yPos === 90) {
				type = r.horizon.obstacles[0].size;
			} else {
				if (r.horizon.obstacles[0].yPos === 100) {
					type = 4;
				} else if (r.horizon.obstacles[0].yPos === 75) {
					type = 5;
				} else if (r.horizon.obstacles[0].yPos === 50) {
					type = 6;
				}
			}
		}
		GameManipulator.sensors[0].size = type;


		GameManipulator.sensors[0].speed = r.currentSpeed;

		GameManipulator.onSensorData && GameManipulator.onSensorData();


	}


	function drawMachineStats() {
		if (!r || !r.tRex || !r.tRex.canvasCtx) return;
		var currFit = r.tRex.obstaclesJumped;
		if (currFit > bestFitnesses) bestFitnesses = currFit;
		var ctx = r.tRex.canvasCtx;
		ctx.globalAlpha = 0.8;
		ctx.font = '10pt Calibri';
		ctx.fillStyle = 'grey';
		ctx.fillText('Generation: ' + Learn.generation, 0, 20);
		ctx.fillText('Genome: ' + Learn.genome, 0, 40);
		ctx.fillText('Curr fitness: ' + currFit, 100, 20);
		ctx.fillText('Best fitness: ' + bestFitnesses, 100, 40);
		ctx.fillText('Distance: ' + String(GameManipulator.sensors[0].value).substring(0, 6), 200, 20);
		ctx.fillText('Type: ' + String(GameManipulator.sensors[0].size).substring(0, 6), 200, 40);
		ctx.fillText('Speed: ' + String(GameManipulator.sensors[0].speed).substring(0, 6), 200, 60);
		ctx.fillText('Output: ' + String(GameManipulator.gameOutput).substring(0, 6), 300, 20);
		ctx.fillText('Jump: output > 0.55', 300, 40);
		ctx.fillText('Duck: output < 0.45', 300, 60);
		ctx.globalAlpha = 1;
	}


	// Set action to game
	// Values:
	//  0.00 to  0.45: DOWN
	//  0.45 to  0.55: NOTHING
	//  0.55 to  1.00: UP (JUMP)
	var PRESS = 'down';
	var RELEASE = 'up';
	window.PRESS = PRESS;
	window.RELEASE = RELEASE;

	GameManipulator.lastOutputSet = 'NONE';
	GameManipulator.lastOutputSetTime = 0;

	GameManipulator.setGameOutput = function(output) {

		GameManipulator.gameOutput = output;
		GameManipulator.gameOutputString = GameManipulator.getDiscreteState(output);


		if (GameManipulator.gameOutputString == 'DOWN') {
			// Skew
			robot.keyToggle('up', RELEASE);
			robot.keyToggle('down', PRESS);
		} else if (GameManipulator.gameOutputString == 'NORM') {
			// DO Nothing
			robot.keyToggle('up', RELEASE);
			robot.keyToggle('down', RELEASE);
		} else if (GameManipulator.gameOutputString == 'JUMP') {
			robot.keyToggle('up', PRESS);
			robot.keyToggle('down', RELEASE);
		}

		// JUMP
		// Check if hasn't jump for more than 3 continuous secconds
		// if (Date.now() - GameManipulator.lastOutputSetTime < 3000) {
		//   robot.keyToggle('up', PRESS);
		//   robot.keyToggle('down', RELEASE);
		// } else {
		//   robot.keyToggle('up', RELEASE);
		//   robot.keyToggle('down', RELEASE);
		// }



		GameManipulator.lastOutputSet = GameManipulator.gameOutputString;

	}


	//
	// Simply maps an real number to string actions
	//
	GameManipulator.getDiscreteState = function(value) {
		if (value < 0.45) {
			return 'DOWN'
		} else if (value > 0.55) {
			return 'JUMP';
		}

		return 'NORM';
	}


	// Click on the Starting point
	// to make sure game is focused
	GameManipulator.focusGame = function() {

	}

	var bestGenomesSave = [];
	GameManipulator.saveBestGenome = function(dontlog) {
		var bestGenomesSave = [];
		for (var k in Learn.genomes) {
			bestGenomesSave.push(Learn.genomes[k].toJSON());
		}
		bestGenomesSave = JSON.stringify(bestGenomesSave);
		if (!dontlog)
			console.log(bestGenomesSave);
	}

	GameManipulator.loadBestGenomes = function(genomes) {
		Learn.loadGenomes(genomes, true);
		Learn.executeGeneration();
	}

	GameManipulator.startProgram();

})();