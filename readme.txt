

Preparation du socle app mobile :

- Creation de l'app init
- Preparation package.json
- instalation de react redux
- creation de store
- implementation de middlleWare (API + Thunk)
- implementation de navigation (react native navigation)
- i18n
- definition de socle features ( {actions , reducer , types , connect} par feature ;  dump et smart en Smart )
- combineReducers
- App.js



features

   ui
     screens
   featureX
     screens
	  
	  
global
  components
     buttons
	 input
	 cards
	 header
	 footer
	 Modal
	 Loader
	 
	 ErrorMessages + SuccessMessages
	 Pagination
	 navigation
		PublicStack
		ConnectedStack (drawerLeft || Tabs)
	
	 ...
  
  utils
    vars (window device + fonts {assets})
	  
  images urls --> assets
 
  - Creation de l'app init
  
 react-native init socle --version x.xx.x
 renommer le package manuellement ma.takkdom.socle (MainActiviy , MainApplication, BUCK , build.gradle)
 install redux , react-redux , react-native-i18n, react-navigation,react-native-gesture-handler, native-base
	  
	  
	  
	     
	     
