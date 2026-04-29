# Problem Statement Delete Feature

## Summary
Added the ability for admins to delete published problem statements from the Admin Controls page.

## Changes Made

### 1. Added Firestore Listener
- Added `onSnapshot` listener to fetch problem statements in real-time from Firestore
- Problem statements are now displayed in a live-updating list

### 2. Updated Imports
```typescript
import { addDoc, collection, doc, serverTimestamp, setDoc, updateDoc, deleteDoc, deleteField, onSnapshot, orderBy, query } from "firebase/firestore";
```

### 3. Added Delete Handler
```typescript
const handleDeleteProblemStatement = (id: string, title: string) => {
  setConfirmDelete({ id, collection: "problemStatements", message: `Delete problem statement "${title}"?` });
};
```

### 4. Redesigned Problem Statements Tab Layout

**New Structure:**
1. **Published Problem Statements List** (Top Section)
   - Shows all published problem statements
   - Displays title, track, difficulty, and description preview
   - Checkbox selection for bulk delete
   - Individual delete button for each statement
   - Empty state when no statements exist

2. **Add Problem Statement Form** (Bottom Left)
   - Title input
   - Description textarea
   - Track/Category input
   - Publish button

3. **Assign to Teams** (Bottom Right)
   - Team list with assignment dropdown
   - Dropdown now includes all published problem statements
   - "Open Choice" option still available

### 5. Features Added

**Individual Delete:**
- Click the trash icon next to any problem statement
- Confirmation modal appears
- Delete is executed after confirmation

**Bulk Delete:**
- Select multiple problem statements using checkboxes
- "Delete Selected" button appears
- Confirmation modal for bulk deletion

**Visual Feedback:**
- Selected items highlight in purple
- Purple accent theme for problem statements
- Smooth animations for list updates
- Empty state with icon when no statements exist

**Dynamic Assignment:**
- Assignment dropdown now populates with all published problem statements
- Teams can be assigned any published statement
- Real-time updates when statements are added/deleted

## UI/UX Improvements

1. **Better Organization**: Three-section layout separates viewing, adding, and assigning
2. **Visual Hierarchy**: Published statements shown prominently at the top
3. **Bulk Operations**: Select and delete multiple statements at once
4. **Confirmation Safety**: All deletes require confirmation to prevent accidents
5. **Real-time Updates**: Changes reflect immediately across all admin views
6. **Responsive Design**: Works on mobile, tablet, and desktop

## Technical Details

- Uses existing `BulkActionBar` component for consistent UI
- Leverages existing `DeleteBtn` component for individual deletes
- Reuses existing confirmation modal system
- Follows project's brutalist design system
- Purple accent color for problem statement theme
- Maintains consistency with other admin sections

## Testing Checklist

- [x] Problem statements load from Firestore
- [x] Individual delete works with confirmation
- [x] Bulk delete works with confirmation
- [x] Empty state displays correctly
- [x] Assignment dropdown includes published statements
- [x] Real-time updates work correctly
- [x] Responsive layout works on all screen sizes
- [x] No TypeScript errors
- [x] Follows existing code patterns

## Files Modified

- `client/src/components/AdminControlsPage.tsx`

## Dependencies

No new dependencies added. Uses existing Firestore methods and React hooks.
