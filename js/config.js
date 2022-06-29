var respecConfig =
{
  specStatus: "WV",
  specType: "HR",
  pubDomain: "dk",
  subtitle: "Een werkmethode voor het doen van onderzoek door derden naar het gebruik van algoritmen door een overheidsorganisatie.",
  shortName: "De LegitiMaat",
  publishDate: "2022-06-24",
  publishVersion: "0.0.1",
  previousPublishVersion: "",
  previousPublishDate: "",
  //  previousMaturity: "WV",
  editors: [{
    name: "Mildo Staden",
    mailto: "Mildo.Staden@minbzk.nl",
    company: "BZK",
    companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
  }, {
    name: "Marlies van Eck",
    mailto: "marlies@hooghiemstra-en-partners.nl",
    company: "Hooghiemstra & Partners",
    companyURL: "https://hooghiemstra-en-partners.nl",
  }],
  authors: [{
    name: "Marlies van Eck",
    url: "https://hooghiemstra-en-partners.nl",
  }, {
    name: "Mariette Lokin",
    url: "https://www.rijksoverheid.nl/ministeries/ministerie-van-financien",
  }, {
    name: "Maike Klip",
    url: "https://www.nationaleombudsman.nl/",
  }, {
    name: "Giulia Bössenecker",
    url: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
  }, {
    name: "Carlijn Oldeman",
    url: "https://hooghiemstra-en-partners.nl",
  }, {
    name: "Robert van Doesburg",
    url: "https://www.tno.nl",
  }, {
    name: "Abram Klop",
    url: "https://www.ubrijk.nl/service/i-interim-rijk",
  }, {
    name: "Steven Gort",
    url: "https://www.ictu.nl",
  }],
  github: "https://github.com/sgort/LegitiMaat",

  // Controls if linked "§" section markers are added to a document
  addSectionLinks: true,

  // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: true,

  // nl_organisationName is used for some company specific values in the header (and Sotd)
  // currently supported: Logius and Geonovum (default)  
  nl_organisationName: "MinBZK",

  // this url points to the folder where organsation specific css files are stored
  // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",

  // prefix for the names of company specific css, svg and ico prefixes
  // defaults to "GN-"  
  nl_organisationPrefix: "LS-",

  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,

  // nl_organisationPublishURL points to organisation specifica publication page, used in header
  // defaults to  https://docs.geostandaarden.nl/"
  nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",

  // nl_logo refers to company logo
  // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
  nl_logo: {
    src: "https://open-regels.nl/assets/images/delegitimaat.png",
    alt: "LegitiMaat-logo",
    id: "MinBZK",
    height: 150,
    width: 150,
    url: "https://open-regels.nl",
  },
  // enable automatic external reference linking
  xref: true,

  localBiblio: {
    "SemVer": {
      href: "https://semver.org",
      title: "Semantic Versioning 2.0.0",
      authors: ["T. Preston-Werner"],
      date: "June 2013"
    }
  },
};
