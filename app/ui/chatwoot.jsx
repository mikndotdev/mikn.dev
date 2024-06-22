import React from "react";

class ChatwootWidget extends React.Component {
    componentDidMount() {
        // Add Chatwoot Settings
        window.chatwootSettings = {
            hideMessageBubble: false,
            position: "right", // This can be left or right
            locale: "en", // Language to be set
            type: "standard", // [standard, expanded_bubble]
        };

        // Paste the script from inbox settings except the <script> tag
        ((d, t) => {
            var BASE_URL = "https://support.mikn.dev";
            var g = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
            g.src = BASE_URL + "/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g, s);
            g.onload = () => {
                window.chatwootSDK.run({
                    websiteToken: "RNSVQNL3TJRYB5V5HaCSYWvS",
                    baseUrl: BASE_URL,
                });
            };
        })(document, "script");
    }

    render() {
        return null;
    }
}

export default ChatwootWidget;
