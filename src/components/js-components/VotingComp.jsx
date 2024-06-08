import React, { useEffect, useState } from "react";
import "./css/voting.css"
import {
    Button,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Card,
    Row,
    Col,
} from "react-bootstrap";
import axios from "axios";
import { getAuthUser } from "../localStorage";

//1.30
// [
//   {
//     "id": 0,
//     "categoryName": "string",
//     "numberOfCandidates": 0,
//     "logo": "string"
//   }
// ]

// https://localhost:7285/api/Voter/GetCategoryById/5 getbyid
// {
//   "id": 0,
//   "name": "string",
//   "categoryLogo": "string",
//   "dateOfEndVoting": "string",
//   "candidateDtos": [
//     {
//       "id": "string",
//       "name": "string",
//       "numberOfVotes": 0
//     }
//   ]
// }
// https://localhost:7285/api/Voter/AddVote/1?candidateId=1 param categoryId,candidateId post 
const ItemList = ({ itemstate }) => {
    const auth = getAuthUser();
    // console.log(auth+"-----------------"); 
    const [voter, setVoter] = useState({
        loading: true,
        results: [],
        err: null,
        reload: 0,
    });

    useEffect(() => {
        setVoter({ ...voter, loading: true });
        axios.get("https://localhost:7285/api/Voter/ManageElection/ManageElection")
            .then(resp => {
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbWVoNDU4QGdtYWlsLmNvbSIsImdpdmVuX25hbWUiOiJzYW1laCIsIm5hbWVpZCI6Ijg3ZTU0YmMyLTAxMTUtNDVjOC05NDVlLTFjMDYwNTMwOTZlOSIsInJvbGUiOiJWb3RlciIsIm5iZiI6MTcxNzUzMTQzMSwiZXhwIjoxNzE3NjE3ODMxLCJpYXQiOjE3MTc1MzE0MzEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyODUifQ.u1tZVy-BWbvy5GI7IwfUg59oPYnL1xrmVRhsWKfrN54';
                // const token=auth.token;
                const config = {
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                };
                console.log(resp.data);
                setVoter({ ...voter, results: resp.data, loading: false, err: null })
            })
            .catch(err => {
                setVoter({ ...voter, loading: false, err: "Something Went wrong" })
            });
    }, []);
    return (
        <div>
            <h1>Make Your Choise!</h1>
            <div>
                <Row>
                    {voter.results.map((item) => {
                        return (
                            <div>
                                <Col sm="12" className="mb-2">
                                    <Card className="parent">
                                        <CardImg
                                            className="img-item"
                                            variant="top"
                                            src={item.logo}
                                        />
                                        <CardBody>
                                            <CardText>
                                                <Row>
                                                    <div className="item-description">
                                                        {item.categoryName}
                                                    </div>
                                                </Row>
                                            </CardText>
                                            <CardTitle>
                                                <div className="item-candidate">{item.numberOfCandidates} </div>
                                            </CardTitle>

                                            <Button variant="primary">
                                                {/* <Link to="../funtion/page voting.js"/> */}

                                                Vote</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </div>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

export default ItemList;
