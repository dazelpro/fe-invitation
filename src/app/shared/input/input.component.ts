import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    @Input() label: string;
    @Input() placeholder: string;
    @Input() type: string;
    @Input() name: string;
    @Input() model: any;
    @Input() validation: boolean;
    @Input() errorMessage: string;

    @Output() public enterAction: EventEmitter<Event>;
    @Output() modelChange: any = new EventEmitter();

    constructor() {
        this.enterAction = new EventEmitter();
    }

    ngOnInit(): void {}

    public enterProps() {
        this.enterAction.emit();
    }

    updateData(event) {
        this.model = event;
        this.modelChange.emit(event);
    }
}
