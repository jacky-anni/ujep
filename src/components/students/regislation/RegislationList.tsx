import React, { useEffect, useState } from "react";
import { RegislationKey } from "../../../ultils/keys";
import { GetRegislation } from "../../../actions/RegisterAction";
import { useQuery } from "@tanstack/react-query";
import { group } from "group-items";
import { DataLoading } from "../../layout/DataLoading";
import { Divider } from "antd";
import { RegislationItemList } from "./RegislationItemList";

export const RegislationList = ({ student }: any) => {
  const [resgirData, setRegisterData] = useState<any | null>();
  const { data, isLoading } = useQuery(
    [RegislationKey, student.id],
    () => GetRegislation(student.id),
    {
      cacheTime: 0,
    }
  );

  useEffect(() => {
    if (data) {
      setRegisterData(group(data).by("faculte").asEntries());
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <DataLoading />
      ) : (
        <>
          {resgirData?.length > 0 && (
            <Divider plain>
              <h4>Facultés</h4>
            </Divider>
          )}
          {resgirData &&
            resgirData.map((data: any) => <RegislationItemList data={data} />)}
        </>
      )}
    </>
  );
};
