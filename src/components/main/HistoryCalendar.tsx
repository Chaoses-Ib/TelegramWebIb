import React, { FC, memo, useCallback } from '../../lib/teact/teact';
import { getDispatch, withGlobal } from '../../lib/teact/teactn';

import useLang from '../../hooks/useLang';

import CalendarModal from '../common/CalendarModal';

export type OwnProps = {
  isOpen: boolean;
};

type StateProps = {
  selectedAt?: number;
};

const HistoryCalendar: FC<OwnProps & StateProps> = ({
  isOpen, selectedAt,
}) => {
  const { searchMessagesByDate, closeHistoryCalendar } = getDispatch();

  const handleJumpToDate = useCallback((date: Date) => {
    searchMessagesByDate({ timestamp: date.valueOf() / 1000 });
    closeHistoryCalendar();
  }, [closeHistoryCalendar, searchMessagesByDate]);

  const lang = useLang();

  return (
    <CalendarModal
      isOpen={isOpen}
      selectedAt={selectedAt}
      isPastMode
      submitButtonLabel={lang('JumpToDate')}
      onClose={closeHistoryCalendar}
      onSubmit={handleJumpToDate}
    />
  );
};

export default memo(withGlobal<OwnProps>(
  (global): StateProps => {
    return { selectedAt: global.historyCalendarSelectedAt };
  },
)(HistoryCalendar));
