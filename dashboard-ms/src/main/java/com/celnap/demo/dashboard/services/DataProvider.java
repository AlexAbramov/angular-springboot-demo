package com.celnap.demo.dashboard.services;
import com.celnap.demo.dashboard.model.CompanyData;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class DataProvider {


    public ArrayList<CompanyData> getCompanies() {
        ArrayList<CompanyData> list=new ArrayList<CompanyData>();

        list.add(createCompany(1,"Microsoft", 125.8));
        list.add(createCompany(2,"Cisco", 49.33));
        list.add(createCompany(3,"Verizon", 130.9));
        list.add(createCompany(4,"Oracle", 39.83));
        list.add(createCompany(5,"Amazon", 232.9));
        list.add(createCompany(6,"Apple", 258.5));
        list.add(createCompany(7,"Google", 116.0));

        return list;
    }

    CompanyData createCompany(int id, String name, double revenue){
        CompanyData company=new CompanyData();
        company.setId(id);
        company.setName(name);
        company.setRevenue(revenue);
        return company;
    }

}
