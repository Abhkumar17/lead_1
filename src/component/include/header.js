import React, { useState } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField'


function Header() {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
      };

    const [hide, setHide] = useState('hide');
    const hideButton = () => {
        if (hide == 'show') {
            setHide('hide');
        } else {
            setHide('show');
        }

    };

    const [hidden, setHidden] = useState('hide');
    const search_box = () => {
        if (hidden == 'show') {
            setHidden('hide');
        } else {
            setHidden('show');
        }

    };

    return (
        <header className='sticky'>
            <div className="container-fluid">

                <div className="row mb-2 py-2 bg-black border-bottom">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand d-flex align-items-center"  >

                            <span className="ml-3 font-weight-bold">Vertage</span>
                        </a>
                        <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                            data-target="#navbar4">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbar4">
                            <ul className="navbar-nav mr-auto pl-lg-4">
                                <li className="nav-item active"> <Link className="nav-link" to='/Dashbord' > <span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="fas fa-home"></i></span>Home</Link> </li>
                                <li className="nav-item"> <Link className="nav-link" to="/Leads"><span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="fas fa-spa"></i></span>Leads</Link> </li>
                                <li className="nav-item"> <Link className="nav-link" to="/Deals"><span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="far fa-user"></i></span>Deals</Link> </li>



                                <li className="nav-item"> <Link className="nav-link" to="/Mail"><span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="far fa-envelope"></i></span>Mail</Link> </li>


                                <li className="nav-item"> <Link className="nav-link" to="/Activities"><span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="far fa-envelope"></i></span>Activities</Link> </li>

                                <li className="nav-item"> <Link className="nav-link" to="/Contacts"><span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="far fa-envelope"></i></span>Contacts</Link> </li>

                                <li className="nav-item"> <Link className="nav-link" to="/Report"><span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="far fa-envelope"></i></span>Reports</Link> </li>

                                <li className="nav-item"><Link className="nav-link" to="/Campaign"><span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="far fa-envelope"></i></span>Campaign</Link> </li>
                            </ul>

                            <div className={`flex-[2] hidden  svg_Icons1 justify-center mx-4 ${hidden}`}>
                                <form action="" method="POST" className="flex-1 text-slate-900">
                                    <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1.5 h-full rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <TextField fullWidth className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-base"  id="standard-search" label="Search"  placeholder="Type and press enter" type="search" variant="standard"
        />
                                        
                                        <button className='btn_close'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </button>
                                    </div>
                                    <input type="submit" hidden="" value="" />
                                </form>
                            </div>
                            <ul className="navbar-nav fa-fa ms-auto mt-3 mt-lg-0">
                                <li className=""  >
                                <Link className="search-box icon-header nav-link" onClick={search_box} >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>  <span className="d-lg-none ml-3">Plus</span>
                                    </Link> </li>

                                <li className="nav-item" data-toggle="modal" data-target="#modal_aside_left">
                                    <Link className="nav-link icon-header" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                        <span className="d-lg-none ml-3">Plus</span>
                                    </Link>


                                </li>
                                <li className="nav-item" data-toggle="modal" data-target="#modal_aside_left">
                                    <Link className="nav-link icon-header icon-header-note" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6" /><path d="M14 3v5h5M18 21v-6M15 18h6" /></svg><span className="d-lg-none ml-3">Note</span>
                                    </Link>
                                </li>

                                <li className="nav-item" data-toggle="modal" data-target="#modal_aside_left">
                                    <Link className="nav-link icon-header" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                                        <span className="d-lg-none ml-3">Bell</span>
                                    </Link> </li>
                                <li className="nav-item" data-toggle="modal" data-target="#modal_aside_left">
                                    <Link className="nav_link" onClick={hideButton}>
                                        <span> <img src="../images/icon/vuero-1.svg" alt="profile-user" className="avatar  profile-user brround cover-image" />
                                        </span>
                                        <div className="text-center p-1 d-flex d-lg-none-max">
                                            <h6 className="mb-0" id="profile-heading">Elena<i className="user-angle ms-1 fa fa-angle-down "></i>
                                            </h6> </div>

                                    </Link> </li>

                            </ul>
                            <div className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow ${hide}`} data-bs-popper="none">
                                <a className="dropdown-item" href="/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-inner-icn" viewBox="0 0 24 24">
                                        <path d="M14.6650391,13.3672485C16.6381226,12.3842773,17.9974365,10.3535767,18,8c0-3.3137207-2.6862793-6-6-6S6,4.6862793,6,8c0,2.3545532,1.3595581,4.3865967,3.3334961,5.3690186c-3.6583862,1.0119019-6.5859375,4.0562134-7.2387695,8.0479736c-0.0002441,0.0013428-0.0004272,0.0026855-0.0006714,0.0040283c-0.0447388,0.272583,0.1399536,0.5297852,0.4125366,0.5745239c0.272522,0.0446777,0.5297241-0.1400146,0.5744629-0.4125366c0.624939-3.8344727,3.6308594-6.8403931,7.465332-7.465332c4.9257812-0.8027954,9.5697632,2.5395508,10.3725586,7.465332C20.9594727,21.8233643,21.1673584,21.9995117,21.4111328,22c0.0281372,0.0001831,0.0562134-0.0021362,0.0839844-0.0068359h0.0001831c0.2723389-0.0458984,0.4558716-0.303833,0.4099731-0.5761719C21.2677002,17.5184937,18.411377,14.3986206,14.6650391,13.3672485z M12,13c-2.7614136,0-5-2.2385864-5-5s2.2385864-5,5-5c2.7600708,0.0032349,4.9967651,2.2399292,5,5C17,10.7614136,14.7614136,13,12,13z"></path>
                                    </svg> Profile </a>
                                <a className="dropdown-item" href="/mail">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-inner-icn" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                        <path d="M19.5,7H18V6c-0.0018311-1.6561279-1.3438721-2.9981689-3-3H4.5C3.119812,3.0012817,2.0012817,4.119812,2,5.5V18c0.0018311,1.6561279,1.3438721,2.9981689,3,3h14.5c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-9C21.9987183,8.119812,20.880188,7.0012817,19.5,7z M4.5,4H15c1.1040039,0.0014038,1.9985962,0.8959961,2,2v1H4.5C3.6715698,7,3,6.3284302,3,5.5S3.6715698,4,4.5,4z M21,16h-2c-1.1045532,0-2-0.8954468-2-2s0.8954468-2,2-2h2V16z M21,11h-2c-1.6568604,0-3,1.3431396-3,3s1.3431396,3,3,3h2v1.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V7.4990234C3.4321899,7.8247681,3.9588013,8.0006714,4.5,8h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V11z"></path>
                                    </svg> My Wallet <span className="badge bg-secondary float-end">3</span>
                                </a>
                                <a className="dropdown-item" href="/mail-inbox">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-inner-icn" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                        <path d="M12,8.5c-1.9329834,0-3.5,1.5670166-3.5,3.5s1.5670166,3.5,3.5,3.5c1.9320068-0.0023193,3.4976807-1.5679932,3.5-3.5C15.5,10.0670166,13.9329834,8.5,12,8.5z M12,14.5c-1.3807373,0-2.5-1.1192627-2.5-2.5s1.1192627-2.5,2.5-2.5c1.380127,0.0014648,2.4985352,1.119873,2.5,2.5C14.5,13.3807373,13.3807373,14.5,12,14.5z M21.1582031,10.0253906l-1.8867188-0.6289062c-0.0222168-0.0074463-0.0439453-0.0164185-0.0648804-0.0268555c-0.2470093-0.12323-0.3474121-0.4234009-0.2241821-0.6704102l0.8896484-1.7783203c0.0960083-0.1925659,0.0582275-0.4248657-0.09375-0.5771484l-2.1210938-2.1220703c-0.1524658-0.1516113-0.3845215-0.1893311-0.5771484-0.09375l-1.7792969,0.8896484c-0.0209961,0.010437-0.0426636,0.0194092-0.0648804,0.0268555c-0.2618408,0.0874023-0.5449829-0.0540771-0.6323853-0.315918l-0.6289062-1.8867188C13.90625,2.6377563,13.71521,2.5001831,13.5,2.5h-3c-0.21521-0.0001221-0.40625,0.1376343-0.4741821,0.3417969L9.3969116,4.7285156C9.3518677,4.8665161,9.24823,4.9776001,9.1137085,5.0322266c-0.1335449,0.057373-0.2857666,0.052002-0.414978-0.0146484L6.9204102,4.1279297c-0.1925049-0.0960693-0.4249268-0.0583496-0.5771484,0.09375L4.2216797,6.34375c-0.1522217,0.1521606-0.1900024,0.3846436-0.09375,0.5771484l0.8896484,1.7783203c0.0107422,0.0214233,0.0198975,0.0435791,0.0274658,0.0662842c0.086792,0.2616577-0.0548706,0.5441284-0.3165283,0.6309814l-1.8867188,0.6289062C2.6377563,10.09375,2.5001831,10.28479,2.5,10.5v3c0.0001831,0.21521,0.1377563,0.40625,0.3417969,0.4746094l1.8862305,0.6289062c0.0224609,0.0074463,0.0444336,0.0165405,0.0656128,0.0270996c0.2468872,0.12323,0.347168,0.4232788,0.223938,0.670166l-0.8896484,1.7783203c-0.0962524,0.1925049-0.0584717,0.4249878,0.09375,0.5771484l2.1216431,2.1220703c0.1523438,0.1519165,0.3845825,0.1896362,0.5771484,0.09375l1.7783203-0.8896484c0.1289673-0.067627,0.2816162-0.072998,0.4150391-0.0146484c0.1344604,0.0546265,0.2380981,0.1657104,0.2831421,0.3037109l0.6289062,1.8867188C10.093811,21.3623657,10.2848511,21.500061,10.5,21.5h3c0.21521-0.0001831,0.40625-0.1378174,0.4746094-0.3418579l0.6289062-1.8867188c0.0074463-0.0222168,0.0164185-0.0438843,0.0268555-0.0648804c0.12323-0.2470093,0.4234009-0.3474121,0.6704102-0.2241821l1.7792969,0.8896484c0.192688,0.0950928,0.4244995,0.0574341,0.5771484-0.09375l2.1210938-2.1220703c0.1519775-0.1522217,0.1897583-0.3845825,0.09375-0.5771484l-0.8896484-1.7783203c-0.0651855-0.1295776-0.0705566-0.2811279-0.0146484-0.414978c0.0546265-0.1342773,0.1657715-0.2375488,0.3037109-0.2822266l1.8867188-0.6289062C21.3622437,13.90625,21.4998169,13.71521,21.5,13.5v-3C21.4998169,10.28479,21.3622437,10.09375,21.1582031,10.0253906z M20.5,13.1396484l-1.5449219,0.5146484c-0.0671997,0.0223999-0.1326904,0.0495605-0.1960449,0.0811768c-0.7410889,0.3704224-1.0415649,1.2714844-0.6711426,2.0125732l0.7285156,1.4560547l-1.6113281,1.6123047l-1.4570312-0.7285156c-0.0639648-0.0320435-0.130127-0.0594482-0.197998-0.0820312c-0.7856445-0.2613525-1.6343994,0.1636353-1.895752,0.9492188L13.1396484,20.5h-2.2792969l-0.5151978-1.5449219c-0.0223389-0.0669556-0.0493774-0.1322021-0.0809326-0.1953125c-0.3702393-0.741394-1.2714233-1.0421753-2.0128174-0.671875l-1.4559937,0.7285156l-1.6118164-1.6123047l0.7285156-1.4560547c0.0314941-0.0631104,0.0585327-0.128418,0.0808716-0.1953125c0.2622681-0.7861938-0.1623535-1.6361084-0.9485474-1.8984375L3.5,13.1396484v-2.2792969l1.5449219-0.5145874c0.0666504-0.0222778,0.1317139-0.0492554,0.1945801-0.0806274c0.7416382-0.3701782,1.0427856-1.2714844,0.6726074-2.0131226L5.1835938,6.7958984l1.6118774-1.6123047l1.4559937,0.7285156C8.3145752,5.9436646,8.3798218,5.9707031,8.4467773,5.993042c0.7860718,0.2623901,1.6359863-0.1620483,1.8984375-0.9481201L10.8603516,3.5h2.2792969l0.5147095,1.5449219c0.022583,0.0678711,0.0499878,0.1340332,0.0820312,0.197998c0.3707275,0.7403564,1.2713623,1.039917,2.0117188,0.6691895l1.4569702-0.7285156l1.6113281,1.6123657l-0.7285156,1.4560547c-0.0320435,0.0639038-0.0594482,0.1300659-0.0820312,0.197937c-0.2613525,0.7856445,0.1636353,1.6343384,0.9492188,1.895752L20.5,10.8603516V13.1396484z"></path>
                                    </svg> Settings </a>
                                <a className="dropdown-item" href="/faq">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-inner-icn" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                        <path d="M2.5,9c0.0001831,0,0.0003662,0,0.0006104,0C2.7765503,8.9998169,3.0001831,8.776001,3,8.5V3h5.5C8.776123,3,9,2.776123,9,2.5S8.776123,2,8.5,2h-6C2.4998169,2,2.4996338,2,2.4993896,2C2.2234497,2.0001831,1.9998169,2.223999,2,2.5v6c0,0.0001831,0,0.0003662,0,0.0005493C2.0001831,8.7765503,2.223999,9.0001831,2.5,9z M8.5,21H3v-5.5C3,15.223877,2.776123,15,2.5,15S2,15.223877,2,15.5v6c0,0.0001831,0,0.0003662,0,0.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h6C8.776123,22,9,21.776123,9,21.5S8.776123,21,8.5,21z M21.5,2h-6C15.223877,2,15,2.223877,15,2.5S15.223877,3,15.5,3H21v5.5c0,0.0001831,0,0.0003662,0,0.0005493C21.0001831,8.7765503,21.223999,9.0001831,21.5,9c0.0001831,0,0.0003662,0,0.0006104,0C21.7765503,8.9998169,22.0001831,8.776001,22,8.5v-6c0-0.0001831,0-0.0003662,0-0.0006104C21.9998169,2.2234497,21.776001,1.9998169,21.5,2z M17,16v-4c-0.0014038-1.1040039-0.8959961-1.9985962-2-2V9c0-1.6568604-1.3431396-3-3-3S9,7.3431396,9,9v1c-1.1040039,0.0014038-1.9985962,0.8959961-2,2v4c0.0014038,1.1040039,0.8959961,1.9985962,2,2h6C16.1040039,17.9985962,16.9985962,17.1040039,17,16z M10,9c0-1.1045532,0.8954468-2,2-2s2,0.8954468,2,2v1h-4V9z M8,16v-4c0.0003662-0.552124,0.447876-0.9996338,1-1h0.5h5h0.0006104H15c0.552124,0.0003662,0.9996338,0.447876,1,1v4c-0.0003662,0.552124-0.447876,0.9996338-1,1H9C8.447876,16.9996338,8.0003662,16.552124,8,16z M21.5,15c-0.276123,0-0.5,0.223877-0.5,0.5V21h-5.5c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h6c0.0001831,0,0.0003662,0,0.0006104,0C21.7765503,21.9998169,22.0001831,21.776001,22,21.5v-6C22,15.223877,21.776123,15,21.5,15z"></path>
                                    </svg> Lock Screen </a>
                                <button className="dropdown-item" href="/login" onClick={handleLogout}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-inner-icn" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                        <path d="M10.6523438,16.140625c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546c0,0.276123,0.2238159,0.5,0.499939,0.500061c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l4.4941406-4.4941406c0.000061-0.000061,0.0001221-0.000061,0.0001831-0.0001221c0.1951294-0.1952515,0.1950684-0.5117188-0.0001831-0.7068481L11.359314,7.1524048c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702L14.2930298,11.5H2.5C2.223877,11.5,2,11.723877,2,12s0.223877,0.5,0.5,0.5h11.7930298L10.6523438,16.140625z M16.4199829,3.0454102C11.4741821,0.5905762,5.4748535,2.6099243,3.0200195,7.5556641C2.8970337,7.8029175,2.9978027,8.1030884,3.2450562,8.2260742C3.4923706,8.3490601,3.7925415,8.248291,3.9155273,8.0010376c0.8737793-1.7612305,2.300354-3.1878052,4.0615845-4.0615845C12.428833,1.730835,17.828064,3.5492554,20.0366821,8.0010376c2.2085571,4.4517212,0.3901367,9.8509521-4.0615845,12.0595703c-4.4517212,2.2085571-9.8510132,0.3901367-12.0595703-4.0615845c-0.1229858-0.2473145-0.4231567-0.3480835-0.6704102-0.2250977c-0.2473145,0.1229858-0.3480835,0.4230957-0.2250977,0.6704102c1.6773682,3.4109497,5.1530762,5.5667114,8.9541016,5.5537109c3.7976685,0.0003662,7.2676392-2.1509399,8.9560547-5.5526733C23.3850098,11.4996338,21.3657227,5.5002441,16.4199829,3.0454102z"></path>
                                    </svg> Log out 
                                </button>
                            </div>
                        </div>


                    </nav >
                </div>

            </div >
        </header >
    )


}

export default Header;