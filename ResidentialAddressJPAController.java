package com.example.demo.layer5;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.layer2.ResidentialAddress;
import com.example.demo.layer2.ResidentialAddressNotFoundException;
import com.example.demo.layer3.ResidentialAddressRepositoryIMPL;


@Controller
@RequestMapping(value = "/residentialaddress")
public class ResidentialAddressJPAController {
	
		
		@Autowired
		ResidentialAddressRepositoryIMPL r;
		
		
		public ResidentialAddressJPAController() {
			System.out.println("ResidentialAddressJPAController() Created");
		}
		
		
		@GetMapping
		@ResponseBody
		@RequestMapping(value = "/greet", method = RequestMethod.GET)
		String greetEmployee() {
			
			return "Hello ResidentialAddress";

		}
		
		@GetMapping
		@ResponseBody
		@RequestMapping(value = "/getResidentialAddress/{ResidentialId}")
		public ResidentialAddress getEmployee(@PathVariable int ResidentialId) {
			System.out.println("getResidentialAddress()...method ");
			
			try {
				return r.selectResidentialAddress(ResidentialId);
			} catch (ResidentialAddressNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return null;
			
		}
		
		@GetMapping
		@ResponseBody
		@RequestMapping(value = "/getAllResidentialAddress")
		public List<ResidentialAddress> getAllResidentialAddresss(){
			return r.selectAllResidentialAddress();
		}

	}

