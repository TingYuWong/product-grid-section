import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import { TOAST_SEVERITY } from '@/enums/toastSeverity';

const BG_CONFIG = {
  [TOAST_SEVERITY.SUCCESS]: '#F0FDF4',
  [TOAST_SEVERITY.ERROR]: '#FEF2F2',
};

const COLOR_CONFIG = {
  [TOAST_SEVERITY.SUCCESS]: '#15803d',
  [TOAST_SEVERITY.ERROR]: '#DC2626',
};

const SEVERITY_CONFIG = {
  [TOAST_SEVERITY.SUCCESS]: '#15803d',
  [TOAST_SEVERITY.ERROR]: '#991B1B',
};

export const Message = styled.div<{ $severity: TOAST_SEVERITY }>`
  box-sizing: border-box;
  padding: 4px 10px 4px 4px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(props) => COLOR_CONFIG[props.$severity]};
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) => BG_CONFIG[props.$severity]};
`;

export const Severity = styled.div<{ $severity: TOAST_SEVERITY }>`
  box-sizing: border-box;
  padding: 2px 10px;
  background-color: #fff;
  border-radius: 20px;
  color: ${(props) => SEVERITY_CONFIG[props.$severity]};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const StyledAlert = styled(Alert)`
  background-color: transparent;
  padding: 0;
  color: transparent;
`;
