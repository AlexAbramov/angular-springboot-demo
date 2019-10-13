package com.celnap.demo.dashboard.controllers;

import com.celnap.demo.dashboard.api.CompaniesApi;
import com.celnap.demo.dashboard.model.CompanyData;
import com.celnap.demo.dashboard.model.ReqData;
import com.celnap.demo.dashboard.model.ResData;
import com.celnap.demo.dashboard.services.DataProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class DashboardController implements CompaniesApi {

    @Autowired
    DataProvider dataProvider;

    DashboardController(){

    }

    @Override
    public ResponseEntity<List<CompanyData>> companiesGet() {
        ArrayList<CompanyData> list=dataProvider.getCompanies();

        return ResponseEntity.ok(list);
    }
}

