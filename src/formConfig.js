export const formElements =[
  {
    title: 'Name',
    name: "name",
    type: 'text',
    fullWidth:true
  },
    {
    title: 'Email',
    name: "email",
    type: 'text',
    fullWidth:true,
  },
	{
    title: 'Phone',
    name: "phone",
    type: 'text',
    fullWidth:true
  },
	{
    title: 'Company',
    name: "company",
    type: 'text',
    fullWidth:true
  },
 {
    title: 'Country',
    name: "country",
    type: 'dropdown',
    api: 'http://countryapi.gear.host/v1/Country/getCountries?pLimit=25&pPage=1',
    multiple: false,
    fullWidth:true
  }, 
	{
    title: 'Date',
    name: "date",
    type: 'date',
    fullWidth:true
  }];