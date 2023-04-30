import { Divider, Table } from "antd";
import { Link } from "react-router-dom";
import { GetStudentsAll } from "../../actions/StudentAction";
import { StudentSearchBar } from "./StudentSearchBar";

import { useQuery } from "@tanstack/react-query";
import { StudentKey } from "../../ultils/keys";
import { DataLoading } from "../layout/DataLoading";
import moment from "moment";
import { useAppSelector } from "../../redux/hooks/hooks";

const StudentsList = () => {
  const { data, isLoading } = useQuery([StudentKey], () => GetStudentsAll());
  // students statews
  const student = useAppSelector((state) => state.student);

  const columns: any = [
    {
      title: "Nom",
      dataIndex: "nom",
      key: "Nom",
      render: (_: any, items: any) => items.person.nom,
    },
    {
      title: "Prenom",
      dataIndex: "prenom",
      key: "Prenom",
      render: (_: any, items: any) => items.person.prenom,
    },
    {
      title: "Telephone",
      dataIndex: "telephone",
      key: "Telephone",
      responsive: ["md"],
      render: (_: any, items: any) => items.person.telephone,
    },
    {
      title: " Lieu de naissance",
      dataIndex: "lieu_naissance",
      key: "naissance",
      responsive: ["md"],
      render: (_: any, items: any) => items.lieu_naissance,
    },

    {
      title: "	Date de naissance",
      dataIndex: "date_naissance",
      key: "naissance",
      responsive: ["md"],
      render: (_: any, items: any) =>
        moment(items.person.date_naissance).format("DD MMM YYYY"),
    },
    {
      key: "id",
      render: (_: any, items: any) => (
        <Link to={`/dashbord/profile-students/${items.person.uuid}`}>
          <button
            className='btn btn-primary'
            type='button'
            style={{ fontWeight: "bold" }}
          >
            <i className='fa fa-user'></i>
          </button>
        </Link>
      ),
    },
  ];

  return (
    <>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <StudentSearchBar />
                <div className='col-md-6 col-xs-12 mb-2 '>
                  <div className=' text-sm-end'>
                    <Link to='/dashbord/add-students'>
                      <button
                        type='button'
                        className='btn btn-primary col-xs-12 btn-blok'
                        data-bs-target='#custom-modal'
                      >
                        <i className='fa fa-plus'></i> Ajouter etudiant
                      </button>
                    </Link>
                  </div>
                </div>
                <Divider />
                {/* end col*/}
              </div>
              {isLoading ? (
                <DataLoading />
              ) : (
                <>
                  <Table
                    columns={columns}
                    dataSource={
                      student.filtered !== null ? student.filtered : data
                    }
                    rowKey='id'
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsList;
