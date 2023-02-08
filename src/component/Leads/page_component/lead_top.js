import React from "react";
import { Link } from "react-router-dom";

export default function Lead_top_header(props) {
   
    const  filler_option=()=>{
               if(props.filteroption=='OFF'){
                   props.setFilteroption('ON');
                
               }else{
                props.setFilteroption('OFF');
                 
               } 
               
        
    }
 
    return (
        <div className="container-fluid">
        <div className="row mb-2 py-2 bg-white border-bottom">
            <div className="col-sm-6 d-flex justify-content-start align-items-center">
                 
                <button to=".abc " className="nav-toggle" id="filter-button"  onClick={filler_option}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> {props.filteroption}   
                 </button>

                <div className="dataTables_length" id="DataTables_Table_0_length">
                    <label className="dropdown-btn " style={{ margin: '0px 10px 0px 0px' }}>
                        <div className="dd-button  border" style={{ padding: '7px 30px' }}>
                            Open Lead
                        </div>
                        <input type="checkbox" className="dd-input" id="test" />
                        <ul className="dd-menu" style={{ width: 'auto' }}>
                            <li><Link to="#">Mass Delete</Link></li>
                            <li><Link to="#">Mass Update</Link></li>
                            <li><Link to="#">Mass Convert</Link></li>
                            <li><Link to="#">Manage Tags</Link></li>
                            <li><Link to="#">Drafts</Link></li>
                            <li><Link to="#">Mass Email</Link></li>
                            <li><Link to="#">Autoresponders</Link></li>
                            <li><Link to="#">Approve Leads</Link></li>
                            <li><Link to="#">Deduplicate Leads</Link></li>
                            <li><Link to="#">Add to Campaigns</Link></li>
                            <li className="divider"></li>
                        </ul>
                    </label>
                </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-end align-items-center">

                <div className="btn-group mr-4  " style={{ margin: '0px 3px 0px 0px' }}>
                    <Link to="create" type="button " className="btn btn-primary mr-20">Create Leads</Link>
                    <Link to="import_lead"  type="button" className="btn btn-primary mr-20 ">Import Leads</Link>
                </div>
                <label className="dropdown-btn " style={{ margin: '0px 10px 0px 0px' }}>
                    <div className="dd-button  btn btn-info dropdown-toggle border" >
                        Action
                    </div>
                    <input type="checkbox" className="dd-input" id="test" />
                    <ul className="dd-menu" style={{ width: 'auto' }}>
                        <li><Link to="#">Mass Delete</Link></li>
                        <li><Link to="#">Mass Update</Link></li>
                        <li><Link to="#">Mass Convert</Link></li>
                        <li><Link to="#">Manage Tags</Link></li>
                        <li><Link to="#">Drafts</Link></li>
                        <li><Link to="#">Mass Email</Link></li>
                        <li><Link to="#">Autoresponders</Link></li>
                        <li><Link to="#">Approve Leads</Link></li>
                        <li><Link to="#">Deduplicate Leads</Link></li>
                        <li><Link to="#">Add to Campaigns</Link></li>

                        <li className="divider"></li>
                    </ul>
                </label>
            </div>
        </div>
        </div>
    )
}