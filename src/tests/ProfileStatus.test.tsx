import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "../components/Profile/ProfileInfo/ProfileStatus/ProfileStatus";

describe("ProfileStatusFunctional component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={() => {}}/>);
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance.state.status).toBe('it-kamasutra.com')
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={() => {}}/>);
        const root = component.root
        let span = root.findByType('span')
        // @ts-ignore
        expect(span).not.toBeNull()
    });

    test("after creation input should not be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={() => {}}/>);
        const root = component.root
        // @ts-ignore
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    });

    test("span with correct text", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={() => {}}/>);
        const root = component.root
        let span = root.findByType('span')
        // @ts-ignore
        expect(span.children[0]).toBe('it-kamasutra.com')
    });

    test("edit mode on", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={() => {}}/>);
        const root = component.root
        let span = root.findByType('span')
        // @ts-ignore
        expect(span.children[0]).toBe('it-kamasutra.com')
    });
});