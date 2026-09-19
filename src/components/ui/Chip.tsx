import { Pressable, Text } from 'react-native';

interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export function Chip({ label, active = false, onPress }: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      className={
        active
          ? 'shrink-0 rounded-[14px] bg-orange px-[18px] py-[9px]'
          : 'shrink-0 rounded-[14px] border border-border bg-white px-4 py-[9px]'
      }
    >
      <Text
        className={
          active
            ? 'text-[13px] font-bold text-white'
            : 'text-[13px] font-medium text-textSecondary'
        }
      >
        {label}
      </Text>
    </Pressable>
  );
}
