import React, { useState, useEffect } from "react";
import Header from "../include/header";
import Footer from "../include/footer";
import { IconName } from "react-icons/fa";
import { Link, optionnk } from "react-router-dom";
import './import_lead.css';

export default function Lead_import() {

    return (

        <div>
            <Header />
            <section>
                <div className="container-fluid">
                    <div className="row implead">
                        <div className="col-sm-12">
                            <div className="heading-tittle mb-20">
                                <h1>Import Leads</h1>
                            </div>
                        </div>

                    </div>
                    <div className="row" >
                        <div className="migimport">
                          
                            <div className="col-sm-6 migseloptions">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="aoptiongnleft">
                                            <span className="importFileSpr">
                                                <img src={process.env.PUBLIC_URL + '/images/icon/doc.png'} alt="" />
                                            </span>
                                            <span className="migImpFromfile">From File
                                            </span>
                                        </div>

                                        <div id="migBeforeFileAdd">
                                            <div className="txtimp mt-3">
                                                <p className="text-center">Drag and drop your
                                                    file here.</p>
                                                <p className="text-center">-&nbsp;&nbsp;or&nbsp;&nbsp;-</p>
                                                <label className="impfile"> Browse
                                                    <input type="file" size="60" />
                                                </label>
                                                <div className="downloadmsg mt-5 text-center">
                                                    <span className="downloadmsg crm-font-regular f14"><a target="_blank" data-zcqa="downloadSampleFile" href="/crm/org782928964/ExportEntity.do?format=downloadImportSampleFile&amp;importSampleFile=true&amp;module=Leads" rel="noopener noreferrer">Download sample file</a></span>
                                                </div>
                                            </div>
                                            <p className="migImportHelpText ">
                                                You can import up to 1000
                                                records through an .xls, .xlsx, .vcf or .csv file.&nbsp;To import more than 1000
                                                records at a time, use a .csv file.</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 migseloptions">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="aoptiongnleft">
                                            <span className="importFileSpr">
                                                <img src={process.env.PUBLIC_URL + '/images/icon/crm.png'} alt="" />
                                            </span>
                                            <span className="migImpFromfile"> From other CRMs
                                            </span>
                                        </div>

                                        <div id="migBeforeFileAdd">
                                            <div className="txtimp mt-3">
                                                <div className="downloadmsg mt-5 text-center">
                                                    <span className="downloadmsg crm-font-regular f14"><Link target="_blank" href="#" rel="noopener noreferrer">Which CRM are you coming from?</Link></span>
                                                </div>

                                                <div className="wrapper mt-4">
                                                   
                                                
                                                        <select className="options"><option className="">None</option><option className="">SaleForce</option><option  className="">ZohoCRM</option><option  className="">Microsoft Dynamics365</option><option  className="">Maximizer CRM</option><option  className="">Pipedrive</option><option  className="">Insightly</option><option  className="">Zoho ContactManager</option><option  className="">Highrise</option><option  className="">Hubspot</option><option  className="">OtherCRM</option></select>
                                                                                                   </div>
                                            </div>
                                            <p className="migImportHelpText ">
                                                You can import up to 1000
                                                records through an .xls, .xlsx, .vcf or .csv file.&nbsp;To import more than 1000
                                                records at a time, use a .csv file.</p>
                                        </div>
                                        <span className="migSelOr color_6 fs pA">or</span>

                                    </div>


                                </div>
                            </div>
                            </div>
                      
                    </div>
                </div>
            </section>
            <Footer />
        </div>


    )



}
