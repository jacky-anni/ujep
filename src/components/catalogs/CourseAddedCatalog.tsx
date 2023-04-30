import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { CatalogKey } from "../../ultils/keys";
import { getCourseCatalog } from "../../actions/CatalogAction";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { DataLoading } from "../layout/DataLoading";
import { Divider, Empty, Skeleton } from "antd";

export const CourseAddedCatalog = () => {
  const location = useLocation();
  const parsed: any = queryString.parse(location.search);

  // select teachers
  const { data, isLoading, refetch, isRefetching } = useQuery(
    [CatalogKey],
    () => getCourseCatalog(parseInt(parsed.fac), parsed.sem, parsed.year),
    {
      cacheTime: 0,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [parsed.sem, parsed.year, refetch]);

  return (
    <>
      <div className='bg-white'>
        <div className='col-md-12 p-2 '>
          <h4>
            <i className='fa fa-book'></i> Cours ajoutés
          </h4>
        </div>
        {isLoading || isRefetching ? (
          <DataLoading />
        ) : (
          <>
            {data &&
              data.map((data: any) => (
                <div key={data.id}>
                  <ul
                    className='sortable-list tasklist list-unstyled bg-white mb-1 m-1'
                    id='upcoming'
                  >
                    <li id='task1 ' className='mb-2'>
                      {/* <span className='badge bg-soft-danger text-danger float-end'>
                      Base
                    </span> */}
                      <h5 className='mt-0'>{data.courses.nom_cours}</h5>
                      <p>There are many variations of passages of</p>
                      <div className='clearfix' />
                      {/* <div className='row'>
                      <Divider />
                      <div className='inbox-widget'>
                        <div className='inbox-item'>
                          <div className='inbox-item-img'>
                            <Avatar className='rounded-circle' size={40} />
                          </div>
                          <p className='inbox-item-author'>Stillnotdavid</p>
                          <p className='inbox-item-text'>Professur</p>
                        </div>
                      </div>
                    </div> */}
                    </li>
                  </ul>
                </div>
              ))}

            {!isLoading && data.length === 0 && (
              <p className='p-2'>
                <Empty description="Pas de cours pour l'instant" />
              </p>
            )}
          </>
        )}
        <br />
      </div>
    </>
  );
};
