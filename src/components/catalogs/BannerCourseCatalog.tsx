import React from "react";
import { YearListButtom } from "./ui/YearListButtom";
import { SessionListButton } from "./ui/SessionListButton";
import { DetaillCatalog } from "./ui/DetaillCatalog";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Divider, Tag } from "antd";

export const BannerCourseCatalog = ({ faculty, detail }: any) => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  return (
    <>
      <div className='col-md-12'>
        {/* project card */}
        <div className='card d-block'>
          <div className='card-body'>
            <Tag color='#cd201f'>
              <b>{faculty.degree.toUpperCase()}</b>
            </Tag>
            <YearListButtom detail={detail} />
            <SessionListButton detail={detail} />
            <div className='clearfix' />
            <h4 className='text-primary bold'>
              {" "}
              <i className='fa fa-graduation-cap'></i> {faculty.nom_faculte}
            </h4>
            <p>{faculty.description}</p>
            <Divider />
            <DetaillCatalog detail={parsed} />
          </div>
        </div>
      </div>
    </>
  );
};
