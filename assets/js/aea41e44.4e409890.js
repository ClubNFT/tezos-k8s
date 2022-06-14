"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[539],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6944:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],s={},l="Nodes",c={unversionedId:"Tezos-Nodes",id:"Tezos-Nodes",title:"Nodes",description:"Use nodes to configure the Tezos nodes running in your chart.",source:"@site/01-Tezos-Nodes.md",sourceDirName:".",slug:"/Tezos-Nodes",permalink:"/Tezos-Nodes",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tezosK8sSidebar",previous:{title:"Accounts",permalink:"/Tezos-Accounts"},next:{title:"Signers",permalink:"/Tezos-Signers"}},u={},d=[],p={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"nodes")," to configure the Tezos nodes running in your chart."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nodes")," is a dictionary where each key/value pair defines a statefulset and a\nnumber of instances thereof. The name (key) defines the name of the\nstatefulset and will be the base of the pod names. The instances are defined\nas a list because their names are simply -N appended to the statefulsetname.\nSaid names are typically kebab case."),(0,r.kt)("p",null,"Params at the statefulset level:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"config": The "config" property should mimic the structure of a node\'s\nconfig.json. Run ',(0,r.kt)("inlineCode",{parentName:"li"},"tezos-node config --help")," for more info.\nIf present at the statefulset level, it overrides it in\nnode_globals."),(0,r.kt)("li",{parentName:"ul"},'"env": a dictionary of containers mapped to a dictionary of env\nvars.  The container name "all" will apply the env vars to\nall containers.  The most specific wins.  Find the names of\nthe containers by examining an installed environment, or by\nlooking at charts/tezos/templates/nodes.yaml.  Please note\nthat we truncate the protocol from the container name for\nbakers and accusers, so "baker-011-pthangz2" is configured\nusing just "baker".'),(0,r.kt)("li",{parentName:"ul"},'"storage_size": the size of the PV'),(0,r.kt)("li",{parentName:"ul"},'"images": Optional specification of images to use for the tezos node and\nbaker. Options are "octez" with a tezos/tezos image or\n"tezedge" with a tezedge/tezedge image. If no images are provided,\nthe containers will default to the images defined in the "images"\nfield up above.'),(0,r.kt)("li",{parentName:"ul"},'"runs": A list of containers to run. A tezos node implementation is required.\nOptions being "octez_node" or "tezedge_node". Other optional\ncontainers are "accuser", "baker", "logger", and "metrics".'),(0,r.kt)("li",{parentName:"ul"},'"local_storage": use local storage instead of a volume. The storage will be\nwiped when the node restarts for any reason. Useful when\nfaster IO is desired. Defaults to false.'),(0,r.kt)("li",{parentName:"ul"},'"labels": ',(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"),"\nNOTE: the labels appType, node_class, and baking_node are set\nautomatically for you."),(0,r.kt)("li",{parentName:"ul"},"\"node_selector\": Specify a kubernetes node selector in 'key: value' format\nfor your tezos nodes."),(0,r.kt)("li",{parentName:"ul"},'"readiness_probe": Attach a probe to the node. The probe checks whether\nthe most recent block is recent enough. If not, the\nservices will be unreachable. Defaults to True.\nTrue is good for RPC nodes, private nodes, and\nself-contained private chains.\nRecommended to set to False when bootstrapping a new\nchain with external bakers, such as a new test chain.\nOtherwise, the chain may become unreachable externally\nwhile waiting for other nodes to come online.'),(0,r.kt)("li",{parentName:"ul"},'"instances": a list of nodes to fire up, each is a dictionary defining:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"bake_using_account": Account name that should be used for baking.'),(0,r.kt)("li",{parentName:"ul"},'"bake_using_accounts": List of account names that should be used for baking.'),(0,r.kt)("li",{parentName:"ul"},'"config": Same as the outer statefulset level "config". It overrides the\nstatefulset level.'),(0,r.kt)("li",{parentName:"ul"},'"is_bootstrap_node": Is this node a bootstrap peer.'),(0,r.kt)("li",{parentName:"ul"},'"identity": An optional map containing a pre-generated Tezos node\nidentity. This is useful for local storage nodes which would\nneed to generate an identity at every boot. The identity file\nwill be created at /var/tezos/node/data/identity.json.\nRequired fields are "peer_id", "public_key", "secret_key",\nand "proof_of_work_timestamp".')))),(0,r.kt)("p",null,'Defaults are filled in for most of the above values.  You can also provide\nglobal defaults for all nodes via a node_globals: section which is also\na dictionary.  Currently, two keys are defined: "config" and "env".  These\noperate in the same way as the section in "nodes" going by the same name.'),(0,r.kt)("p",null,"Example config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'node_globals:\n  config:\n    shell:\n      history_mode: full\n  env:\n    baker:\n      TEZOS_LOG: "* -> debug"\nnodes:\n  rolling-baking-node:\n    config:\n      shell:\n        history_mode: rolling\n    env:\n      all:\n        TEZOS_CLIENT_UNSAFE_DISABLE_DISCLAIMER: "Y"\n      snapshot-downloader:\n        HTTP_PROXY: http://my-proxy.my-company.com:3128/\n    labels:\n      # Example labels you might use to specify certain attributes of your nodes.\n      peer_node: "true" # Forward P2P traffic to this node types instances\n      rpc_node: "true" # Forward RPC traffic to this node types instances\n    node_selector:\n      nodeSelectorKey: nodeSelectorValue\n    storage_size: 15Gi\n    images: # (optional field)\n      octez: tezos/tezos:v...\n    # tezedge: tezedge/tezedg:v...\n    local_storage: false\n    runs:\n      - octez_node\n    # - tezedge_node\n      - baker\n    instances:\n      - bake_using_account: baker0\n        is_bootstrap_node: true\n        # Note the following config section overrides the above one even\n        # if we make them the same in this example.\n        config:\n          shell:\n            history_mode: rolling\n        identity:\n           peer_id: id...\n           public_key: ...\n           secret_key: ...\n           proof_of_work_stamp: ...\n  rolling-node:\n    labels:\n      # Example labels you might use to specify certain attributes of your nodes.\n      peer_node: "true"\n      rpc_node: "true"\n    images: # (optional field)\n      tezedge: tezedge/tezedge:v...\n    runs: ["tezedge_node"]\n    instances:\n      - {}\n      - {}\n')),(0,r.kt)("p",null,"The default configuration is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node_globals:\n  env: {}\nnodes:\n  rolling-node:\n    storage_size: 100Gi\n    runs:\n      - octez_node\n    instances:\n      - is_bootstrap_node: false\n        config:\n          shell:\n            history_mode: rolling\n")))}f.isMDXComponent=!0}}]);