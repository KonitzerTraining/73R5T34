import { TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';


/**
 * Test-Suite  
 * describe() is a global Jasmine function that groups together tests.
 * fdescribe() is a Jasmine function that runs only the tests inside its block.
 * xdescribe() is a Jasmine function that skips the tests inside its block.
 */
describe('AppComponent', () => {

  /**
   * beforeEach() is a global Jasmine function that runs some code before each test in a describe() block.
   * async() is an Angular testing function that allows asynchronous code to be run in the beforeEach() block.
   * 
   * beforeAll() is a global Jasmine function that runs some code once before all tests in a describe() block.
   * afterAll() is a global Jasmine function that runs some code once after all tests in a describe() block.
   * afterEach() is a global Jasmine function that runs some code after each test in a describe() block.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({ // Mini-Angular application
      imports: [
       // RouterModule.forRoot([])
       RouterOutlet
      ],
      declarations: [
        AppComponent,
        MockNavigationComponent
      ],
    }).compileComponents();
  });

  // it() is a global Jasmine function that runs a test.
  // Test cases are written inside it() functions.
  it('should create the app', () => {

    /**
     * fixture besteht aus der Komponente und dem zugehörigen Template.
     * fixture.nativeElement ist das DOM-Element der Komponente.
     * fixture.componentInstance ist die Instanz der Komponente.
     * 
     */
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Erwartung: app ist vorhanden
    // expect() is a global Jasmine function that defines an expectation.
    expect(app).toBeTruthy();
    /**
     * Matcher
     * .toBeTruthy() prüft, ob der Wert wahr ist.
     * .toBeFalsy() prüft, ob der Wert falsch ist.
     * .toEqual() prüft, ob der Wert gleich einem anderen Wert ist.
     * .toBe() prüft, ob der Wert identisch mit einem anderen Wert ist.
     * .toContain() prüft, ob ein Wert in einem Array oder einer Zeichenkette enthalten ist.
     * .toBeGreaterThan() prüft, ob ein Wert größer als ein anderer Wert ist.
     * .toBeLessThan() prüft, ob ein Wert kleiner als ein anderer Wert ist.
     * .toThrow() prüft, ob eine Funktion eine Ausnahme auslöst.
     * 
     * Mit Spy können Sie die Funktionsaufrufe überwachen.
     * .toHaveBeenCalledWith() prüft, ob eine Funktion mit bestimmten Argumenten aufgerufen wurde.
     * .toHaveBeenCalled() prüft, ob eine Funktion aufgerufen wurde.
     */
  });

/*   it(`should have as title 'crm'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('crm');
  }); */

/*   it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent)
    .toContain('Hello, crm');
  }); */
});

/**
 * Mock-Komponente
 * Eine Mock-Komponente ist eine Komponente, die anstelle einer echten Komponente in einem Test verwendet wird.
 * 
 * Test-Isolation
 * In einem Unit-Test sollte die zu testende Komponente isoliert von anderen Komponenten getestet werden.
 */
@Component({
  selector: 'app-navigation',
  template: ''
})
class MockNavigationComponent {
}