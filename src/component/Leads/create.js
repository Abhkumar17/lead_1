import React, { useState} from "react";
import Header from "../include/header";
import Footer from "../include/footer";
import { Link } from "react-router-dom";
import './create.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Create_Lead() {
  const classes = useStyles();
  const [leadName, setLeadName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [leadOwner, setLeadOwner] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [fax, setFax] = useState("");
  const [mobile, setMobile] = useState("");
  const [website, setWebsite] = useState("");
  const [leadStatus, setLeadStatus] = useState("");
  const [industry, setIndustry] = useState("");
  const [tr, setTr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const authToken = localStorage.getItem("token");
    // console.log(authToken);
    axios
      .post(
        "http://127.0.0.1:8000/api/CreateUserLead",
        {
          leadName,
          company,
          email,
          leadSource,
          leadOwner,
          firstName,
          lastName,
          title,
          fax,
          mobile,
          website,
          leadStatus,
          industry,
          tr,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        setIsLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };

    return (
        <div>
            <Header />
            <section  >
               <div className="container-fluid">
                <div className="row top_menu_fixed shadow-none pt-30 mt-20 mb-20 ">
                    <div className="col-sm-12 col-lg-12 pt-40" >
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 box-shadow:0;">
                            <div className="card d-flex ">
                                <div className="card-body text-center d-flex justify-content-between align-items-center">
                                    <div className="admin_details d-flex justify-content-between align-items-baseline">
                                        <h3>Edit Lead</h3>
                                        <h6><Link to="#">Edit Page Layout</Link></h6>
                                    </div>
                                    <div className="nav_btn edit-lead">
                                        <Link to="#" target="_blank"><button type="button" className="btn btn-primary btn-nav">Cancel</button></Link>
                                        <Link to="#" target="_blank"><button type="button" className="btn btn-primary">Save</button></Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-12 p-0">
                                <div className="card edit-lead px-3">
                                    <div className="card-body profile-section">
                                
                                    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                        <TextField
                                            label="Lead Name"
                                            value={leadName}
                                            onChange={(event) => setLeadName(event.target.value)}
                                        />
                                        <TextField
                                            label="Company"
                                            value={company}
                                            onChange={(event) => setCompany(event.target.value)}
                                        />
                                        <TextField
                                            label="Email"
                                            type="email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                        <TextField
                                            label="Lead Source"
                                            value={leadSource}
                                            onChange={(event) => setLeadSource(event.target.value)}
                                        />
                                                <TextField
                                            label="Lead Owner"
                                            value={leadOwner}
                                            onChange={(event) => setLeadOwner(event.target.value)}
                                        />
                                        <TextField
                                            label="First Name"
                                            value={firstName}
                                            onChange={(event) => setFirstName(event.target.value)}
                                        />
                                        <TextField
                                            label="Last Name"
                                            value={lastName}
                                            onChange={(event) => setLastName(event.target.value)}
                                        />
                                        <TextField
                                            label="Title"
                                            value={title}
                                            onChange={(event) => setTitle(event.target.value)}
                                        />
                                        <TextField
                                            label="Fax"
                                            value={fax}
                                            onChange={(event) => setFax(event.target.value)}
                                        />
                                        <TextField
                                            label="Mobile"
                                            value={mobile}
                                            onChange={(event) => setMobile(event.target.value)}
                                        />
                                        <TextField
                                            label="Website"
                                            value={website}
                                            onChange={(event) => setWebsite(event.target.value)}
                                        />
                                        <TextField
                                            label="Lead Status"
                                            value={leadStatus}
                                            onChange={(event) => setLeadStatus(event.target.value)}
                                        />
                                        <TextField
                                            label="Industry"
                                            value={industry}
                                            onChange={(event) => setIndustry(event.target.value)}
                                        />
                                        <TextField
                                            label="TR"
                                            value={tr}
                                            onChange={(event) => setTr(event.target.value)}
                                        />
                                        <Button type="submit">Submit</Button>
                                        </form>
                                    </div>
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