import * as React from 'react';
import * as ReactDom from 'react-dom';
import './App.css';
import {dataSources} from './dataSources'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort,Edit,Toolbar, Freeze } from '@syncfusion/ej2-react-grids';


class App extends React.Component {
  constructor() {
    super(...arguments);
    this.editOptions = { wrapMode:'Header', allowEditing: true, allowAdding: true, allowDeleting: true , mode: 'Normal'};
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
}
  state = {
    data: dataSources,
    pageSettings : { pageSize: 6 },
  //   sortSettings : { columns: [
  //     { field: 'HouseID', direction: 'Ascending' }
  // ] },
//   filterSettings : { columns: [
//     { field: 'Id', operator: 'greaterthan', value: null }
// ] },
  // groupSettings : { columns: ['Id'] },
  }
   render(){
    console.log(this.state.data)
    return (<GridComponent dataSource={this.state.data} 
                          allowPaging={true} pageSettings={this.state.pageSettings}
                          allowTextWrap={true} textWrapSettings={this.editOptions}
                          allowSorting={true} sortSettings={this.state.sortSettings}
                          allowMultiSorting={true}
                          allowGrouping={true} groupSettings={this.state.groupSettings}
                          allowFiltering={true} filterSettings={this.state.filterSettings}
                          editSettings={this.editOptions}  
                          toolbar={this.toolbarOptions} 
                          height={400}  rowHeight={60}
                          
                          >
      <ColumnsDirective >  
            <ColumnDirective field="Id" allowEditing={false} headerText="ID" isPrimaryKey={true} width="80px"  />
            <ColumnDirective field="HouseID" headerText="Mã House B/L" width="200px"  />
            <ColumnDirective field="Customer" headerText="Khách hàng" width="200px" editor='text' editType='dropdownedit'/>
            <ColumnDirective field="Percent" headerText="Tỷ lệ" width="120px" editType='numericedit' />
            <ColumnDirective field="FeeType" headerText="Loại phí" width="90px" editType='dropdownedit' />
            <ColumnDirective field="Money" headerText="Thành tiền" width="150px" editType='numericedit' />
            <ColumnDirective field="VAT" headerText="VAT" width="120px" editType='numericedit' />
            <ColumnDirective field="MoneyVAT" headerText="Thành tiền (VAT)" width="150px" editType='numericedit'/>
            <ColumnDirective field="ExportVATContract" headerText="xuất HĐ VAT" width="120px" editType='booleanedit' />
            <ColumnDirective field="DateExportVATContract"headerText="Ngày xuất HĐ VAT" width="200px" type='date' format="dd/MM/yyyy" editType="datepickeredit"/>
            <ColumnDirective field="importMisa" headerText="import Misa" editor='boolean' width="120px" editType='booleanedit' />
            <ColumnDirective field="PaymentStatus" headerText="Payment Status" width="120px"editType='booleanedit' />
            <ColumnDirective field="FeeNote" headerText="FeeNote" width="200px" />
            <ColumnDirective field="FeeDescription" headerText="FeeDescription" width="200px"/>
            <ColumnDirective field="ConfirmStatus" headerText="Confirm Status" width="110px" editType='booleanedit' />
      </ColumnsDirective>
      <Inject services={[Edit,Toolbar,Page, Sort, Filter, Group]}/>
    </GridComponent>);
}
}
export default App;
