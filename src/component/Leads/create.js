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
  const [lead_Name, setlead_Name] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [lead_Source, setlead_Source] = useState("");
  const [first_Name, setfirst_Name] = useState("");
  const [last_Name, setlast_Name] = useState("");
  const [titel, setTitle] = useState("");
  const [fax, setFax] = useState("");
  const [mobile, setMobile] = useState("");
  const [website, setWebsite] = useState("");
  const [lead_status, setLeadStatus] = useState("");
  const [industry, setIndustry] = useState("");
  const [tr, setTr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const token = ("38|iZ0yPZnlxF1VgYX0inl9PylMwZx9ymfGNtyqqlkx");
    // console.log(authToken);
    axios
      .post(
        "http://192.168.1.157/lms_laravel/api/CreateUserLead",
        {
          lead_Name,
          company,
          email,
          lead_Source,
          first_Name,
          last_Name,
          titel,
          fax,
          mobile,
          website,
          lead_status,
          industry,
          tr,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
                                        <h3>Cread Lead</h3>
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
                                            value={lead_Name}
                                            onChange={(event) => setlead_Name(event.target.value)}
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
                                            value={lead_Source}
                                            onChange={(event) => setlead_Source(event.target.value)}
                                        />
                                                
                                        <TextField
                                            label="First Name"
                                            value={first_Name}
                                            onChange={(event) => setfirst_Name(event.target.value)}
                                        />
                                        <TextField
                                            label="Last Name"
                                            value={last_Name}
                                            onChange={(event) => setlast_Name(event.target.value)}
                                        />
                                        <TextField
                                            label="Title"
                                            value={titel}
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
                                            value={lead_status}
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