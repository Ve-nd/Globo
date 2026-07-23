 1: import React from 'react';
 2: import { Modal } from './Modal';
 3: import { Button } from './Button';
 4: 
 5: interface ConfirmDialogProps {
 6:   isOpen: boolean;
 7:   onClose: () => void;
 8:   onConfirm: () => void;
 9:   title: string;
10:   message: string;
11:   confirmText?: string;
12:   cancelText?: string;
13:   isDanger?: boolean;
14: }
15: 
16: export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
17:   isOpen,
18:   onClose,
19:   onConfirm,
20:   title,
21:   message,
22:   confirmText = 'تأكيد',
23:   cancelText = 'إلغاء',
24:   isDanger = false,
25: }) => {
26:   return (
27:     <Modal isOpen={isOpen} onClose={onClose} title={title}>
28:       <div className="pt-2 pb-6">
29:         <p className="text-gray-600 mb-8">{message}</p>
30:         <div className="flex gap-3">
31:           <Button variant="secondary" onClick={onClose} fullWidth>
32:             {cancelText}
33:           </Button>
34:           <Button 
35:             variant={isDanger ? 'danger' : 'primary'} 
36:             onClick={() => {
37:               onConfirm();
38:               onClose();
39:             }} 
40:             fullWidth
41:           >
42:             {confirmText}
43:           </Button>
44:         </div>
45:       </div>
46:     </Modal>
47:   );
48: };