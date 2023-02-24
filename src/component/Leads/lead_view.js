import React,{ useState,useEffect } from "react";
//import {
// BrowserRouter as Router,Route,Link } from "react-router-dom";
import Header from "../include/header";
import Footer from "../include/footer";
import Lead_top_header from "./page_component/lead_top";
import Lead_update from "./page_component/Lead_update";
import Pagination from "./page_component/pagination";
 
import { Link } from "react-router-dom";
import './lead.css';
import array from '../data/table';
 
export default function Lead_view() {
  const [filteroption, setFilteroption] = useState('ON');
  const [isCheckAll, setIsCheckAll] = useState(false);
 
   
  let filter_section='col-sm-3';
  let lead_table='col-sm-9';  
  if(filteroption ==='OFF'){
    filter_section='col-sm-1 hide';
    lead_table='col-sm-12'; 
    }else{
        filter_section='col-sm-3';
        lead_table='col-sm-9'; 
    }
   

    return (
        <div className='container-fluid'>
            <Header />
             { isCheckAll ? (<Lead_update/>):(<Lead_top_header filteroption={filteroption} setFilteroption={setFilteroption} />)}
            <Pagination />
            <div className="row mb-3">
                <div id="filter_section" className={filter_section}>
                    <div className="card mb-4 abc filterlead"  >
                        <div className="card-body text-center">
                            <div className="head">
                                <Link to="!#" className="lead_1_link"   >
                                    <p className="#m-0">Filter Leads by {sessionStorage.getItem("filter_status")}</p>
                                </Link>
                                <input type="text" id="searchInput" placeholder="Search.." />
                                <div id="submitsearch">
                                    <span>Search {sessionStorage.getItem("filter_status")}</span>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush rounded-3">
                                { array.Colume.map((item, e) => {

                                        return (
                                            <li key={e} className="list-group-item d-flex justify-content-between align-items-center p-2">
                                            <input type="checkbox" className="custom-control-input filter_lead_by" id="customCheck" />
                                                 <Link to="#">
                                                    <p className="mb-0">{item}</p>
                                                 </Link>
                                             
                                           </li>
                                        )
                                    }
                                    )
                                    }

                            </ul>
                            <div className="filter_btn d-flex justify-content-start align-items-baseline my-4 ml-3">
                                <Link to="#" target="_blank"  ><button type="button" className="btn btn-primary ">
                                    Apply Filter</button></Link>
                                <Link to="#" target="_blank"><button type="button" className="btn btn-primary btn-clear">Clear</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lead_table" className={lead_table}>
                    <div className="card mb-4 abc filterlead"  >
                        <div className="card-head"></div>
                        <div className="card-body text-center">
                            <Table1  isCheckAll={isCheckAll}  setIsCheckAll={setIsCheckAll}/>
                        </div>
                    </div>
                </div>
            </div>
           <Footer />  
        </div>
    )

}



function Table1(props) {
  

    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);



    const handleSelectAll = (e) => {
        const {value, checked}= e.target;
        if(checked)
        {
            props.setIsCheckAll(checked);
        }else{
            props.setIsCheckAll(false);
        }
        console.log(checked);
      };


    let tabledata = array.data;
    let Colume_table = array.Colume;
  
    const col = Colume_table.map((col) => <th className='w-25' > {col} </th>);
    return ( <div className="table-responsive text-nowrap">
            <table className="table table-bordered table-hover table-fixed">
                <thead>
                    <tr><th><input type='checkbox' onClick={handleSelectAll} value='ALL'   /></th>{col}</tr>
                </thead>
                <tbody>
                    { tabledata.map((item,index) => {
            return (
                <tr key={index}>  
                                <th><input type='checkbox' data-id={item.Id}   /></th>
                                 { Colume_table.map((col) => <td className='w-25' >{ item[col] }</td>)}
                            </tr>
                        )
                      }
                    )
                    }
                </tbody>
            </table>
        </div>
     )

}


 

 