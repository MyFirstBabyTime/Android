import React, {useState, useCallback} from 'react';
import * as S from './style';
interface Props {
  yearList: (now: number) => number[];
}
interface DateDataInterface {
  year: number;
  month: number;
  day: number;
}
const monthArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const SettingBirth: React.FC<Props> = ({yearList}) => {
  const [dateData, setDateData] = useState<DateDataInterface>({
    year: 0,
    month: 0,
    day: 0,
  });

  const dateReturn = useCallback(() => {
    let dateArr: number[] = [];
    const j: number = new Date(dateData.year, dateData.month, 0).getDate();
    for (let i = 0; i <= j; i++) dateArr.push(i);
    return dateArr;
  }, [dateData]);
  return (
    <S.Body>
      <S.Text>생년월일</S.Text>
      <S.PickerBox>
        <S.BorderPicker>
          <S.Picker
            width={120}
            selectedValue={`${dateData.month}`}
            onValueChange={(val, idx) =>
              setDateData({...dateData, year: yearList(21)[idx]})
            }>
            {yearList(21).map(ele => (
              <S.Picker.Item label={`${ele}년`} />
            ))}
          </S.Picker>
        </S.BorderPicker>
        <S.BorderPicker>
          <S.Picker
            width={90}
            selectedValue={`${dateData.month}`}
            onValueChange={(val, idx) =>
              setDateData({...dateData, month: monthArr[idx]})
            }>
            {monthArr.map(ele => {
              return <S.Picker.Item label={`${ele}`} />;
            })}
          </S.Picker>
        </S.BorderPicker>
        <S.BorderPicker>
          <S.Picker width={100}>
            {dateReturn().map(ele => (
              <S.Picker.Item label={`${ele}일`} />
            ))}
          </S.Picker>
        </S.BorderPicker>
      </S.PickerBox>
    </S.Body>
  );
};
export default SettingBirth;
