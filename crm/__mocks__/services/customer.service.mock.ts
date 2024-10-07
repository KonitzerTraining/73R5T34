import { of } from "rxjs";
import { customersMock } from "../api/customers";

export const createCustomerServiceMock = () => {
    const customerServiceMock = jasmine.createSpyObj(
        'CustomerService',
        [
            'getAll', 'getById', 'postCustomer', 'putCustomer', 'deleteById'
        ]);


    customerServiceMock.getAll.and.callFake(() => {
        return of(customersMock);
    });
    customerServiceMock.getById.and.callFake(() => {
        return of(customersMock[0]);
    });

    customerServiceMock.postCustomer.and.callFake(() => {
        return of(customersMock[0]);
    });
    customerServiceMock.putCustomer.and.callFake(() => {
        return of(customersMock[0]);
    });
    customerServiceMock.deleteById.and.callFake(() => {
        return of({});
    });

    return customerServiceMock;
}