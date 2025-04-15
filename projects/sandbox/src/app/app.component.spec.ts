import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { UploadWidgetModule } from "@bytescale/upload-widget-angular";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [BrowserModule, UploadWidgetModule]
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
