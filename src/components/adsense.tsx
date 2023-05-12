import * as React from "react";

class Adsense extends React.Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
      <ins className="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-6599086733747900"
      data-ad-slot="7220962165"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
      <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    `,
        }}
      />
    );
  }
}

export default Adsense;
