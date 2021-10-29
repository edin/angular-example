import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageTitleComponent } from "./components/page-title/page-title.component";
import { LayoutComponent } from "./layouts/layout/layout.component";

@NgModule({
    declarations: [
        PageTitleComponent,
        LayoutComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        PageTitleComponent,
        LayoutComponent
    ]
})
export class SharedModule {}