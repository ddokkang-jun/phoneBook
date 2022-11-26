import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const {contactList, keyword} = useSelector((state) => state);
  let [filteredName, setFilteredName] = useState([]);

  useEffect(()=>{
    if(keyword !== ""){
      let name = contactList.filter(item=>item.name.includes(keyword));
      setFilteredName(name);
    }else {
      setFilteredName(contactList);
      console.log(contactList);
    }
  },[keyword])

  return (
    <div>
      <SearchBox />
      {filteredName.map((item,index) => (
        <ContactItem item={item} key={index} />
      ))}
    </div>
  );
};

export default ContactList;
