import { Tag } from "antd";
import React from "react";

export const DetaillCatalog = ({ detail }: any) => {
  return (
    <>
      <div className='row'>
        <div className='col-md-4'>
          <p className='mt-2 mb-1 text-muted'>Session </p>
          <div className='d-flex align-items-start'>
            <div className='w-100'>
              <h5 className='mt-1 font-13'>
                {detail.sem === "I" ? "Premiere session" : "Deuxieme session"}
              </h5>
            </div>
          </div>
          {/* end assignee */}
        </div>
        {/* end col */}
        <div className='col-md-4'>
          {/* start due date */}
          <p className='mt-2 mb-1 text-muted'>Niveau</p>
          <div className='d-flex align-items-start'>
            <div className='w-100'>
              <h5 className='mt-1 font-13'>
                {detail && detail.year === 1
                  ? detail.year + "ère "
                  : detail.year + "ème "}
                année
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
