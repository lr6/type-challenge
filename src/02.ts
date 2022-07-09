// 数组的重新构造
type tuple = [1, 2, 3]
type Push<Arr extends unknown[], Ele> = [...Arr, Ele]
type Unshift<Arr extends unknown[], Ele> = [Ele, ...Arr]
type PushResult = Push<tuple, 4>
type UnshiftResult = Unshift<tuple, 0>
// -------------------
type tuple1 = [1, 86]
type tuple11 = [1, 86, '49']
type tuple2 = ['china', 'canada']
type tuple22 = ['china', 'canada', 'german']
type Zip<One extends [unknown, unknown], Other extends [unknown, unknown]> =
    One extends [infer OneFirst, infer OneSecond]
        ? Other extends [infer OtherFirst, infer OtherSecond]
            ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]: []
        : []
type ZipAdvance<One extends unknown[], Other extends unknown[]> =
    One extends [infer OneFirst, ...infer OneRest]
        ? Other extends [infer OtherFirst, ...infer OtherRest]
            ? [[OneFirst, OtherFirst], ...ZipAdvance<OneRest, OtherRest>]: []
        : []
type ZipResult = Zip<tuple1, tuple2>
type ZipAdvanceResult = ZipAdvance<tuple11, tuple22>

// 字符串的重新构造
type season = 'sommer'
type CapitalizeStr<Str extends String> = Str extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}` : Str
type CapitalizeStrResult = CapitalizeStr<season>

type seasons = 'so_mm_er'
type FormatSeason<Str extends String> = Str extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${FormatSeason<Rest>}` : Str
type FormatSeasonResult = FormatSeason<seasons>

type DropSubStr<str extends string, subStr extends string> =
    str extends `${infer prefix}${subStr}${infer suffix}`
        ? DropSubStr<`${prefix}${suffix}`, subStr> : str

type DropSubStrResult = DropSubStr<'sommer', 'm'>