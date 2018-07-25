Ext.define('Admin.dashboard.model.spareParts.SparePartsModel', {
    extend: 'Ext.data.Model'
    ,fields: [
		    	 { name : 'id'   				}
		        ,{ name : 'sparePartNumber' 	}
		        ,{ name : 'sparePartName' 		}
		        ,{ name : 'sparePartCategory' 	}
		        ,{ name : 'sparePartCategoryId' }
		        ,{ name : 'companyId' 			}
		        ,{ name : 'company' 			}
		        ,{ name : 'siteId' 				}
		        ,{ name : 'site' 				}
		        ,{ name : 'buildingId' 			}
		        ,{ name : 'building' 			}
		        ,{ name : 'createdDate' 		}
		        ,{ name : 'quantity' 			}
		        ,{ name : 'unitPrice' 			}
		   ]
});
