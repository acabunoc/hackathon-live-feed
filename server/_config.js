var config = {};

// github keys
config.githubClientID = process.env.githubClientID || 'GET_YOUR_OWN';
config.githubClientSecret = process.env.githubClientSecret || 'GET_YOUR_OWN';
config.githubCallbackURL = process.env.githubCallbackURL || "http://localhost:3000/auth/github/callback";

// twitter keys
config.twitterConsumerKey = process.env.twitterConsumerKey || 'GET_YOUR_OWN';
config.twitterConsumerSecret = process.env.twitterConsumerSecret || 'GET_YOUR_OWN';
config.twitterAccessTokenKey = process.env.twitterAccessTokenKey || 'GET_YOUR_OWN';
config.twitterAccessTokenSecret = process.env.twitterAccessTokenSecret || 'GET_YOUR_OWN';

config.githubUsername = process.env.githubUsername || 'GITHUB_USERNAME';
config.githubPassword = process.env.githubPassword || 'GITHUB_PASSWORD';
config.githubUsernameA = process.env.githubUsernameA || 'GITHUB_USERNAME';
config.githubPasswordA = process.env.githubPasswordA || 'GITHUB_PASSWORD';
config.githubUsernameB = process.env.githubUsernameB || 'GITHUB_USERNAME';
config.githubPasswordB = process.env.githubPasswordB || 'GITHUB_PASSWORD';
// secret key (update in production!!!)
config.secretKey = process.env.secretKey || "\x1d\x0fB\x8d'\xaa\xaf\x04\xca\xfe\n\xb8Vg\x95X\x9b\xd6\x18\xd60T`\xc6";

// mongo uri
config.mongoURI = {
  development: "mongodb://localhost/hackathon",
  test: "mongodb://localhost/hackathon-test",
  stage: process.env.MONGOLAB_URI
};

// hashtags for twitter stream
config.hashtags = '#mozsprint';

// owner/repos for commit stream
config.github = [
  { owner: 'mozilla-neutrino', repo: 'neutrino-dev' },
  { owner: 'opensnp', repo: 'snpr' },
  { owner: 'OpenHumans', repo: 'open-humans' },
  { owner: 'OpenHumans', repo: 'ohjh-example-notebooks' },
  { owner: 'gedankenstuecke', repo: 'twitter-analyser' },
  { owner: 'gedankenstuecke', repo: 'ftdna-upload' },
  { owner: 'autonome', repo: 'web-and-messaging' },
  { owner: 'project-jste', repo: 'framework' },
  { owner: 'felixhenninger', repo: 'lab.js' },
  { owner: 'alexmorley', repo: 'CodeOfConduct.Builder' },
  { owner: 'jibe-b', repo: 'HACKccessibility-expose-the-documentation' },
  { owner: 'GuteMonik', repo: 'Activismo_lenguas_EN' },
  { owner: 'vyaspranjal33', repo: 'privacy-brigade' },
  { owner: 'lwjohnst86', repo: 'prodigenr' },
  { owner: 'endangereddataweek', repo: 'resources' },
  { owner: 'bioSyntax', repo: 'bioSyntax' },
  { owner: 'wikipathways', repo: 'wikipathways.org' },
  { owner: 'processing', repo: 'p5.js' },
  { owner: 'BanjoFox', repo: 'aardwolf' },
  { owner: 'AuthorCarpentry', repo: 'planning' },
  { owner: 'AuthorCarpentry', repo: 'dois-citation-data' },
  { owner: 'AuthorCarpentry', repo: 'authorcarpentry.github.io' },
  { owner: 'AuthorCarpentry', repo: 'reproducible-reports-with-R-Markdown' },
  { owner: 'AuthorCarpentry', repo: 'orcid-profile' },
  { owner: 'AuthorCarpentry', repo: 'markdown-github-webpages' },
  { owner: 'AuthorCarpentry', repo: 'orcid-and-impact' },
  { owner: 'AuthorCarpentry', repo: 'markdown-pandoc' },
  { owner: 'aletheia-foundation', repo: 'aletheia-admin' },
  { owner: 'aletheia-foundation', repo: 'aletheia-app' },
  { owner: 'aletheia-foundation', repo: 'aletheia-events-and-outreach' },
  { owner: 'k-monitor', repo: 'parldata' },
  { owner: 'socialmind', repo: 'wordpress-plugin-observatory' },
  { owner: 'agritrans', repo: 'agritrans.github.io' },
  { owner: 'Ennovar', repo: 'gPanel' },
  { owner: 'opendigitalsafety', repo: 'Digital-Safety-for-Open-Researchers' },
  { owner: 'InnovaPolitica', repo: 'Pawah-tech-for-human-rights' },
  { owner: 'BIONF', repo: 'PhyloProfile' },
  { owner: 'phageParser', repo: 'phageParser' },
  { owner: 'goscommons', repo: 'goscommons.github.io' },
  { owner: 'goscommons', repo: 'Grapple' },
  { owner: 'goscommons', repo: 'microwave' },
  { owner: 'FOSS-World', repo: 'Open-Web-for-Social-Good' },
  { owner: 'EducationalVideoCenter', repo: 'WAC' },
  { owner: 'molliem', repo: 'gender-bias' },
  { owner: 'karansapolia', repo: 'India.data' },
  { owner: 'nam-301', repo: 'culturabinaria' },
  { owner: 'JoPauls', repo: 'OpenHeart-Project' },
  { owner: 'publiccodenet', repo: 'about' },
  { owner: 'publiccodenet', repo: 'publiccode.yml' },
  { owner: 'publiccodenet', repo: 'publiccode.yml-parser-go' },
  { owner: 'publiccodenet', repo: 'http' },
  { owner: 'publiccodenet', repo: 'projects' },
  { owner: 'publiccodenet', repo: 'jekyll-theme' },
  { owner: 'publiccodenet', repo: 'smart-cities-public-code' },
  { owner: 'FahimaZulfath', repo: 'Spread-Open-Healthy-Web' },
  { owner: 'SOHW', repo: 'Blogs' },
  { owner: 'SOHW', repo: 'sohw.github.io' },
  { owner: 'ricklupton', repo: 'floweaver' },
  { owner: 'data-lessons', repo: 'librarycarpentry' },
  { owner: 'LibraryCarpentry', repo: 'lc-git' },
  { owner: 'LibraryCarpentry', repo: 'lc-shel' },
  { owner: 'LibraryCarpentry', repo: 'lc-open-refine' },
  { owner: 'LibraryCarpentry', repo: 'lc-python-intro' },
  { owner: 'LibraryCarpentry', repo: 'lc-spreadsheets' },
  { owner: 'richyvk', repo: 'library-python-intro' },
  { owner: 'LibraryCarpentry', repo: 'lc-sql' },
  { owner: 'LibraryCarpentry', repo: 'lc-data-intro' },
  { owner: 'LibraryCarpentry', repo: 'lc-webscraping' },
  { owner: 'meagdoh', repo: 'data-and-friends' },
  { owner: 'rhearakshit', repo: 'open-apparel-registry' },
  { owner: 'OpenReflectometry', repo: 'scikit-reflectometry' },
  { owner: 'mozilla', repo: 'global-sprint' },
  { owner: 'CodingBash', repo: 'FlyCAGE' },
  { owner: 'BetaNYC', repo: 'peoples-roadmap-2018' },
  { owner: 'vektorious', repo: 'mbac' },
  { owner: 'deimidis', repo: 'privacy-journalists' },
  { owner: 'zerasul', repo: 'blask' },
  { owner: 'mrjohnc', repo: 'Map-of-the-open-movement' },
  { owner: 'duracloud', repo: 'duracloud' },
  { owner: 'coslos', repo: 'LiveWhiteboard-App' },
  { owner: 'coslos', repo: 'LiveWhiteboard-Website' },
  { owner: 'walecain', repo: 'nonprofit-index' },
  { owner: 'rust-community', repo: 'content-o-tron' },
  { owner: 'solangetuyisenge', repo: 'MakeRwandaWebLiterate' },
  { owner: 'Kritzolina', repo: 'Voices-under-Threat' },
  { owner: 'manasvil', repo: 'RapidPrototyping-Curriculum' },
  { owner: 'virbrussa', repo: 'M4Labs' },
  { owner: 'nucleus-network', repo: 'missioninfo' },
  { owner: 'fourthletter', repo: 'SentencingByNumber' },
  { owner: 'jeffreykeefer', repo: 'Parkology' },
  { owner: 'graciellehigino', repo: 'IGNITE' },
  { owner: 'ktrang1', repo: 'coding-the-mind' },
  { owner: 'ConnectProject', repo: '100DayStarterKit' },
  { owner: 'fionacu', repo: 'kickstart-the-city' },
  { owner: 'Openmedianetwork', repo: 'Search' },
  { owner: 'Openmedianetwork', repo: 'visionOntv' },
  { owner: 'Openmedianetwork', repo: 'Altmedia-history' },
  { owner: 'Openmedianetwork', repo: 'openweb' },
  { owner: 'Openmedianetwork', repo: 'Witchescauldron' },
  { owner: 'Openmedianetwork', repo: 'OMN' },
  { owner: 'DigitalGrassroots', repo: 'Digital-Grassroots' },
  { owner: 'iceLearn', repo: 'Open-Online-Study-Group-OOSG' },
  { owner: 'JustinyAhin', repo: 'open-african-repository' },
  { owner: 'VivaLasVenus', repo: 'VivaLasVenus' },
  { owner: 'OSCEdays', repo: 'hooping_champs' },
  { owner: 'OSCEdays', repo: 'MyOwnNotes' },
  { owner: 'OSCEdays', repo: 'datacrowder' },
  { owner: 'OSCEdays', repo: 'olca-app' },
  { owner: 'OSCEdays', repo: 'oscedays-website' },
  { owner: 'OSCEdays', repo: 'hackthewatercrisis' },
  { owner: 'hunter-x', repo: 'night-vision-data' },
  { owner: 'cesswairimu', repo: 'GirlsGetGeeky' },
  { owner: 'janetchapman', repo: 'contribute-Crowd2Map' },
  { owner: 'dama-s', repo: 'techforgood' },
  { owner: 'Newbook-Digital-Texts', repo: 'tech-support' },
  { owner: 'eba-diary', repo: 'intern-training-documents' },
  { owner: 'Newbook-Digital-Texts', repo: 'Newbook-Software' },
  { owner: 'Aixa202', repo: 'WeTalk' },
  { owner: 'ranjithrajv', repo: 'open-advocacy' },
  { owner: 'ME-ICA', repo: 'tedana' },
  { owner: 'CommonsPlatform', repo: 'Admin' },
  { owner: 'LoupDesign', repo: 'StoryEngine' },
  { owner: 'UMN-EGGL', repo: 'HorseGeneAnnotation' },
  { owner: 'Beyondactivismo', repo: 'Beyondactivismo' },
  { owner: 'mayawagon', repo: 'bklynCONNECT' },
  { owner: 'bklynlibrary', repo: 'bklynConnect-curriculum' },
  { owner: 'rowdymehul', repo: 'Learn-By-Teaching-Rust' },
  { owner: 'rlyehlab', repo: 'eter' },
  { owner: 'AndreaPocketsChange', repo: 'PocketsChange-MoneyTalks' },
  { owner: 'cynthinee', repo: 'openstudentleaders' },
  { owner: 'PhinchApp', repo: 'Phinch' },
  { owner: 'omudongo', repo: '-Rethink-Web-Literacy' },
  { owner: 'rainsworth', repo: 'ROSA' },
  { owner: 'derekhoward', repo: 'HBAsets' },
  { owner: 'chrisbresky', repo: 'Aquarius-Project' },
  { owner: 'OpenStories', repo: 'docs' },
  { owner: 'OpenStories', repo: 'website' },
  { owner: 'baricks', repo: 'opentodiscussion' },
  { owner: 'drdvo', repo: 'OWLTEH' },
  { owner: 'cicakhq', repo: 'potato' },
  { owner: 'MsKiden', repo: 'africa-internet-measurements' },
  { owner: 'subhash-Dulla', repo: 'Chatbots' },
  { owner: 'SamanthaHindle', repo: 'preprint_JournalClub' },
  { owner: 'opendatakit', repo: 'collect' },
  { owner: 'opendatakit', repo: 'briefcase' },
  { owner: 'opendatakit', repo: 'docs' },
  { owner: 'opendatakit', repo: 'website' },
  { owner: 'Dhevendhirancs', repo: 'AndroidProject' },
  { owner: 'trustodia', repo: 'HPC416S' },
  { owner: 'FogosPT', repo: 'flutterfogos' },
  { owner: 'FogosPT', repo: 'fogospt' },
  { owner: 'zbouslama', repo: 'open_maps' },
  { owner: 'OpenScienceMOOC', repo: 'M3_RR_data_analysis' },
  { owner: 'OpenScienceMOOC', repo: 'Main' },
  { owner: 'OpenScienceMOOC', repo: 'Module-1-Open-Principles' },
  { owner: 'OpenScienceMOOC', repo: 'Module-10-Open-Advocacy' },
  { owner: 'OpenScienceMOOC', repo: 'Module-2-Open-Collaboration' },
  { owner: 'OpenScienceMOOC', repo: 'Module-3-Reproducible-Research-and-Data-Analysis' },
  { owner: 'OpenScienceMOOC', repo: 'Module-4-Open-Research-Data' },
  { owner: 'OpenScienceMOOC', repo: 'Module-5-Open-Research-Software-and-Open-Source' },
  { owner: 'OpenScienceMOOC', repo: 'Module-6-Open-Access-to-Research-Papers' },
  { owner: 'OpenScienceMOOC', repo: 'Module-7-Open-Evaluation' },
  { owner: 'OpenScienceMOOC', repo: 'Module-8-Public-Engagement-with-Science' },
  { owner: 'OpenScienceMOOC', repo: 'Module-9-Open-Educational-Resources' },
  { owner: 'OpenScienceMOOC', repo: 'resources' },
  { owner: 'OpenScienceMOOC', repo: 'sit' },
  { owner: 'jcolomb', repo: 'reagentsio_website' },
  { owner: 'mozilla', repo: 'voice-web' },
  { owner: 'quirksahern', repo: 'DataLiteracyPlayground' },
  { owner: 'yochannah', repo: 'code-is-science' },
  { owner: 'willnwhite', repo: 'Y' },
  { owner: 'AgileVentures', repo: 'Paironauts' },
  { owner: 'samanthaburton', repo: 'whose_data' },
  { owner: 'libresh', repo: 'catalogue' },
  { owner: 'transpose-publishing', repo: 'policies-database' },
  { owner: 'SvdKraak', repo: 'Lifelong-learning-and-digital-literacy' },
  { owner: 'thomaskuntzz', repo: 'wikicours' },
  { owner: 'tpportugal', repo: 'ficheiros_gtfs_sem_hospedeiro' },
  { owner: 'tpportugal', repo: 'tpp' },
  { owner: 'tpportugal', repo: 'tpp_admin' },
  { owner: 'tpportugal', repo: 'tpp_app' },
  { owner: 'tpportugal', repo: 'tpp_banco_de_dados' },
  { owner: 'tpportugal', repo: 'tpp_expedidor' },
  { owner: 'tpportugal', repo: 'tpp_explorador' },
  { owner: 'tpportugal', repo: 'tpp_gtfs_lib' },
  { owner: 'tpportugal', repo: 'tpp_registo_de_feeds' },
  { owner: 'tpportugal', repo: 'tpp_routing_demo' },
  { owner: 'tpportugal', repo: 'tpp_upload' },
  { owner: 'tpportugal', repo: 'tpp_valhalla' },
  { owner: 'tpportugal', repo: 'tpp_valhalla_api_docs' },
  { owner: 'tpportugal', repo: 'tpp_website' },
  { owner: 'tpportugal', repo: 'webserver' },
  { owner: 'tpportugal', repo: 'Nominatim' },
  { owner: 'prateekiiest', repo: 'Code-Sleep-Python' },
  { owner: 'TitanNanoDE', repo: 'ApplicationFrame' },
  { owner: 'amitsin6h', repo: 'mozcodepaste' },
  { owner: 'drashti4', repo: 'localisationofschool' },
  { owner: 'JoBCB', repo: '-rehearsal-series-at-Aarhus-University' },
  { owner: 'JoBCB', repo: 'Choreo-Graphic-Coding_MediaLab' },
  { owner: 'JoBCB', repo: 'choreo-graphic_code-assemblage-1-' },
  { owner: 'JoBCB', repo: 'circulo-meio' },
  { owner: 'JoBCB', repo: 'Integrated_Digital_Media_NYU' },
  { owner: 'JoBCB', repo: 'jobcb.github.io' },
  { owner: 'JoBCB', repo: 'Kinect-Shadow-Dance' },
  { owner: 'JoBCB', repo: 'TheBody_RehearsalSeries' },
  { owner: 'JoBCB', repo: 'Ways_Of_Moving_Butoh' },
  { owner: 'JoBCB', repo: 'Ways_Of_Moving_Tango' },
  { owner: 'JoBCB', repo: 'workshop_choreo_Wdka' },
  { owner: 'OlaCzetwertynska', repo: 'Open-Education-Cooperative' },
  { owner: 'Jayapreethi', repo: 'Pro_Descriptor' },
  { owner: 'OpenScienceRoadmap', repo: 'mozilla-sprint-2018' },
  { owner: 'OpenScienceRoadmap', repo: 'OpenScienceRoadmap.github.io' },
  { owner: 'tommaullin', repo: 'nidmresults-fslhtml' },
  { owner: 'tommaullin', repo: 'SwE-toolbox' },
  { owner: 'rusthacks', repo: 'rusthacks' },
  { owner: 'OpenNewsLabs', repo: 'field-guide-security-training-newsroom' },
  { owner: 'mozilla', repo: 'web-lit-core' },
  { owner: 'tracking-exposed', repo: 'facebook' },
  { owner: 'Derek-Jones', repo: 'pdf-2-csv' },
  { owner: 'poshaughnessy', repo: 'webxr-for-learning' },
  { owner: 'vuelaendron', repo: 'vuela' },
  { owner: 'web-ext-labs', repo: 'create-web-ext' },
  { owner: 'web-ext-labs', repo: 'ui-tool' },
  { owner: 'pump-io', repo: 'pump.io' },
  { owner: 'harlanji', repo: 'ispooge' },
  { owner: 'wykeepace', repo: 'Artificial-Intelligence-on-Your-Screen' },
  { owner: 'webmixedreality', repo: 'exokit' },
  { owner: 'JacobEvelyn', repo: 'friends' },
  { owner: 'ortuman', repo: 'jackal' },
  { owner: 'Bubblbu', repo: 'zotero-insights' },
  { owner: 'bjw49', repo: 'citation-network-explorer' },
  { owner: 'Samwalton9', repo: 'WikiCiteVis' },
  { owner: 'dat-land', repo: 'project-trackbook' },
  { owner: 'minrk', repo: 'jupyter-dar' },
  { owner: 'swahili-voice', repo: 'Swahili-voice-of-Msamiati' },
  { owner: 'octopus-hypothesis', repo: 'octopus-website' },
  { owner: 'octopus-hypothesis', repo: 'octopus' },
  { owner: 'octopus-hypothesis', repo: 'Octopus-docs' },
  { owner: 'akeshavan', repo: 'brainspell-neo-frontend' },
  { owner: 'Vinnl', repo: 'jic-jac' },
  { owner: 'oscedays', repo: 'hackthewatercrisis' },
  { owner: 'ivotron', repo: 'open-comp-rsc-poppper' },
  { owner: 'nherriot', repo: 'WaterMonitor_IoT_PWA' },
  { owner: 'OpenNeuroLab', repo: 'BrainBox' },
  { owner: 'BrianObilo', repo: 'Internet-Yetu' }
];

module.exports = config;