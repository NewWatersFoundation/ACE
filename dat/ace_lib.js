


var loadCallObj = {  // Fix.  Temporary hack.
	"dat" : {
		"ent" : {
			"als" : ["typ-ent","entity","aceObj"],
			"cor" : {
				"ace" : null,
				"nam" : "ACE Entity",
				"dsc" : "Fundamental object used to represent anything as an AceObj in ACE's Free-Association model.",
				"typ" : "typ",
				"val" : 0
			},
			"itm" : {},
			"typ" : {},
			"has" : {"asp":""},
			"lnk" : {"par":"","chd":"","rsc":"","cbr":"","cbn":"","pri":"","gol":"","deb":"","tag":"","ifl":"","fou":"","msg":""},  // Fix? Change default links?
			"sec" : {"read":"*","write":"*","block":null},
			"lds" : {"gui":["cor","itm","typ","has",{"lnk":["chd","pri","deb","tag","par","*"]}]},
			"sys" : {"topSubID":"a","usr":null}
		},
		"cmp" : {
			"als" : ["component"],
			"cor" : {
				"nam" : "Component",
				"dsc" : "Generalized abstraction used to symbolically represent any aspect or characteristic of an entity.",
				"typ" : "cmp"
			},
		},
		"seg" : {
			"als" : ["segment","aceSeg"],
			"cor" : {
				"nam" : "AceObj Segment",
				"dsc" : "The root-level object division used to segment the AceObj structure into functional component groupings. ('cor', 'lnk', 'sys', etc.)",
				"typ" : "cmp"
			},
		},
		"typ" : {
			"als" : ["aceTyp","type","aceType"],
			"cor" : {
				"nam" : "AceObj Type",
				"dsc" : "Fundamental identifier used to convey basic object structure for entities represented by aceIDs in ACE's Free-Association model. Each aceID is prepended with a three-digit code that translates into a broad object type to generalize its instantiated structure and system role.",
				"typ" : "cmp"
			},
		},
		"lnk" : {
			"als" : ["link"],
			"cor" : {
				"name" : "ACE Link",
				"description" : "Fundamental object used to link associated concepts between AceObj entities under ACE's Free-Association model.",
				"typ" : "typ",
				"value" : 0
			},
			"itm" : {
				"top" : null,
			},
			"typ" : {
				"cat_lnk" : null
			},
			"has" : {
				"top" : null,
				"refID" : null,
				"owner" : null,
				"itm-cat" : null,
				"itm-sub": null
			},
			"lnk" : {
				"to" : null,
				"instance-of" : null,
				"using" : null
			}
		},
		"cat" : {
			"als" : ["typ-cat","category"],
			"cor" : {
				"nam" : "Category",
				"dsc" : "Resolves to particular classification characteristics, for use in the 'typ' segment of an object.",
				"typ" : "typ"
			}
		},
		"cat_lnk" : {
			"als" : ["linkCat"],
			"cor" : {
				"nam" : "Link Category",
				"dsc" : "Identifies the characteristics of a lnk to handle specifics of its particular classification.",
				"typ" : "cat"
			}
		},
		"str" : {
			"als" : ["string"],
			"cor" : {
				"name" : "String",
				"description" : "Basic string, used as fundamental component for all text-represented items in the ACE system.",
				"typ" : "str"
			},
			"itm" : {
				"string" : null,
			},
			"sys" : {
				"length" : 0,
			},
			"has" : {
				"words" : null,
				"concepts" : null,
			},
			"lnk" : {
				
			}
		},
		"ace" : {
			"als" : ["aceID","aid","aID"],
			"cor" : {
				"nam" : "aceID",
				"dsc" : "Fundamental identifier used as a unique and universal identifier to represent each entity in ACE's Free-Association model.",
				"typ" : "ace"
			},
		},
		"nam" : {
			"als" : ["name"],
			"cor" : {
				"nam" : "Entity Name",
				"dsc" : "Basic identifier used to loosely associate a short descriptive concept with an entity.",
				"typ" : "nam"
			},
		},
		"dsc" : {
			"als" : ["description","desc","descript"],
			"cor" : {
				"nam" : "Description",
				"dsc" : "String used to more comprehensively describe an entity.",
				"typ" : "dsc"
			},
		},
		"val" : {
			"als" : ["value"],
			"cor" : {
				"nam" : "Entity Type",
				"dsc" : "Core category from which this AceObj can be instantiated.",
				"typ" : "typ"
			},
		},
		"htm" : {
			"als" : ["html"],
			"cor" : {
				"name" : "HTML Element",
				"description" : "AceObj representation of valid HTML elements, for use in structuring output.",
				"typ" : "str",
				"value" : 0
			},
			"itm" : {
				"id" : null,
				"class" : null,
				"data" : null,
			},
			"lnk" : {
				"instance" : null
			}
		},
		"gui" : {
			"als" : ["aceUI","aui","aUI"],
			"cor" : {
				"name" : "AceUI Widget",
				"description" : "A graphical widget used to auto-load specialized aceUI functionality.",
				"typ" : "gui",
				"value" : 0
			},
			"itm" : {
				"objName" : null
			},
			"has" : {
				"actions" : ["fnc-gui-clk", "fnc-gui-hov", "fnc-gui-drg", "fnc-gui-drp"]
			}
		},
		"lst" : {
			"als" : ["list"],
			"cor" : {
				"name" : "List",
				"description" : "Ordered array of AceObj entities.",
				"typ" : "lst",
				"value" : 0
			},
			"itm" : {
				"array" : [],
			},
			"lnk" : {
				"using" : null
			}
		},
		"cat" : {
			"als" : ["category"],
			"cor" : {
				"name" : "AceObj Component Category",
				"description" : "Root-level characteristics of the AceObj items structure.",
				"typ" : "cat",
				"value" : 0
			},
			"has" : {
				"purpose" : null,
			},
			"lnk" : {
				"entity" : null
			}
		},
		"sub" : {
			"cor" : {
				"name" : "AceObj Sub-item",
				"description" : "Aspects referenced or linked to within an AceObj Component",
				"typ" : "sub",
				"value" : 0
			},
			"has" : {
				"purpose" : null,
			},
		},
		"jsn" : {
			"als" : ["json"],
			"cor" : {
				"name" : "JSON String",
				"description" : "JSON-formatted string representing a javascript object literal structure.",
				"typ" : "str",
				"value" : 0
			},
			"lnk" : {
				"entity" : null
			}
		},
		"fnc" : {
			"als" : ["function","fnc_js"],
			"cor" : {
				"name" : "EcmaScript Function",
				"description" : "Programmatic function for use in javascript applications.",
				"typ" : "fnc",
				"value" : 0
			},
			"typ" : {
				"str" : null,
			},
			"has" : {
				"args" : null,
				"body" : null
			},
			"lnk" : {
				"interface" : null
			}
		},
		"deb" : {
			"als" : ["debate"],
			"cor" : {
				"name" : "Debate",
				"description" : "ACE-specific mechanism for structured topical forum used to make decisions.",
				"typ" : "deb",
				"value" : 0
			},
			"has" : {
				"alternative" : null,
			},
			"lnk" : {
				"entity" : null
			}
		},
		"arg" : {
			"als" : ["argument"],
			"cor" : {
				"name" : "Argument",
				"description" : "Point made in regards to a particular alternative in a debate.",
				"typ" : "arg",
				"value" : 0
			},
			"lnk" : {
				"alternative" : null,
			}
		},
		"pro" : {
			"als" : ["arg_pro","pro_arg"],
			"cor" : {
				"name" : "Pro-Argument",
				"description" : "Point made in favor of a particular alternative in a debate.",
				"typ" : "pro",
				"value" : 0
			},
			"typ" : {
				"argument" : null
			},
			"lnk" : {
				"alternative" : null,
			}
		},
		"con" : {
			"als" : ["arg_con","con_arg"],
			"cor" : {
				"name" : "Con-Argument",
				"description" : "Point made against a particular alternative in a debate.",
				"typ" : "con",
				"value" : 0
			},
			"typ" : {
				"argument" : null
			},
			"lnk" : {
				"alternative" : null,
			}
		},
		"alt" : {
			"als" : ["alt","alternative"],
			"cor" : {
				"name" : "Alternative",
				"description" : "One of a number of possible scenarios.",
				"typ" : "alt",
				"value" : 0
			},
			"has" : {
				"definitions" : null
			},
			"lnk" : {
				
			}
		},
		"opt" : {
			"als" : ["option"],
			"cor" : {
				"name" : "Option",
				"description" : "One of a number of alternative choices, particular for use in a system or application.",
				"typ" : "opt",
				"value" : 0
			},
			"sys" : {
				
			},
			"typ" : {
				"alt" : null
			},
			"has" : {
				"words" : null
			},
			"lnk" : {
				
			}
		},
		"gol" : {
			"als" : ["goal"],
			"cor" : {
				"name" : "Goal",
				"description" : "Fundamental concept that can be used to define a goal.",
				"typ" : "gol",
				"value" : 0
			},
			"typ" : {
				"cpt" : null
			},
			"has" : {
				"definition" : null,
				"target" : null,
				"range" : null
			},
			"lnk" : {
				
			}
		},
		"pri" : {
			"als" : ["principle"],
			"cor" : {
				"name" : "Principle",
				"description" : "Fundamental concept that can be used within a goal framework.",
				"typ" : "pri",
				"value" : 0
			},
			"typ" : {
				"cpt" : null
			},
			"has" : {
				"definition" : null,
				"measure" : null
			},
			"lnk" : {
				
			}
		},
		"asp" : {
			"als" : ["aspect"],
			"cor" : {
				"name" : "Aspect",
				"description" : "An aspect of an entity that may be less tangible than a component.",
				"typ" : "asp",
				"value" : 0
			},
			"has" : {
				"definitions" : null
			}
		},
		"cpt" : {
			"als" : ["concept"],
			"cor" : {
				"name" : "Concept",
				"description" : "Fundamental unit of meaning",
				"typ" : "cpt",
				"value" : 0
			},
			"sys" : {
				
			},
			"typ" : {
				"txt" : null
			},
			"has" : {
				"words" : null
			},
			"lnk" : {
				
			}
		},
		"cbn" : {
			"als" : ["contribution"],
			"cor" : {
				"name" : "ACE Contribution",
				"description" : "Fundamental object used to track contributions within entities.",
				"typ" : "cbn",
				"value" : 0
			},
			"has" : {
				"Contributor" : null,
				"refID" : null,
				"owner" : null,
				"Date" : null,
				"Note" : null,
				"ACE Value" : null,
				
			},
			"lnk" : {
				"Currency" : null
			}
		},
		"cbr" : {
			"als" : ["contributor"],
			"cor" : {
				"name" : "ACE Contributor",
				"description" : "Entities that made contributions to another entity.",
				"typ" : "cbr"
			},
			"has" : {
				"cbn" : null,
				"ace" : null,
				
			},
			"lnk" : {
				"Currency" : null
			}
		}, 
		"usr" : {
			"als" : ["user"],
			"cor" : {
				"name" : "User",
				"description" : "User object for use with accounts and software systems.",
				"typ" : "usr",
				"value" : 0,
				"props" : { 
					"UserName" : "",  // The actual user name used to log into the account.
					"UserPass" : "",  // The password hash used to log into the account.
					"createTime" : null,  // The date and time that the user was created.
					"targetEntity" : "",  // The 
					"runTime" : null,
					"target" : null
				}
			},
			"lst" : {
				"prefs" : [],  // List of all preferences that can be assigned to this account.
				"events" : [],  // All events recorded for this account instance.
				"actionList" : []  // All actions taken by the owner of this account.
			}
		},
		"acc" : {
			"als" : ["account"],
			"cor" : {
				"name" : "Account",
				"description" : "Entity used by a computer system to track user preferences and for grouping information",
				"typ" : "acc",
				"value" : 0,
				"props" : { 
					"owner" : "",  // An account will always resolve to a single owner, even if that is a group.
					"createTime" : null,  // The date and time that the account was created.
					"targetEntity" : "",  // The 
					"runTime" : null,
					"target" : null
				}
			},
			"lst" : {
				"prefs" : [],  // List of all preferences that can be assigned to this account.
				"events" : [],  // All events recorded for this account instance.
				"actionList" : []  // All actions taken by the owner of this account.
			}
		},
		"itm-als" : {
			"cor" : {
				"name" : "Alias aceID's",
				"description" : "Alias strings registered to represent a specific system aceID for this AceObj.",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-cor" : {
			"cor" : {
				"name" : "Core AceObj Properties",
				"description" : "The most fundamental characteristics common to all ACE entities and used to identify an AceObj at the base level.",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-sys" : {
			"cor" : {
				"name" : "System Properties",
				"description" : "System properties used internally by ACE for this aceType, not typically visible to an application interface.",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-itm" : {
			"cor" : {
				"name" : "AceObj Items",
				"description" : "Additional properties specific to this AceObj, not fundamental enough to be covered as core properties but more simple than .",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-typ" : {
			"cor" : {
				"name" : "Expanded Type Attributes",
				"description" : "Layers of aspects that extend the categorization traits of this entity (is-a relationships).",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-has" : {
			"cor" : {
				"name" : "Component Modules",
				"description" : "Sub-components of this entity that individually resolve to another contained aceID. (has-a relationships).",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-lnk" : {
			"cor" : {
				"name" : "Free-Association Links",
				"description" : "Symbolic abstractions connecting this entity to other entities and concepts.",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-sec" : {
			"cor" : {
				"name" : "Security Settings",
				"description" : "All access privileges information for this AceObj.",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-lds" : {
			"cor" : {
				"name" : "Loading Priorities",
				"description" : "Specifies which items to automatically load for this entity under various conditions.",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-alt" : {
			"cor" : {
				"name" : "Alternative Versions",
				"description" : "Compatible alternatives that have been proposed or adopted in lieu of this version.",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-mod" : {
			"cor" : {
				"name" : "Modified Items",
				"description" : "Entities and components for which this entity prefers a modified compatible alternative. (Links to their aceID will redirect to the linked aceID.)",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"itm-all" : {
			"cor" : {
				"name" : "All Connections",
				"description" : "The sum total of all entities referenced within this AceObj, organized by type.",
				"typ" : "itm-cat",
				"value" : 0
			}
		},
		"str-name" : {
			"cor" : {
				"name" : "Name",
				"description" : "The core name for this entity.",
				"typ": "str",
				"value" : 0
			},
			"lnk" : {
				"itm" : "cor"
			}
		},
		"str-description" : {
			"cor" : {
				"name" : "Description",
				"description" : "The core description used for this entity.",
				"typ": "str",
				"value" : 0
			},
			"lnk" : {
				"itm" : "cor"
			}
		},
		"ent-typ" : {
			"cor" : {
				"name" : "AceObj Type",
				"description" : "The primary typ designation for this AceObj entity.",
				"typ": "typ",
				"value" : 0
			},
			"lnk" : {
				"itm" : "cor"
			}
		},
		"num-value" : {
			"cor" : {
				"name" : "Value",
				"description" : "A general-purpose floating point or integer that can be used for anything relevant to this AceObj.",
				"typ": "num",
				"value" : 0
			},
			"lnk" : {
				"itm" : "cor"
			}
		},
		"htm-div" : {
			"cor" : {
				"name" : "DIV Element",
				"description" : "A &lt;div&gt; HTML element.",
				"typ" : "htm",
				"value" : 0
			},
			"itm" : {
				"htm-tag" : "div"
			}
		},
		"htm-spn" : {
			"cor" : {
				"name" : "SPAN Element",
				"description" : "A &lt;span&gt; HTML element.",
				"typ" : "htm",
				"value" : 0
			},
			"itm" : {
				"htm-tag" : "span"
			}
		},
		"htm-lnk" : {
			"cor" : {
				"name" : "ANCHOR Element",
				"description" : "An &lt;a&gt; HTML element.",
				"typ" : "htm",
				"value" : 0
			},
			"itm" : {
				"htm-tag" : "a",
				"href" : null,
				"hov" : null
			}
		},
		"htm-img" : {
			"cor" : {
				"name" : "IMG Element",
				"description" : "An &lt;img&gt; HTML element.",
				"typ" : "htm",
				"value" : 0
			},
			"itm" : {
				"htm-tag" : "img",
				"src" : null,
				"hov" : null
			},
			"typ" : {
				"img" : null
			}
		},
		"gui-obj" : {
			"cor" : {
				"name" : "AceObj AceUI widget",
				"description" : "The stock AceUI Widget for representing AceObj entities.",
				"typ" : "gui",
				"value" : 0
			},
			"itm" : {
				"objName" : "AceObjUI"
			}
		},
		"gui-btn" : {
			"cor" : {
				"name" : "AceUI Button Widget",
				"description" : "The stock AceUI button Widget.",
				"typ" : "gui",
				"value" : 0
			},
			"itm" : {
				"objName" : "AceBtnUI"
			},
			"has" : {
				"htm" : "htm_gui_btn",
				"action" : null,
				"img" : null,
				"txt" : null,
				"hov" : null
			}
		},
		"htm_gui_btn" : {
			"cor" : {
				"name" : "AceUI Button HTML",
				"description" : "Html template used to output the stock AceUI button Widget.",
				"typ" : "tpl"
			},
			"itm" : {
				"str" : '<a href="#action">aceUI Button</a>',
				"obj" : {
					"href" : "#action",
					"label" : "aceUI Button",
					"img" : "",  // "<|ace_img|>"
					"note" : "Click to perform an action"
				},
				"tpl" : '<a href="{{href}}">{{label}}</a>',
				"cpl" : null
			},
			"has" : {
				"gui" : "gui-btn"
			},
			"fnc" : {
				"toStr" : "fnc_tpl_toStr"
			}
		},
		"fnc_tpl_toStr" : {
			"cor" : {
				"name" : "Function tpl.toStr()",
				"description" : "Outputs string generated by aceUI template.",
				"typ" : "fnc"
			},
			"itm" : {
				"str" : ""
			},
			"has" : {
				"itf" : null,
				"args" : null,
				"body" : null
			}
		},
		"gui-hov" : {
			"cor" : {
				"name" : "AceUI Hover Widget",
				"description" : "AceUI Widget that opens to reveal deeper object structure or information when hovered over.",
				"typ" : "gui",
				"value" : 0
			},
			"itm" : {
				"objName" : "AceHovUI"
			}
		},
		"gui-edt" : {
			"cor" : {
				"name" : "AceUI Edit Field Widget",
				"description" : "AceUI Widget that allows the editing of an AceObj text property.",
				"typ" : "gui",
				"value" : 0
			},
			"itm" : {
				"objName" : "AceEditUI"
			}
		},
		"gui-btn-exp" : {
			"cor" : {
				"name" : "Export Button",
				"description" : "AceUI button Widget that initiates the saving to file of the object structure of a single or multiple AceObjs.",
				"typ" : "gui",
				"value" : 0
			},
			"typ" : {
				"gui-btn" : null
			},
			"itm" : {
				"label" : "Export This Entity Structure",
				"action" : "Export",
				"target" : null
			}
		},
		"gui-btn-edt" : {
			"cor" : {
				"name" : "Edit Button",
				"description" : "AceUI button Widget that initiates an edit screen for the target AceObj.",
				"typ" : "gui",
				"value" : 0
			},
			"typ" : {
				"gui-btn" : null
			},
			"itm" : {
				"label" : "Edit This Entity",
				"action" : "Edit",
				"target" : null
			}
		},
		"gui-btn-opn" : {
			"cor" : {
				"name" : "Open Button",
				"description" : "AceUI button Widget that loads the target AceObj into memory for the launching widget.",
				"typ" : "gui",
				"value" : 0
			},
			"typ" : {
				"gui-btn" : null
			},
			"itm" : {
				"label" : "Open This Entity",
				"action" : "Open",
				"target" : null
			}
		},
		"fnc-gui" : {
			"cor" : {
				"name" : "UI Function",
				"description" : "AceUI method fired when user acts on a Widget.",
				"typ" : "fnc",
				"value" : 0
			}
		},
		"fnc-gui-clk" : {
			"cor" : {
				"name" : "click",
				"description" : "AceUI method fired when user clicks on a Widget.",
				"typ" : "fnc",
				"value" : 0
			},
			"typ" : {
				"fnc-gui" : null
			}
		},
		"fnc-gui-hov" : {
			"cor" : {
				"name" : "hover",
				"description" : "AceUI method fired when user hovers on a Widget.",
				"typ" : "fnc",
				"value" : 0
			},
			"typ" : {
				"fnc-gui" : null
			}
		},
		"fnc-gui-drg" : {
			"cor" : {
				"name" : "drag",
				"description" : "AceUI method fired when user drags a Widget.",
				"typ" : "fnc",
				"value" : 0
			},
			"typ" : {
				"fnc-gui" : null
			}
		},
		"fnc-gui-drp" : {
			"cor" : {
				"name" : "drop",
				"description" : "AceUI method fired when user drops a Widget.",
				"typ" : "fnc",
				"value" : 0
			},
			"typ" : {
				"fnc-gui" : null
			}
		},
		"acc-usr" : {
			"cor" : {
				"name" : "Test User",
				"description" : "A basic user account for testing.",
				"typ" : "acc",
				"value" : 0
			}
		}
	}
}//loadCallObj

var ACE = ace({login:1});  // Fix!
console.log(ACE.aceCall(loadCallObj));  // Fix. Temporary hack.

