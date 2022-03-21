export const formElements =[
    {
    title: 'Email',
    type: 'text',
    fullWidth:true
  },
	{
    title: 'Phone',
    type: 'text',
    fullWidth:true
  },
	{
    title: 'Name',
    type: 'text',
    fullWidth:true
  },
	{
    title: 'Company',
    type: 'text',
    fullWidth:true
  },
 {
    title: 'country',
    type: 'dropdown',
    api: 'http://countryapi.gear.host/v1/Country/getCountries?pLimit=25&pPage=1',
    multiple: false,
    fullWidth:true
  }, 
	{
    title: 'Date',
    type: 'date',
    fullWidth:true
  }];