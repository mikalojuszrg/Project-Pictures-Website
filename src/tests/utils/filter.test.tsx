import { Photo } from "../../types/photo";
import { filterArray } from "../../utils/filter";

describe("filterArray function", () => {
  const inputArray: Photo[] = [
    {
      id: 1,
      photographer: "Name",
      url: "http://example.com/1.jpg",
      src: {
        original: "",
        large2x: "",
        large: "",
        medium: "",
        small: "",
        portrait: "",
        landscape: "",
        tiny: "",
      },
    },
  ];

  test("returns an empty array when passed an empty array", () => {
    const inputArray: Photo[] = [];
    const expectedOutput: Photo[] = [];
    expect(filterArray(inputArray)).toEqual(expectedOutput);
  });

  test("returns the same array when all items have unique IDs", () => {
    const inputArray: Photo[] = [
      {
        id: 1,
        photographer: "John",
        url: "http://example.com/1.jpg",
        src: {
          original: "",
          large2x: "",
          large: "",
          medium: "",
          small: "",
          portrait: "",
          landscape: "",
          tiny: "",
        },
      },
      {
        id: 2,
        photographer: "Jane",
        url: "http://example.com/2.jpg",
        src: {
          original: "",
          large2x: "",
          large: "",
          medium: "",
          small: "",
          portrait: "",
          landscape: "",
          tiny: "",
        },
      },
      {
        id: 3,
        photographer: "Bob",
        url: "http://example.com/3.jpg",
        src: {
          original: "",
          large2x: "",
          large: "",
          medium: "",
          small: "",
          portrait: "",
          landscape: "",
          tiny: "",
        },
      },
    ];
    const expectedOutput: Photo[] = [
      {
        id: 1,
        photographer: "John",
        url: "http://example.com/1.jpg",
        src: {
          original: "",
          large2x: "",
          large: "",
          medium: "",
          small: "",
          portrait: "",
          landscape: "",
          tiny: "",
        },
      },
      {
        id: 2,
        photographer: "Jane",
        url: "http://example.com/2.jpg",
        src: {
          original: "",
          large2x: "",
          large: "",
          medium: "",
          small: "",
          portrait: "",
          landscape: "",
          tiny: "",
        },
      },
      {
        id: 3,
        photographer: "Bob",
        url: "http://example.com/3.jpg",
        src: {
          original: "",
          large2x: "",
          large: "",
          medium: "",
          small: "",
          portrait: "",
          landscape: "",
          tiny: "",
        },
      },
    ];
    expect(filterArray(inputArray)).toEqual(expectedOutput);
  });
});
