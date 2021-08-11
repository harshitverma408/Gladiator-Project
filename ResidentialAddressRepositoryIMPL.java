package com.example.demo.layer3;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;


import com.example.demo.layer2.ResidentialAddress;
import com.example.demo.layer2.ResidentialAddressNotFoundException;

@Repository
public class ResidentialAddressRepositoryIMPL extends BaseRepository implements ResidentialAddressRepository{

	@Override
	public void insertResidentialAddress(ResidentialAddress ref) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public ResidentialAddress selectResidentialAddress(int ResidentialId) throws ResidentialAddressNotFoundException {
		EntityManager entityManager = getEntityManager();
		return entityManager.find(ResidentialAddress.class, ResidentialId);
	}

	@Override
	public List<ResidentialAddress> selectAllResidentialAddress() {
		System.out.println("ResidentialAddressRepository : Layer 3");
		EntityManager entityManager = getEntityManager();
		Query query = entityManager.createQuery("from ResidentialAddress");
		List<ResidentialAddress> ResidentialAddressList = query.getResultList();
		return ResidentialAddressList;
	}
	

}
