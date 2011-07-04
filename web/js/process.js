/*
tweelyne
Version 0.1
 */
/**
 * This file contains the data processing code for Porcupine.
 */
function parseTwitterData(status) {
	var tableStart,tableEnd,table;
		tableStart="<!-- TIMEGLIDER PLACEMENT: Put the intended location for the timeline  "+
					 "directly above the data table -->"+
				"<div id='placement'></div>"+
				"<!-- TABLE ATTRIBUTES: The id of the table is what you use to reference the data"+
					" source in the jQuery widget code; other attributes relate to the timeline itself"+
					 "where it focuses in time, and how to set up the zoom level. -->"+
				"<div id='twitter-data'>"+
					
	"			<table class='timeline-table' id='mylife' focus_date='1985-06-12'"+
	"					   title='my life' initial_zoom='48' description='The Wild and Wooly times of Michael Richardson.'>"+		
	"					<tr>"+
	"						<th class='tg-startdate'>start date</th>"+
	"						<th class='tg-enddate'>end date</th>"+
	"						<th class='tg-title'>title</th>"+
	"						<th class='tg-description'>description</th>"+
	"						<th class='tg-icon'>icon</th>"+
	"						<th class='tg-importance'>importance</th>"+
	"						<th class='tg-link'>link</th>"+	
	"					</tr>";
		tableEnd="</table></div> <!-- /#twitter-data -->";
	jQuery.each(status,function(index){
		var text,created_at,date,formattedDate,m,title;
		text=status[index].text;
		created_at=status[index].created_at;
		date=created_at.split(" ");
		spybug.spy("converting month "+date[1]);
		m=convertMonth(date[1]);
		formattedDate=date[5]+"-"+m+"-"+date[2];
		spybug.spy("formatted date:"+formattedDate);
		title=text.substring(0,10);
		title=title+"...";
		spybug.spy("paramaters: start date="+formattedDate+" , end date="+
			formattedDate+" , title="+title+" ,decription="+text);
		table=table+generateTableData(formattedDate,formattedDate,title,text);
	});
	table=tableStart+table+tableEnd;
	spybug.spy(table);
	return table;
}
function convertMonth(month)
{
	var monthArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var monthNumber;
	jQuery.each(monthArray,function(index){
		if(monthArray[index]==month)
		{
			monthNumber=index+1;
		}
	});
	if(monthNumber<10)
	{
		monthNumber="0"+monthNumber;
	}
	return monthNumber;
}
function generateTableData(startDate,endDate,title,decription){
	var htmlrow=""+
	"			<tr>"+
	"				  <td>"+startDate+"</td>"+
	"				  <td>"+endDate+"</td>"+
	"				  <td>"+title+"</td>"+
	"				  <td>"+decription+"</td>"+
	"				  <td></td>"+
	"				  <td>50</td>"+
	"				  <td></td>"+
	"			</tr>";
	spybug.spy(htmlrow);
	return htmlrow;
	
}