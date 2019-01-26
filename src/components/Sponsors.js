import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby"

const sponsors = {
  "kargoma": {
    href: "http://www.mannen.cz",
    title: "N. MANNEN, s.r.o.",
    width: 222,
    height: 49
  },
  "vyziva-pro-fitness": {
    href: "http://www.vyziva-pro-fitness.cz",
    title: "VÝŽIVA PRO FITNESS",
    width: 224,
    height: 49
  },
  "agfoods": {
    href: "http://www.agfoods.eu",
    title: "AG FOODS Group, a.s.",
    width: 216,
    height: 51
  },
  "alfaagro": {
    href: "http://www.alfaagro.cz",
    title: "Alfa Agro Brno, s.r.o.",
    width: 195,
    height: 56
  },
  "bibusmetals": {
    href: "http://www.bibusmetals.cz",
    title: "BIBUS METALS s.r.o.",
    width: 263,
    height: 42
  },
  "fabory": {
    href: "http://www.fabory.cz",
    title: "Fabory, s.r.o.",
    width: 252,
    height: 44
  },
  "pbsvb": {
    href: "http://www.pbsvb.cz",
    title: "První brněnská strojírna Velká Bíteš, a.s.",
    width: 249,
    height: 44
  },
  "promatservis": {
    href: "http://www.promatservis.cz",
    title: "Promat servis, s.r.o.",
    width: 197,
    height: 56
  },
  "vbites": {
    href: "http://www.vbites.cz",
    title: "Velká Bíteš",
    width: 151,
    height: 73
  },
  "primapol": {
    href: "http://www.primapol.cz",
    title: "Primapol-Metal-Spot, s.r.o.",
    width: 235,
    height: 47
  },
  "ickk": {
    href:
      "http://www.vbites.cz/zivot-ve-meste/2017-03-28-07-19-31/informacni-centrum-a-klub-kultury",
    title: "Informační centrum - Klub kultury - Velká Bíteš",
    width: 172,
    height: 64
  },
  "jerabkovapekarna": {
    href: "http://www.jerabkovapekarna.cz",
    title: "Jeřábkova pekárna, s.r.o.",
    width: 125,
    height: 88
  },
  "mtmetal": {
    href: "http://www.mtmetal.com",
    title: "MT-Metal Trade, s.r.o.",
    width: 105,
    height: 104
  },
  "kovyaslitiny": {
    href: "http://www.kovyaslitiny.cz",
    title: "Kovy a slitiny, s.r.o.",
    width: 121,
    height: 91
  },
  "itwcz": {
    href: "http://www.itwcz.com",
    title: "ITW PRONOVIA, s.r.o",
    width: 148,
    height: 74
  },
  "zamecnictvinemec": {
    href: "http://www.zamecnictvinemec.cz",
    title: "Zámečnictví Němec, s.r.o.",
    width: 212,
    height: 52
  },
  "dynamicmetals": {
    href: "http://www.dynamicmetalsltd.cz",
    title: "Dynamic Metals Ltd",
    width: 289,
    height: 38
  },
  "slamamilan": {
    href: "http://www.slamamilan.cz",
    title: "UZENÁŘSTVÍ A LAHŮDKY SLÁMA s.r.o.",
    width: 124,
    height: 89
  }
};

const Sponsor = (item) => (
  <a
    href={sponsors[item.name].href}
    title={"Sponzor závodu: " + sponsors[item.name].title}
    target="_blank"
    rel="noopener noreferrer"
  >
    <picture>
      <source srcSet={item.childImageSharp.fixed.srcWebp} type="image/webp"/>
      <img
        src={item.childImageSharp.fixed.src}
        alt={"Logo sponzora: " + sponsors[item.name].title}
        width={item.childImageSharp.fixed.width}
        height={item.childImageSharp.fixed.height}
      />
    </picture>
  </a>
);

const query = graphql`query SponsorsQuery {
  kargoma: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "kargoma"}) {
    name
    childImageSharp {
      fixed(width: 222, height: 49) {
        src
        srcWebp
        width
        height
      }
    }
  }
  vyzivaProFitness: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "vyziva-pro-fitness"}) {
    name
    childImageSharp {
      fixed(width: 224, height: 49) {
        src
        srcWebp
        width
        height
      }
    }
  }
  agfoods: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "agfoods"}) {
    name
    childImageSharp {
      fixed(width: 216, height: 51) {
        src
        srcWebp
        width
        height
      }
    }
  }
  alfaagro: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "alfaagro"}) {
    name
    childImageSharp {
      fixed(width: 195, height: 56) {
        src
        srcWebp
        width
        height
      }
    }
  }
  bibusmetals: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "bibusmetals"}) {
    name
    childImageSharp {
      fixed(width: 263, height: 42) {
        src
        srcWebp
        width
        height
      }
    }
  }
  fabory: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "fabory"}) {
    name
    childImageSharp {
      fixed(width: 252, height: 44) {
        src
        srcWebp
        width
        height
      }
    }
  }
  pbsvb: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "pbsvb"}) {
    name
    childImageSharp {
      fixed(width: 249, height: 44) {
        src
        srcWebp
        width
        height
      }
    }
  }
  promatservis: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "promatservis"}) {
    name
    childImageSharp {
      fixed(width: 197, height: 56) {
        src
        srcWebp
        width
        height
      }
    }
  }
  vbites: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "vbites"}) {
    name
    childImageSharp {
      fixed(width: 151, height: 73) {
        src
        srcWebp
        width
        height
      }
    }
  }
  primapol: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "primapol"}) {
    name
    childImageSharp {
      fixed(width: 235, height: 47) {
        src
        srcWebp
        width
        height
      }
    }
  }
  ickk: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "ickk"}) {
    name
    childImageSharp {
      fixed(width: 172, height: 64) {
        src
        srcWebp
        width
        height
      }
    }
  }
  jerabkovapekarna: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "jerabkovapekarna"}) {
    name
    childImageSharp {
      fixed(width: 125, height: 88) {
        src
        srcWebp
        width
        height
      }
    }
  }
  mtmetal: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "mtmetal"}) {
    name
    childImageSharp {
      fixed(width: 105, height: 104) {
        src
        srcWebp
        width
        height
      }
    }
  }
  kovyaslitiny: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "kovyaslitiny"}) {
    name
    childImageSharp {
      fixed(width: 121, height: 91) {
        src
        srcWebp
        width
        height
      }
    }
  }
  itwcz: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "itwcz"}) {
    name
    childImageSharp {
      fixed(width: 148, height: 74) {
        src
        srcWebp
        width
        height
      }
    }
  }
  zamecnictvinemec: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "zamecnictvinemec"}) {
    name
    childImageSharp {
      fixed(width: 212, height: 52) {
        src
        srcWebp
        width
        height
      }
    }
  }
  dynamicmetals: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "dynamicmetals"}) {
    name
    childImageSharp {
      fixed(width: 289, height: 38) {
        src
        srcWebp
        width
        height
      }
    }
  }
  slamamilan: file(sourceInstanceName: {eq: "sponsors"}, name: {eq: "slamamilan"}) {
    name
    childImageSharp {
      fixed(width: 124, height: 89) {
        src
        srcWebp
        width
        height
      }
    }
  }
}     
`;

const Sponsors = () => (
  <StaticQuery
    query={query}
    render={data => <div id="menu-sponsors" className="py-3">
      {Object.values(data).map(item => <Sponsor {...item} key={item.name} />)}
    </div>}
  />
);

Sponsors.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    edges: PropTypes.array
  }))
};

export default Sponsors;
