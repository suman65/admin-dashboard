Ext.define('Admin.dashboard.model.assets.AssetsModel', {
    extend: 'Ext.data.Model'
    ,fields: [
		    	 { name : 'id'   				}
		        ,{ name : 'asseTypeName' 		}
		        ,{ name : 'assetTypeId' 		}
		        ,{ name : 'assetCategory' 		}
		        ,{ name : 'assetCategoryId' 	}
		        ,{ name : 'assetName' 			}
		        ,{ name : 'companyId' 			}
		        ,{ name : 'company' 			}
		        ,{ name : 'siteId' 				}
		        ,{ name : 'site' 				}
		        ,{ name : 'buildingId' 			}
		        ,{ name : 'building' 			}
		        ,{ name : 'createdDate' 		}
		   ]
});
